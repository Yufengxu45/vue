<template>
  <Card class="login" dis-hover>
    <p slot="title">用户注册</p>
    <Form class="form" ref="loginForm" :model="form" :rules="rules" :label-width="0" label-position="left">
      <Form-item>
            <i-select :model.sync="form.select" size="large" placeholder="请选择注册账户类型">
                <i-option value="customer">客户</i-option>
                <i-option value="supplier">供应商</i-option>
            </i-select>
      </Form-item>  
      <Form-item prop="username">
        <Input v-model="form.username" size="large" prefix="md-person" placeholder="请输入账号"/>
      </Form-item>
      <Form-item prop="password">
        <Input v-model="form.password" type="password" size="large" prefix="md-lock" placeholder="请输入密码" />
      </Form-item>
      <Form-item>
        <Button type="warning" size="large" long @click="register">注册</Button>
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

    register(){
      this.$Message.success('注册成功')
      this.$router.push({path:'/'})
      
    },
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

