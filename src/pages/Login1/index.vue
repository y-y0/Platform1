<template>
  <div class="main">
    <div class="container">

      <div class="card-body">
        <h5 class="card-title">Welcome</h5>
        <p class="card-text">未注册的用户请先注册账号</p>

        <div class="choose">
          <!-- <p :class="{ active: activeTab === 'password' }" @click="setActiveTab('password')">密码登录</p>
          <p :class="{ active: activeTab === 'code' }" @click="setActiveTab('code')">验证码登录</p> -->
          <router-link to="/login">密码登录</router-link>
          <router-link to="/login1" class="active">验证码登录</router-link>
        </div>

        <div class="input_content">
          <input type="text" class="form" placeholder="请输入账号">
          <input type="text" class="form" placeholder="请输入密码">
        </div>


        <label class="privacy">
          <input type="checkbox" class="check">

          <p class="text">已阅读并同意<span class="btext">服务协议</span>和<span class="btext">隐私条款</span></p>
        </label>

        <div class="button">
          <a href="#" class="btn login">登录</a>
          <router-link to="/register" class="btn register">立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  height: 720px;
  background: url(./images/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;


  .container {
    width: 324px;
    height: 396px;
    background-color: yellow;
    padding: 40px 48px;
    border-radius: 8px;
    box-shadow: 0px 4px 30px 0px rgba(198, 198, 198, 0.3);
    /* 新版/渐变蓝20% */
    background: linear-gradient(90.00deg, rgba(2, 60, 253, 0.2), rgba(3, 114, 254, 0.2) 53%, rgba(3, 167, 255, 0.2) 100%);



    .card-body {
      background-color: rgba(255, 255, 255, 0);

      .card-title {
        color: rgb(71, 69, 84);
        font-family: Inter;
        font-size: 18px;
        font-weight: 700;
        line-height: 21.6px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 11px;
      }

      .card-text {
        color: rgb(241, 241, 241);
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0%;
        text-align: left;
      }

      .choose {
        display: flex;


        a {
          text-decoration: none;
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
          line-height: 15px;
          color: rgb(255, 255, 255);
          margin-bottom: 15px;
        }

        a:first-child {
          margin-right: 20px;
        }

        .active {

          background-image: linear-gradient(14.04deg, rgb(111, 30, 243) 18.07%, rgb(13, 112, 214) 81.93%);
          -webkit-background-clip: text;
          color: transparent;

          border-bottom: 1.5px solid;
          border-image: linear-gradient(14.04deg, rgb(111, 30, 243) 18.07%, rgb(13, 112, 214) 81.93%) 1;
        }

      }

      .input_content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .form {
          width: 224px;
          height: 34px;
          border-radius: 4px;
          background: rgb(241, 241, 241);
          border: none;
          margin-bottom: 20px;

          &::placeholder {
            color: rgb(143, 149, 157);
            font-family: Inter;
            font-size: 10px;
            font-weight: 400;
            text-align: left;
            padding-left: 10px;
          }
        }
      }

      .privacy {
        display: flex;

        .check {
          box-sizing: border-box;
          border: 1px solid rgb(255, 255, 255);
          border-radius: 2px;
          margin-right: 4px;
          width: 14px;
          height: 14px;
        }

        .text {
          line-height: 14px;
          font-size: 8px;
          color: rgb(255, 255, 255);
          font-weight: 400;
          letter-spacing: 1px;

          .btext {
            color: rgb(71, 69, 84);
          }

        }
      }

      .button {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .login {
          width: 224px;
          height: 30px;
          border-radius: 4px;

          background: linear-gradient(14.04deg, rgb(150, 30, 243) 14.321%, rgb(13, 112, 214) 85.679%);

          color: rgb(255, 255, 255);
          font-family: Inter;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0%;
          margin-bottom: 30px;

        }

        .register {
          color: rgb(255, 255, 255);
          font-family: Inter;
          font-size: 10px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0%;
          text-align: center;

        }
      }
    }
  }
}
</style>