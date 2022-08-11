import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { dosendmsgcode, adminLogin } from '@/api/user.js'
import { useRouter } from 'vue-router'
export default () => {
  const router = useRouter()
  if (localStorage.getItem('token')) {
    ElMessage({
      message: '已保存登录状态，自动登录',
      type: 'success'
    })
    router.push('/')
    return false
  }

  const ruleFormRef = ref<FormInstance>()

  const ruleForm = reactive({
    user_name: '',
    password: '',
    captcha_code: ''
  })

  const rules = reactive({
    user_name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    captcha_code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
  })

  // 验证码图片地址
  const src = ref('')
  // 控制点击更新验证码后在数据返回之前不允许重复点击
  let flag = true

  // setup 代替了created，本身也是生命周期函数可以直接请求页面加载就需要使用的数据
  dosendmsgcode().then((res) => {
    src.value = res.code
  })

  const handleCaptchaCodeClick = () => {
    if (!flag) return
    flag = false
    dosendmsgcode().then((res) => {
      src.value = res.code
      flag = true
    })
  }

  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        const { user_name, password } = ruleForm
        adminLogin({
          user_name,
          password
        }).then((res) => {
          if (res.status === 1) {
            localStorage.setItem('token', '1')
            router.push('/')
            ElMessage({
              message: '登录成功！',
              type: 'success'
            })
          } else {
            ElMessage({
              message: res.message,
              type: 'error'
            })
          }
        })
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  return {
    ruleFormRef,
    ruleForm,
    rules,
    src,
    handleCaptchaCodeClick,
    submitForm
  }
}
