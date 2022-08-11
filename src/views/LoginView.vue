<template>
  <div class="form-container" v-if="data">
    <div class="form-wrap">
      <h2 class="header" ref="header">蜂蜜后台管理系统</h2>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="65px"
        style="min-width: 320px"
      >
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="ruleForm.user_name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="ruleForm.password"
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item class="captcha_code" label="验证码" prop="captcha_code">
          <el-input
            v-model="ruleForm.captcha_code"
            placeholder="请输入用户名"
          />
          <el-image :src="src" @click="handleCaptchaCodeClick">
            <template #placeholder>
              <div class="image-slot">
                Loading
                <span class="dot">...</span>
              </div>
            </template>
          </el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useLogin from '@/hooks/useLogin'
const data = useLogin()
const {
  ruleFormRef,
  ruleForm,
  rules,
  src,
  handleCaptchaCodeClick,
  submitForm
} = data
</script>

<style lang="scss" scoped>
.form-container {
  width: 100%;
  height: 100%;
  background: $loginBg;
  position: relative;
  .form-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .header {
      color: #fff;
      text-align: center;
      margin-bottom: 32px;
    }
    .el-form {
      background-color: #fff;
      padding: 30px 25px 0px;
      border-radius: 10px;

      .el-form-item {
        .el-button {
          width: 100%;
          margin: 10px auto;
        }
      }
      .captcha_code {
        ::v-deep .el-form-item__content {
          flex-wrap: nowrap;
          box-sizing: border-box;
          .el-image {
            cursor: pointer;
            img {
              height: 32px;
            }
          }
        }
      }
    }
  }
}
</style>
