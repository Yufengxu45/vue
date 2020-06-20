<template>
  <Card class="login" dis-hover>
    <p slot="title">用户登录</p>
    <Form class="form" ref="loginForm" :model="form" :rules="rules" :label-width="0" label-position="left">
      <Form-item prop="username">
        <Input v-model="form.username" size="large" prefix="md-person" placeholder="请输入账号"/>
      </Form-item>
      <Form-item prop="password">
        <Input v-model="form.password" type="password" size="large" prefix="md-lock" placeholder="请输入密码" />
      </Form-item>
      <Form-item>
        <Button type="primary" size="large" long @click="onLogin">登录</Button>
      </Form-item>
    </Form>
  </Card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true, message: '账号不能为空'
          }
        ],
        password: [
          {
            required: true, message: '密码不能为空'
          }
        ]
      }
    }
  },
  methods: {
    onLogin () {
      this.$Message.success('登录成功')
    }
  }
}
</script>

<style>
  .login {
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -80%);
    background-color: white;
    width: 320px;
  }

  .form {
    margin: 10px, null, 10px, null;
  }
</style>

