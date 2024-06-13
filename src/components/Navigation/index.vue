<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="./images/icon.png" alt="">
        <button>体验版</button>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <router-link class="nav-item" to="/home">
            <span class="nav-link active">首页</span>
          </router-link>


          <router-link class="nav-item" to="/piece">
            <span class="nav-link">作品中心</span>
          </router-link>

          <router-link class="nav-item dropdown" to="/scene">
            <span class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              应用场景
            </span>

            <ul class="dropdown-menu">
              <router-link class="dropdown-item" to="/scene">知识科普</router-link>
            </ul>

          </router-link>

          <router-link class="nav-item" to="/paid">
            <span class="nav-link">付费订阅</span>
          </router-link>

          <router-link class="nav-item" to="/tutorial">
            <span class="nav-link">教程</span>
          </router-link>
        </ul>
        <div class="d-flex">
          <img src="./images/sicon.png" class="icon" alt="">
          <button>新建作品</button>

          <img src="./images/avatar.png" alt="" class="avatar">
          <span>YLD</span>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const listItems = document.querySelectorAll('.nav-link');
  listItems.forEach(item => {
    item.addEventListener('click', function () {
      listItems.forEach(li => li.classList.remove('active'));
      item.classList.add('active');
    });
  });
});
</script>


<style scoped lang="scss">
.navbar {

  padding: 0px 20px;
  background-color: white;
  height: 40px;
  margin-bottom: 4px;

  .container-fluid {
    padding: auto 31px;

    .navbar-brand {
      display: flex;
      align-items: center;

      img {
        height: 20px;
        margin-right: 15px;
      }

      button {
        width: 60px;
        height: 24px;
        border-radius: 5px;
        background: linear-gradient(14.04deg, rgb(111, 30, 243) -6.319%, rgb(13, 112, 214) 106.319%);

        border: none;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 10px;
        letter-spacing: 0%;
      }

      img {
        height: 28px;
      }
    }


    .navbar-nav {
      display: flex;
      align-items: center;

      .nav-item {

        margin-left: 20px;
        text-decoration: none;


        .nav-link {
          color: #8F959D;

        }

        .active {
          padding-left: 3px;
          padding-right: 3px;
          padding-bottom: 1px;
          margin-bottom: 5px;
          color: #474554;
          border-bottom: 2px #474554 solid;
          font-weight: 550;
        }
      }
    }

    .d-flex {
      display: flex;
      align-items: center;
      /* 垂直居中对齐 */

      .icon {
        margin-right: 20px;
        width: 24px;
        height: 24px;
      }

      button {

        width: 67px;
        height: 24px;
        border-radius: 5px;
        border: none;

        /* 新版/渐变紫 */
        background: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255) 53%, rgb(174, 74, 255) 100%);

        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0%;

        margin-right: 20px;

      }


      .avatar {
        width: 30px;
        height: 30px;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;

      }

      span {
        color: #474554;
        font-size: 12px;
      }
    }

  }

}
</style>