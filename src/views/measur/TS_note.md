---
title: TS笔记
tags:
  - 笔记
categories:
  - 笔记
---

## 常见类型

### 联合类型

> TypeScript 会要求你做的事情，必须对每个联合的成员都是有效的。
```ts
// 不能使用只存在 string 上的方法
// 不过有时候如数组和字符串都有 slice 方法，那么就可以直接使用
function printId(id: number | string) {
  console.log(id.toUpperCase()); 
  // 类型“string | number”上不存在属性“toUpperCase”。类型“number”上不存在属性“toUpperCase”。
}
```
解决方案：
  - 用代码收窄联合类型
  - 使用typeof或Array.isArray判断类型后在操作
```ts
// 例：
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}

```

### 接口 or 类型别名
> 接口更适合用来定义抽象数据类型
> 类型别名和接口非常相似，大部分时候，你可以任意选择使用
> 接口（Interfaces） vs. 类型别名（Type Aliases） 详情见[掘金文章](https://juejin.cn/post/6982911847888486407#heading-10)

- 二者都可扩展，最关键的差别在于类型别名本身无法添加新的属性。
```ts
// Interface 通过继承扩展类型
interface Animal {
  name: string
}
interface Bear extends Animal {
  honey: boolean
}
        
// Type
// 通过交集扩展类型
type Animal = {
  name: string
}
type Bear = Animal & { 
  honey: boolean 
}

// Interface
// 对一个已经存在的接口添加新的字段,可以重复定义，被视为一个接口（合并了所有声明的成员）
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}
// 而 Type创建后不能被改变
```

- 都能用来声明对象和方法的签名，但语法不同。

### 类型断言
> 两种写法 <> 与 as
```ts
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// or
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
```
> 双重断言
```ts
// 有的时候，这条规则会显得非常保守，阻止了你原本有效的类型转换就可以使用双重断言
// 断言为 any （或者是 unknown），然后再断言为期望的类型
const a = (expr as any) as T;
```

### 字面量类型
> 一般配合联合类型使用(也可和非字面量联合)，多用于需要传固定的值
```ts
interface Options {
  width: number;
}

function printText(alignment: "left" | "right" | "center" | Options ) {
}
```