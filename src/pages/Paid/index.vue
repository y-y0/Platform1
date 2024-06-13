<template>
  <Navigation></Navigation>
  <div class="main">
    <div class="container">
      <div class="title">
        付费订购·儿童版定价
      </div>
      <div class="content">
        <div class="row row-cols-1 row-cols-md-3 g-4">

          <div class=" style1">
            <div class="header">
              <img src="./images/icon1.png" alt="">
              <h3>基础版</h3>
            </div>

            <div class="middle">
              <p>免费</p>
              <button>已经申请体验</button>
            </div>
            <div class="floor">
              <p>服务内容</p>
              <ul>
                <li>基础语言学习互动</li>
                <li>简单情感陪伴</li>
                <li>基础换肤功能</li>
              </ul>
            </div>
          </div>

          <div class=" style2" style="border-radius: 8px;">
            <div class="header">
              <img src="./images/icon2.png" alt="">
              <h3>增值版</h3>
            </div>

            <div class="middle">
              <p>149/月&nbsp;&nbsp;&nbsp;1788/年</p>
              <button>立即订购</button>
            </div>

            <div class="floor">
              <p>服务内容（包含基础版内容）</p>
              <ul>
                <li>个性化学习</li>
                <li>家长监控接口</li>
                <li>学习进度跟踪</li>
                <li>情感陪伴与心理辅导</li>
                <li>资金管理与安全监控</li>
                <li>高级换肤功能</li>
              </ul>
            </div>
          </div>

          <div class=" style3" style="border-radius: 8px;">
            <div class="header">
              <img src="./images/icon3.png" alt="">
              <h3>定制版</h3>
            </div>
            <div class="middle">
              <p>499/月&nbsp;&nbsp;&nbsp;5988/年</p>
              <button>立即订购</button>
            </div>
            <div class="floor">
              <p>服务内容（包含增值版内容）</p>
              <ul>
                <li>定制数字人形象</li>
                <li>高级情感陪伴与心理辅导</li>
                <li>个性化教育内容与学习辅导</li>
                <li>定制换肤功能</li>
              </ul>
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
$style1_color: rgb(143, 149, 157);
$style2_color: linear-gradient(90.00deg, rgb(2, 60, 253), rgb(3, 114, 254) 53%, rgb(3, 167, 255) 100%);
$style3_color: linear-gradient(90.00deg, rgb(106, 47, 255), rgb(140, 61, 255) 53%, rgb(174, 74, 255) 100%);

.main {

  background-color: rgb(255, 255, 255);

  .container {
    padding-top: 45px;
    height: 700px;

    .title {
      /* 新版/ExtraBold 40 */
      color: rgb(71, 69, 84);
      font-family: Inter;
      font-size: 40px;
      font-weight: 900;
      line-height: 52px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 70px;
    }

    .content {

      .row {
        justify-content: space-around;
      }



      .style1 {
        width: 255px;
        height: 450px;
        background-color: rgb(255, 255, 255);
        padding: 0px;

        border: 3px solid;
        border-image: $style1_color;
        border-image-slice: 1;

        .header {
          width: 250px;
          height: 127px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;


          background: $style1_color;

          img {
            display: flex;
            width: 50px;
            height: 50px;
          }

          h3 {
            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 22px;
            font-weight: 450;
            line-height: 26.4px;
            text-align: left;
          }

          p {
            font-size: 14px;
          }
        }

        .middle {

          display: flex;
          flex-direction: column;
          align-items: center;

          width: 217px;
          height: 84px;
          margin: 25px auto;
          border-bottom: 1px solid;
          border-image: $style1_color;
          border-image-slice: 1;


          p {
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0%;
          }

          button {
            padding: 1px 40px;
            border-radius: 10px;
            color: $style1_color;

            box-sizing: border-box;
            /* 新版/绿色10% */
            border: 2px solid rgba(95, 58, 252, 0.1);

            border-radius: 5px;

            /* 新版/绿色10% */
            background: $style1_color;

            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 15px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0%;
            text-align: left;
          }
        }

        .floor {

          p {
            margin-left: 30px;
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 0%;
            text-align: left;
          }

          ul {
            list-style-type: none;
            /* 隐藏默认的列表标记 */
            width: 98%;

            li {
              position: relative;
              padding-left: 10px;
              font-size: 14px;
              line-height: 18px;
              margin-bottom: 5px;

              color: rgb(71, 69, 84);
              font-family: Inter;
              font-size: 12px;
              font-weight: 400;
              line-height: 15px;
              letter-spacing: 0%;
              text-align: left;

            }

            li::before {
              content: "";
              width: 7px;
              height: 7px;
              border: 1px solid;
              border-image: $style1_color;
              border-image-slice: 1;
              position: absolute;
              left: -5px;
              top: 3px;
            }
          }
        }
      }

      .style2 {
        width: 255px;
        height: 450px;
        background-color: rgb(255, 255, 255);
        padding: 0px;

        border: 3px solid;
        border-image: $style2_color;
        border-image-slice: 1;

        .header {
          width: 250px;
          height: 127px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;


          background: $style2_color;

          img {
            display: flex;
            width: 50px;
            height: 50px;
          }

          h3 {
            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 22px;
            font-weight: 450;
            line-height: 26.4px;
            text-align: left;
          }

          p {
            font-size: 14px;
          }
        }

        .middle {

          display: flex;
          flex-direction: column;
          align-items: center;

          width: 217px;
          height: 84px;
          margin: 25px auto;
          border-bottom: 1px solid;
          border-image: $style2_color;
          border-image-slice: 1;


          p {
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0%;
          }

          button {
            padding: 1px 40px;
            border-radius: 10px;
            color: $style2_color;

            box-sizing: border-box;
            /* 新版/绿色10% */
            border: 2px solid rgba(95, 58, 252, 0.1);

            border-radius: 5px;

            /* 新版/绿色10% */
            background: $style2_color;

            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 15px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0%;
            text-align: left;
          }
        }

        .floor {

          p {
            margin-left: 30px;
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 0%;
            text-align: left;
          }

          ul {
            list-style-type: none;
            /* 隐藏默认的列表标记 */
            width: 98%;

            li {
              position: relative;
              /* 相对定位，为了方便设置 ::before 伪元素的样式 */
              padding-left: 10px;
              /* 留出空间给 ::before 伪元素 */
              font-size: 14px;
              line-height: 18px;
              margin-bottom: 5px;

              color: rgb(71, 69, 84);
              font-family: Inter;
              font-size: 12px;
              font-weight: 400;
              line-height: 15px;
              letter-spacing: 0%;
              text-align: left;

            }

            li::before {
              content: "";
              /* Unicode 小黑方块 */
              width: 7px;
              height: 7px;
              border: 1px solid;
              border-image: $style2_color;
              border-image-slice: 1;
              /* 修改方块的颜色 */
              position: absolute;
              left: -5px;
              top: 3px;
            }
          }
        }

      }


      .style3 {
        width: 255px;
        height: 450px;
        background-color: rgb(255, 255, 255);
        padding: 0px;
        border: 3px solid;
        border-image: $style3_color;
        border-image-slice: 1;

        .header {
          width: 250px;
          height: 127px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;


          background: $style3_color;

          img {
            display: flex;
            width: 50px;
            height: 50px;
          }

          h3 {
            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 22px;
            font-weight: 450;
            line-height: 26.4px;
            text-align: left;
          }

          p {
            font-size: 14px;
          }
        }

        .middle {

          display: flex;
          flex-direction: column;
          align-items: center;

          width: 217px;
          height: 84px;
          margin: 25px auto;
          border-bottom: 1px solid;
          border-image: $style3_color;
          border-image-slice: 1;


          p {
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 18px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0%;
          }

          button {
            padding: 1px 40px;
            border-radius: 10px;
            color: $style3_color;

            box-sizing: border-box;
            /* 新版/绿色10% */
            border: 2px solid rgba(95, 58, 252, 0.1);

            border-radius: 5px;

            /* 新版/绿色10% */
            background: $style3_color;

            color: rgb(255, 255, 255);
            font-family: Inter;
            font-size: 15px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0%;
            text-align: left;
          }
        }

        .floor {

          p {
            margin-left: 30px;
            color: rgb(71, 69, 84);
            font-family: Inter;
            font-size: 14px;
            font-weight: 700;
            line-height: 26px;
            letter-spacing: 0%;
            text-align: left;
          }

          ul {
            list-style-type: none;
            /* 隐藏默认的列表标记 */
            width: 98%;

            li {
              position: relative;
              /* 相对定位，为了方便设置 ::before 伪元素的样式 */
              padding-left: 10px;
              /* 留出空间给 ::before 伪元素 */
              font-size: 14px;
              line-height: 18px;
              margin-bottom: 5px;

              color: rgb(71, 69, 84);
              font-family: Inter;
              font-size: 12px;
              font-weight: 400;
              line-height: 15px;
              letter-spacing: 0%;
              text-align: left;

            }

            li::before {
              content: "";
              /* Unicode 小黑方块 */
              width: 7px;
              height: 7px;
              border: 1px solid;
              border-image: $style3_color;
              border-image-slice: 1;
              /* 修改方块的颜色 */
              position: absolute;
              left: -5px;
              top: 3px;
            }
          }
        }
      }
    }
  }

}
</style>