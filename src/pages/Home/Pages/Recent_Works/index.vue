<template>

  <div class="main">

    <h3>最近作品</h3>

    <div class="operate">
      <p>共0个</p>
      <button>批量操作</button>
    </div>
    <div class="container">
      <img src="./images/image.png" alt="">
      <p>你最近编辑过的作品会显示在此处</p>
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

  .operate {
    display: flex;
    justify-content: space-between;
    color: rgb(143, 149, 157);
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0%;
    text-align: left;

    button {
      padding: 6px 9px 6px 9px;
      border: none;
      border-radius: 5px;

      /* 新版/浅灰 */
      background: rgb(241, 241, 241);
      /* 二级 */
      color: rgb(143, 149, 157);
      font-family: Inter;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      letter-spacing: 0%;
      text-align: left;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    height: 80%;

    align-items: center;
    justify-content: center;


    img {
      width: 120px;
      height: 120px;

    }

    p {
      color: #8F959D;
      font-size: 12px;
    }
  }


}
</style>