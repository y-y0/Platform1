<template>
  <div class="main">

    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">行业推荐</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">全部</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">教育</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">医疗服务</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">心理健康</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">通用</a>
              </li>
              <!-- <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">应用场景</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">全部</a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  知识科普
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">知识科普1</a></li>
                  <li><a class="dropdown-item" href="#">知识科普2</a></li>
                  <li><a class="dropdown-item" href="#">知识科普3</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  专题栏目
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">专题栏目</a></li>
                  <li><a class="dropdown-item" href="#">专题栏目</a></li>
                  <li><a class="dropdown-item" href="#">专题栏目</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  心理辅导
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">心理辅导</a></li>
                  <li><a class="dropdown-item" href="#">心理辅导</a></li>
                  <li><a class="dropdown-item" href="#">心理辅导</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  医疗诊断
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">医疗诊断</a></li>
                  <li><a class="dropdown-item" href="#">医疗诊断</a></li>
                  <li><a class="dropdown-item" href="#">医疗诊断</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  本地生活
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">本地生活</a></li>
                  <li><a class="dropdown-item" href="#">本地生活</a></li>
                  <li><a class="dropdown-item" href="#">本地生活</a></li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  录屏讲解
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">录屏讲解</a></li>
                  <li><a class="dropdown-item" href="#">录屏讲解</a></li>
                  <li><a class="dropdown-item" href="#">录屏讲解</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.main {
  background-color: rgb(255, 255, 255);
  margin-bottom: 4px;

  .container {


    .navbar {
      padding: 0px;

      .container-fluid {
        padding-top: 10px;
        padding-bottom: 10px;

        background-color: rgb(255, 255, 255);

        .navbar-brand {

          /* 一级 */
          color: rgb(71, 69, 84);
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          letter-spacing: 0%;
          text-align: left;
        }

        .nav-item {
          /* 二级 */
          color: rgb(143, 149, 157);
          font-family: Inter;
          font-size: 10px;
          font-weight: 400;
          line-height: 12px;
          letter-spacing: 0%;
          text-align: left;

          .active {

            /* 二级 */
            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 10px;
            font-weight: 400;
            line-height: 12px;
            letter-spacing: 0%;
            text-align: left;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 5px;
            background: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255) 53%, rgb(174, 74, 255) 100%);
          }

          .dropdown-menu {


            .dropdown-item {
              color: rgb(143, 149, 157);
              font-family: Inter;
              font-size: 10px;
              font-weight: 400;
              line-height: 12px;
              letter-spacing: 0%;
              text-align: left;

            }
          }
        }


      }
    }


  }
}
</style>