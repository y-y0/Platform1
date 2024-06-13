<template>
  <div class="main">
    <div class="container">
      <div class="card mb-3">
        <div class="row g-0">

          <div class="col-md-6">
            <div class="card-body">
              <h5 class="card-title">知识科普规模化提效</h5>

              <ul>
                <li>视频规模化提效</li>
                <p>无论是知识科普，动作讲解，规模化生成高质量视频，才能高效打开流量池。家乐伴AIGC一键轻松生成高质量知识科普视频。</p>

                <li>提升电商详情页转化率</li>
                <p>图文的解析详情页，往往难以让用户更深入地了解。AIGC视频生成能力，一键高效生成高质量的视频化解析详情页，让详情页自己会说话。</p>

                <li>多账号高效协同</li>
                <p>中央厨房式的视频协作平台，让短视频生成更高效，规模化提效。</p>
                <button class="start">开始创作</button>
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <img src="./images/image.png" class="img-fluid" alt="...">
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
  padding-top: 30px;

  .col-md-6 {
    position: relative;

  }

  .card {
    border: none;
  }


  .card-body {
    .card-title {
      /* 上一级 */
      color: rgb(71, 69, 84);
      font-family: Inter;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 20px;
    }

    li {
      /* 二级 */
      color: rgb(71, 69, 84);
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 5px;
    }

    p {
      /* 二级特别Ⅰ */
      color: rgb(143, 149, 157);
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0%;
      text-align: left;
    }

    .start {
      width: 77px;
      height: 22px;
      color: rgb(255, 255, 255);
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0%;
      text-align: center;
      border: none;
      border-radius: 7px;
      /* 新版/渐变紫 */
      background: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255) 53%, rgb(174, 74, 255) 100%);
    }
  }

  .img-fluid {
    position: absolute;
    right: 0px;
    width: 485px;
    height: 285px;

  }
}
</style>