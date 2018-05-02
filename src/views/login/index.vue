<template>
  <div class="login-container">
    <Card>
      <p slot="title">登录</p>
    <Form :model="loginForm"  class="login-form" ref="loginForm">
      <FormItem>
          <Input v-model="loginForm.username" placeholder="用户名">
           <Icon type="ios-person-outline" slot="prepend"></Icon></Input>
      </FormItem>
      <FormItem>
          <Input v-model="loginForm.password" placeholder="密码">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
        <Button type="primary" size="large" style="width:100%;margin-bottom:30px;" :loading="loading" @click.native.prevent="handleLogin" @keyup.enter.native="handleLogin">登录</Button>
        <Button type="primary" size="large" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegiste">注册</Button>
    </Form>
  </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {},
      loginRules: {
        username: "admin",
        password: "1111111"
      },
      loading: false
    };
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      this.loading = true;
      //   }
      // });
    },
    handleRegiste() {
      this.$router.push({ path: "/register" });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg: #2d3a4b;
$light_gray: #eee;

/* reset css */
.login-container {
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
// $bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

// .login-container {
//   position: fixed;
//   height: 100%;
//   width: 100%;
//   .login-form {
//     position: absolute;
//     left: 0;
//     right: 0;
//     width: 320px;
//     padding: 35px 35px 15px 35px;
//     margin: 120px auto;
//   }
//   .title-container {
//     position: relative;
//     .title {
//       font-size: 26px;
//       font-weight: 400;
//       color: $light_gray;
//       margin: 0px auto 40px auto;
//       text-align: center;
//       font-weight: bold;
//     }
//   }
// }
</style>
