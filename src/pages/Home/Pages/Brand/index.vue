<template>

  <div class="main">

    <h3>品牌规范</h3>

    <div class="row g-0">
      <div class="col-md-5">
        <div class="card-body">
          <h5 class="card-title">统一规范共创视频作品</h5>
          <h5 class="card-title1">企业品牌规范设置</h5>

          <p class="card-text">上传品牌LOGO，企业宣传片等企业品牌规范，方便团队成员用统一规范共创视频作品</p>
          <div class="bottom">
            <button class="btn1">创建团队</button>
            <button class="btn2">了解更多</button>
          </div>
        </div>
      </div>

      <div class="col-md-5">
        <img src="./images/img.png" class="img-fluid rounded-start" alt="...">
      </div>
    </div>

  </div>


</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  background-color: #FFFFFF;
  padding: 30px;
  flex-direction: column;
  height: 676px;
  width: 100%;

  h3 {
    /* 一级 */
    color: rgb(71, 69, 84);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0%;
    text-align: left;
  }

  .row {
    height: 400px;
    display: flex;
    align-content: center;
    justify-content: center;

    .card-body {
      display: flex;
      flex-direction: column;

      justify-content: space-between;

      .card-title {
        /* 上一级 */
        color: rgb(71, 69, 84);
        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 10px;
      }

      .card-title1 {
        /* 上一级 */
        background: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255), rgb(174, 74, 255));
        -webkit-background-clip:
          text;
        -webkit-text-fill-color:
          transparent;
        background-clip:
          text;

        font-family: Inter;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: left;
        margin-bottom: 15px;
      }

      .card-text {
        /* 二级 */
        color: rgb(143, 149, 157);
        font-family: Inter;
        font-size: 10px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: 0%;
        text-align: left;
        width: 60%;
        margin-bottom: 15px;
      }


      .btn1 {
        border: none;
        background: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255), rgb(174, 74, 255));
        color: rgb(255, 255, 255);
        font-size: 12px;
        padding: 4px 15px;
        border-radius: 8px;
        margin-right: 15px;
      }

      .btn2 {
        border: none;
        background: linear-gradient(90deg,
            rgba(106, 47, 255, 0.2),
            rgba(140, 61, 255, 0.2),
            rgba(174, 74, 255, 0.2));

        color: rgb(255, 255, 255);
        font-size: 12px;
        padding: 4px 15px;
        border-radius: 8px;
        margin-right: 10px;
      }
    }
  }



}
</style>