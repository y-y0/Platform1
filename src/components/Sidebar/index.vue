<template>
  <div class="sidebar">

    <div class="content">
      <div class="top">
        <ul class="list-group">
          <router-link class="list-group-item active" data-icon="icon1" to="/">
            <img src="./images/icon1.png" class="icon" alt="">
            <a class="li-item">首页</a>
          </router-link>

          <router-link class="list-group-item" data-icon="icon2" to="/recent_work">
            <img src="./images/icon2.png" class="icon icon2" alt="">
            <a class="li-item">最近作品</a>
          </router-link>

          <router-link class="list-group-item" data-icon="icon3" to="/collection">
            <img src="./images/icon3.png" class="icon" alt="">
            <a class="li-item">我的收藏</a>

          </router-link>
          <router-link class="list-group-item" data-icon="icon4" to="/personal_space">
            <img src="./images/icon4.png" class="icon" alt="">
            <a class="li-item">个人空间</a>
          </router-link>

          <router-link class="list-group-item" data-icon="icon5" to="/shared_space">
            <img src="./images/icon5.png" class="icon" alt="">
            <a class="li-item">共享空间</a>
            <img src="./images/vip.png" alt="" class="vip">
          </router-link>

          <router-link class="list-group-item" data-icon="icon6" to="/brand">
            <img src="./images/icon6.png" class="icon" alt="">
            <a class="li-item">品牌规范 </a>
            <img src="./images/vip.png" alt="" class="vip">
          </router-link>

        </ul>
      </div>
      <div class="bottom">

        <div class="progress" role="progressbar" aria-label="example" aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100">
          <div class="progress-bar" :style="{ width: leave1 + '%' }"></div>
        </div>
        <div class="data">
          <p class="left">空间使用</p>
          <p class="right">{{ leave1 }}/500MB</p>
        </div>


        <div class="progress" role="progressbar" aria-label="example" aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100">
          <div class="progress-bar" :style="{ width: leave2 + '%' }"></div>
        </div>
        <div class="data">
          <p class="left">剩余空间</p>
          <p class="right">{{ leave2 }}/500MB</p>
        </div>

        <a href="#" class="btn">
          <img src="./images/vip.png" alt="">升级权益
        </a>
      </div>
    </div>

    <div class="floor">
      <img src="./images/avatar.png" alt="">
      <p>游客yld</p>
    </div>

  </div>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const leave1 = ref(0)
const leave2 = ref(500)


onMounted(() => {
  const elements = document.querySelectorAll('.list-group-item');
  elements.forEach(element => {

    element.addEventListener('click', () => {

      elements.forEach(e => e.classList.remove('active'))

      element.classList.add('active');

    });
  });



})



</script>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 174px;
  height: 676px;
  margin-right: 4px;


  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 624px;
    background-color: rgb(255, 255, 255);

    padding: 10px;

    .top {
      .list-group {
        .list-group-item {
          display: flex;
          align-items: center;
          height: 30px;
          border: none;

          margin-bottom: 10px;

          .icon {
            margin-right: 15px;
          }

          .vip {
            margin-left: 15px;
          }

          .li-item {
            /* 二级 */
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 10px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0%;
            text-align: left;
            text-decoration: none;
          }
        }

        .active {
          background: linear-gradient(to right, #6A2FFF 0%, #8C3DFF 53%, #AE4AFF 100%);
          border-radius: 5px;
          color: #FFFFFF;

          .li-item {
            color: rgb(255, 255, 255);
          }
        }
      }

    }

    .bottom {
      .data {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;

        p {
          color: #676767;
          font-size: 12px;
        }
      }

      .progress-bar {
        background: linear-gradient(to right, #6A2FFF 0%, #8C3DFF 53%, #AE4AFF 100%);
      }

      .btn {
        width: 153px;
        height: 27px;
        height: 30px;
        border-radius: 7px;
        /* 新版/渐变紫20% */
        background: linear-gradient(90.00deg, rgba(106, 47, 255, 0.2), rgba(140, 61, 255, 0.2) 53%, rgba(174, 74, 255, 0.2) 100%);
        color: #474554;
        font-family: Inter;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0%;
      }
    }
  }

  .floor {
    display: flex;

    background-color: #FFFFFF;
    padding-top: 10px;
    padding-left: 10px;

    img {
      width: 25px;
      height: 25px;
      margin-right: 10px;
    }

    p {
      padding-top: 3px;
      font-size: 12px;
    }
  }
}
</style>