<template>
  <div class="main">
    <div class="container">
      <div class="title">
        教程中心
      </div>

      <div class="card-content">
        <div class="card">
          <img src="./images/img1.png" class="card-img-top" alt="...">
          <p class="card-text">第1期：一分钟快速上手家乐伴</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img2.png" class="card-img-top" alt="...">
          <p class="card-text">第2期：家乐伴简介</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img3.png" class="card-img-top" alt="...">
          <p class="card-text">第3期：探索模板</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img4.png" class="card-img-top" alt="...">
          <p class="card-text">第4期：应用模板</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img5.png" class="card-img-top" alt="...">
          <p class="card-text">第5期：新建作品</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img6.png" class="card-img-top" alt="...">
          <p class="card-text">第6期：巧妙运镜</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img7.png" class="card-img-top" alt="...">
          <p class="card-text">第7期：精控动作</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img8.png" class="card-img-top" alt="...">
          <p class="card-text">第8期：视频包装（上）</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img9.png" class="card-img-top" alt="...">
          <p class="card-text">第9期：视频包装（下）</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img10.png" class="card-img-top" alt="...">
          <p class="card-text">第10期：高效生成视频技巧</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt="">
            </div>
            <div class="right">
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon2.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  background-color: rgb(255, 255, 255);
  height: 480px;

  .container {
    padding-top: 20px;

    .title {
      margin-bottom: 20px;

      color: rgb(103, 103, 103);
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0%;
      text-align: left;
    }

    .card-content {
      display: flex;
      flex-wrap: wrap;


      .card {
        width: 18%;
        height: 160px;

        margin-right: 2%;

        .card-img-top {
          width: 100%;
          height: 113px;
        }

        .card-text {
          color: rgb(71, 69, 84);
          font-family: Inter;
          font-size: 10px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0%;
          text-align: left;
          margin-top: 10px;
          margin-bottom: 0px;
          padding-left: 10px;
        }

        .card-floor {
          display: flex;
          justify-content: space-between;
          padding-left: 10px;
          padding-right: 10px;

          img {
            width: 11px;
            height: 11px;
          }

          span {
            font-size: 10px;
            line-height: 11px;
            margin: auto 5px;
            color: #8F959D;
          }
        }
      }


      .card:nth-child(n+6) {
        margin-top: 20px;
      }

      .card:nth-child(5n) {
        margin-right: 0px;
      }

    }
  }
}
</style>