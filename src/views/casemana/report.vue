<!--案件上报-->
<template>
  <div>
    <div class="caseReportList btnQiu" style="height: calc(100vh - 90px);">
      <div class="boxO boxActive1" @click="onCommand(0)">
        <div class="boxT">
          <div class="boxT-title">
            信访个案登记
            <div class="boxT-back"></div>
          </div>
          <div class="boxT-nav">
            <div style="margin-bottom: 5px;font-weight: bold;">用于登记</div>
            <div>信访个案(来电、来访、来信)</div>
          </div>
          <div class="boxT-bot">
            <div class="boxT-font">
              GO
            </div>
            <svg t="1666863844175" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2636"
              width="100" height="100">
              <path
                d="M332.8 277.333333h362.666667c17.066667 0 34.133333 12.8 34.133333 34.133334-4.266667 17.066667-17.066667 29.866667-38.4 29.866666H332.8c-21.333333 0-34.133333-12.8-34.133333-34.133333 0-17.066667 12.8-29.866667 34.133333-29.866667zM332.8 448h234.666667c17.066667 0 34.133333 12.8 34.133333 34.133333 0 17.066667-12.8 34.133333-34.133333 34.133334H332.8c-21.333333-4.266667-34.133333-17.066667-34.133333-38.4 0-17.066667 12.8-29.866667 34.133333-29.866667z"
                fill="#7fbfff" p-id="2637"></path>
              <path
                d="M584.533333 972.8H469.333333c-17.066667 0-34.133333-12.8-34.133333-34.133333v-115.2c0-8.533333 4.266667-17.066667 8.533333-21.333334l281.6-281.6c29.866667-29.866667 76.8-29.866667 106.666667 0l55.466667 55.466667c12.8 12.8 21.333333 34.133333 21.333333 51.2 0 21.333333-8.533333 38.4-21.333333 51.2l-281.6 281.6c-4.266667 8.533333-12.8 12.8-21.333334 12.8z m-81.066666-64h72.533333l268.8-268.8c4.266667-4.266667 4.266667-4.266667 4.266667-8.533333 0 0 0-4.266667-4.266667-8.533334l-55.466667-55.466666c-4.266667-4.266667-12.8-4.266667-17.066666 0l-268.8 268.8v72.533333z"
                fill="#7fbfff" p-id="2638"></path>
              <path
                d="M362.666667 972.8H170.666667c-42.666667 0-76.8-34.133333-76.8-76.8V128C93.866667 85.333333 128 55.466667 170.666667 55.466667h682.666666c42.666667 0 76.8 34.133333 76.8 76.8v341.333333c0 17.066667-12.8 34.133333-34.133333 34.133333s-34.133333-12.8-34.133333-34.133333V128c0-4.266667-4.266667-8.533333-8.533334-8.533333H170.666667c-4.266667 0-8.533333 4.266667-8.533334 8.533333v768c0 4.266667 4.266667 8.533333 8.533334 8.533333h192c17.066667 0 34.133333 12.8 34.133333 34.133334s-17.066667 34.133333-34.133333 34.133333z"
                fill="#7fbfff" p-id="2639"></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="boxO boxActive2" @click="onCommand(1)" style="background-image: linear-gradient(320deg, #defff4, #ffffff 45%);">
        <div class="boxT">
          <div class="boxT-title">
            发现报告个案登记
            <div class="boxT-back" style="background-image: linear-gradient(90deg, #6CCC9A 10%, #ffffff 100%);"></div>
          </div>
          <div class="boxT-nav">
            <div style="margin-bottom: 5px;font-weight: bold;">用于登记</div>
            <div>强制报告、市民举报和网络舆情案件</div>
          </div>
          <div class="boxT-bot">
            <div class="boxT-font" style="background: #6CCC9A;">
              GO
            </div>
            <svg t="1666864025989" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2131"
              width="100" height="100">
              <path
                d="M592.896 851.968H457.728c-217.088 0-394.24-177.152-394.24-394.24S239.616 63.488 457.728 63.488s394.24 177.152 394.24 394.24v135.168h-81.92V457.728c0-172.032-140.288-312.32-312.32-312.32S145.408 285.696 145.408 457.728s140.288 312.32 312.32 312.32h135.168v81.92z"
                fill="#8fe5b9" p-id="2132"></path>
              <path d="M571.71968 630.23104l57.92768-57.92768 330.9056 330.89536-57.92768 57.92768z" fill="#8fe5b9" p-id="2133">
              </path>
              <path
                d="M699.392 457.728h-61.44c0-136.192-126.976-187.392-206.848-187.392v-61.44c111.616 1.024 268.288 77.824 268.288 248.832zM382.976 676.864c-45.056-5.12-98.304-45.056-130.048-97.28-27.648-46.08-33.792-93.184-18.432-133.12l57.344 22.528c-11.264 29.696 3.072 61.44 13.312 78.848 23.552 38.912 61.44 65.536 83.968 68.608l-6.144 60.416z"
                fill="#b5f1d2" p-id="2134"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


function onCommand(data :number) {

}
</script>


<style lang="scss" scoped>
.caseReportList {
  padding: 30px;
  background: #fff;
}
.btnQiu {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  font-family: '黑体';

  .boxO {
    border-radius: 25px;
    width: 300px;
    height: 300px;
    box-shadow:
        26px 15px 144px -12px rgba(0, 0, 0, 0.07);
    background-image: linear-gradient(320deg, #d9ecff, #ffffff 45%);
    .boxT {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .boxT-title {
        height: 10%;
        font-weight: bold;
        font-size: 24px;
        position: relative;
        z-index: 99;
        .boxT-back {
          width: 60%;
          opacity: 0.6;
          height: 20px;
          background-image: linear-gradient(90deg, #7ebdff 10%, #ffffff 100%);
          position: absolute;
          bottom: -15px;
          left: 0;
          z-index: -1;
          border-radius: 20px;
        }
      }
      .boxT-nav {
        height: 20%;
        color: rgb(104, 104, 104);
        font-size: 16px;
      }
      .boxT-bot {
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .boxT-font {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 30px;
          line-height: 30px;
          border-radius: 20px;
          background: #399cff;
          color: #fff;
          font-size: 24px;
          letter-spacing: 3px
        }
      }
    }

  }
}

.boxActive1:active {
  color: #4FA9FD;
}
.boxActive2:active {
  color: #4ae093;
}


.boxO {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5em 1em;
  outline: none;
  border: none;
}

.boxO:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {

  0%,
  100% {
    transform: scale(1, 1);
  }

  25% {
    transform: scale(0.9, 1.1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
