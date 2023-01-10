<template>
</template>

<script setup lang="ts">

// TypeScript 会要求你做的事情，必须对每个联合的成员都是有效的。
// 举个例子，如果你有一个联合类型 string | number , 你不能使用只存在 string 上的方法：
function printId(id: number | string) {
  // console.log(id.toUpperCase());
  // 类型“string | number”上不存在属性“toUpperCase”。类型“number”上不存在属性“toUpperCase”。
}

// 解决方案是用代码收窄联合类型
// 使用typeof或Array.isArray判断类型后在操作

function handleRequest(url: string, method: "GET" | "POST"): void {};

const req = { url: "https://example.com", method: "GET" };

// handleRequest(req.url, req.method); 类型“string”的参数不能赋给类型“"GET" | "POST"”的参数

interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;


function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius  ** 2;
  }
}




</script>

<style lang="scss" scoped>
</style>