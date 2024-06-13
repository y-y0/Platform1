<template>
  <div class="main">
    <div class="container">
      <div class="title">
        应用场景
      </div>

      <div class="image">
        <img src="./images/img1.png" alt="">
      </div>

      <div class="content">
        <img src="./images/icon1.png" class="img-fluid " alt="...">
        <p class="text">平台流量天花板触顶，如何高效率、规模化生成知识科普视频是对抗内卷的关键。运营人员，都在寻找一种即可高效率又可规模化生成高质量视频的方式。家乐伴，AIGC助力运营全方位规模化提效。</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  background-color: rgb(255, 255, 255);

  .container {
    padding-top: 15px;


    .title {
      margin-bottom: 15px;
      /* 二级 */
      color: rgb(143, 149, 157);
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0%;
    }

    .image {
      margin-bottom: 15px;

      img {
        height: 187px;
        width: 100%;
      }
    }

    .content {
      display: flex;
      padding: 16px;
      height: 80px;
      border-radius: 10px;
      /* 新版/浅灰 */
      background: rgb(241, 241, 241);

      .img-fluid {
        margin-right: 20px;
        width: 20px;
        height: 20px;
      }

      .text {
        /* 二级特别 */
        color: rgb(103, 103, 103);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0%;
        text-align: left;
        width: 95%;
      }

    }
  }

}
</style>