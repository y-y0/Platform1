<template>

  <div class="main">

    <h3>我的收藏</h3>

    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              作品
            </li>

            <li class="nav-item">
              成片
            </li>

            <li class="nav-item">
              成片模板
            </li>

            <li class="nav-item">
              资源
            </li>
          </ul>

          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="请输入关键词" aria-label="Search">
          </form>
        </div>
      </div>
    </nav>


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

  .navbar {
    padding: 30px 0;
    height: 25px;
    background-color: rgb(255, 255, 255);

    .container-fluid {
      padding-left: 0px;
      padding-right: 0px;
      border-bottom: 0.1px solid #F1F1F1;

      .nav-item {
        background-color: #474554;
        padding: 3px 16px 3px 16px;
        border-radius: 6px 6px 0px 0px;
        background: rgb(241, 241, 241);
        font-size: 12px;
        color: #474554;
        margin-right: 5px;
      }

      .form-control {
        height: 25px;

        &::placeholder {
          font-size: 12px;
          color: #8F959D;
          font-weight: 300;
        }
      }


    }

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