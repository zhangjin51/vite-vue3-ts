<template>
  <el-form ref='ruleFormRef' :model="ruleForm" :rules='rules' label-width='80px' style="max-width: 320px">
    <el-form-item label="用户名" prop='username'>
      <el-input v-model="ruleForm.username" placeholder='请输入用户名' />
    </el-form-item>
    <el-form-item label="密码" prop='password'>
      <el-input v-model="ruleForm.password" placeholder='请输入密码' />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ],
})

const submitForm = (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

</script>

<style lang=scss scoped>
</style>