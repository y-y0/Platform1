<template>

  <div class="content">
    <div class="top">
      <h3>Hello! <span>欢迎使用家乐伴</span></h3>

      <div class="card">
        <img src="./images/img.png" class="card-img-top" alt="...">
        <p class="card-text">数字人制作</p>
      </div>
    </div>

    <div class="bottom">
      <span>创作同款</span>

      <div class="card-content">

        <div class="card">
          <img src="./images/img1.png" class="card-img-top" alt="...">
          <p class="card-text">数字人使用教程</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img2.png" class="card-img-top" alt="...">
          <p class="card-text">健康知识科普</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img3.png" class="card-img-top" alt="...">
          <p class="card-text">防诈骗知识宣传</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img4.png" class="card-img-top" alt="...">
          <p class="card-text">学校导学微课</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img5.png" class="card-img-top" alt="...">
          <p class="card-text">个人教师工作汇报</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
              <span>4.1万</span>
            </div>
          </div>
        </div>

        <div class="card">
          <img src="./images/img6.png" class="card-img-top" alt="...">
          <p class="card-text">数字人制作</p>
          <div class="card-floor">
            <div class="left">
              <img src="./images/avatar.png" alt=""><span>数字人</span>
            </div>
            <div class="right">
              <img src="./images/icon.png" alt="">
              <span>4.1万</span>
              <img src="./images/icon1.png" alt="">
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
.content {
  background-color: #FFFFFF;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  height: 676px;

  .top {


    .card {
      width: 256px;
      height: 184px;
      clear: both;
      border-radius: 8px;
      box-shadow: 0px 0px 4px 4px rgba(188, 188, 188, 0.25);
      background: rgb(255, 255, 255);

      .card-img-top {
        margin: 5px;
        width: 246px;
        height: 145px;
        border-radius: 6px;
      }

      .card-text {
        color: rgb(71, 69, 84);
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0%;
        margin-left: 8px;
        margin-bottom: 5px;
      }
    }
  }

  .bottom {
    margin-top: 20px;

    .card-content {

      display: flex;
      flex-wrap: wrap;

      .card {
        width: 200px;
        height: 158px;
        margin-top: 10px;
        margin-right: 15px;

        .card-img-top {
          margin: 5px;
          width: 190px;
          height: 113px;
          border-radius: 6px;
        }

        .card-text {
          color: rgb(71, 69, 84);
          font-family: Inter;
          font-size: 10px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0%;
          margin-left: 8px;
          margin-bottom: 0px
        }

        .card-floor {
          display: flex;
          justify-content: space-between;
          margin: auto 8px;

          span {
            font-size: 10px;
            line-height: 11px;
            margin-left: 5px;
            color: #8F959D;
          }
        }
      }
    }
  }
}

span {
  color: rgb(71, 69, 84);
  font-family: Inter;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0%;
  text-align: left;
}
</style>