<template>
  <div>
    accent-color 新css属性，可改变原生input框颜色
    <input type="range" style="accent-color: #fb8b05" />
  </div>
  横向滚动
  <div class="g-scroll">
    <div class="g-pesudo"></div>
    <div class="g-content">
      Youth is not a time of life; it is a state of mind; it is not a matter of
      rosy cheeks, red lips and supple knees; it is a matter of the will, a
      quality of the imagination, a vigor of the emotions; it is the freshness
      of the deep springs of life. Youth means a temperamental predominance of
      courage over timidity, of the appetite for adventure over the love of
      ease. This often exists in a man of 60 more than a boy of 20. Nobody grows
      old merely by a number of years. We grow old by deserting our ideals.
      Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.
      Worry, fear, self-distrust bows the heart and turns the spirit back to
      dust. Whether 60 or 16, there is in every human being’s heart the lure of
      wonders, the unfailing appetite for what’s next and the joy of the game of
      living. In the center of your heart and my heart, there is a wireless
      station; so long as it receives messages of beauty, hope, courage and
      power from man and from the infinite, so long as you are young. When your
      aerials are down, and your spirit is covered with snows of cynicism and
      the ice of pessimism, then you’ve grown old, even at 20; but as long as
      your aerials are up, to catch waves of optimism, there’s hope you may die
      young at 80.
    </div>
  </div>

  <div style="width: 400px;">
    <n-auto-complete
      v-model:value="valueRef"
      :options="options"
      placeholder="邮箱"
      size="small"
    />
  </div>
</template>

<script lang="ts" setup>
import { isNumberBlurAge, arrayToTree, removePepeat, queChong } from "@/utils/utils";
let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
];

const arrOne: any[] = [
  { name: "aaa", value: 1 },
  { name: "aaa", value: 2 },
  { name: "bbb", value: 3 },
  { name: "bbb", value: 4 },
  { name: "ccc", value: 5 },
  { name: "ddd", value: 6 },
  { name: "eee", value: 7 },
  { name: "eee", value: 8 },
  { name: "zzz", value: 1 },
];

const valueRef = ref("");

const options = computed(() => {
  return ["@outlook.com", "@163.com", "@qq.com"].map((suffix) => {
    // 取@分隔前的值
    const prefix = valueRef.value.split("@")[0];
    return prefix + suffix
  });
});

isNumberBlurAge("422202200207097015", (age: string | number, birthday: string) => {
  console.log(birthday, age);
});

console.log(arrayToTree(arr));
// console.log(removePepeat(arrOne, "name"));

console.log(queChong(arrOne, "name"), "去重2")

// console.log(removePepeat(arrOne, "name"));



/* */
</script>

<style scoped lang="scss">
.g-scroll {
  position: relative;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  transform: rotate(-90deg);
  transform-origin: 100% 0;
  overflow: scroll;
  /* hide scrollbar */
}
::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
::-webkit-scrollbar-button {
  width: 1px;
  height: 1px;
}
.g-pesudo {
  width: 200px;
  height: 400px;
  background: linear-gradient(rgba(122, 122, 50, 0.3), rgba(20, 200, 150, 0.3));
}
.g-content {
  position: absolute;
  top: 0;
  left: 200px;
  width: 400px;
  height: 198px;
  transform-origin: 0 0;
  border: 1px solid #000;
  transform: rotate(90deg);
}

.CSSPaintingAPI {
  position: relative;
  width: 200px;
  height: 64px;
  background: #f49714;
  clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0% 0%);
}
</style>
