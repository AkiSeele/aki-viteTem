/**防抖 */
const debounce = (fn: Function, delay: number) => {
  let time: any = null;
  let timer: any = null;
  let newTime = null;
  function task() {
    newTime = +new Date();
    if (newTime - time < delay) {
      timer = setTimeout(task, delay);
    } else {
      fn();
      timer = null;
    }
    time = newTime;
  }
  return function () {
    // 更新时间戳
    time = +new Date();
    if (!timer) {
      timer = setTimeout(task, delay);
    }
  };
};

/**
 * 数组对象去重 -卢阳浪
 * 参数  arr: 数组   attrName：需要去重的对象属性名
 * 保留重复的后一个，若要保留重复的第一个对象，请使用queChong方法
 */
function removePepeat(arr: any[], attrName: string) {
  const obj: any[] = [];
  arr.forEach((i: any, idx: any) => (obj[i[attrName]] = i));
  return Object.values(obj);
}

/**数组对象去重 */
function queChong(arr: any[], attrName: string) {
  const res = <any[]>[];
  arr.forEach((item) => {
    if (typeof item === "object" && item !== null) {
      const tmp = res.filter(
        (i) => JSON.stringify(i.name) === JSON.stringify(item.name)
      );
      if (tmp.length === 0) {
        res.push(item);
      }
    }
  });
  return res;
}

/**
 * 身份证返回出生年月日和年龄， 结合tada & Sdate
 * 参数 value：身份证    fn: 函数
 */
function isNumberBlurAge(value: string, fn: any) {
  try {
    const startDateStr = tada(value);
    const endDateStr = new Date();
    //获得各自的年、月、日
    var sY = startDateStr.getFullYear();
    var eY = endDateStr.getFullYear();
    const ageR = eY - sY;
    // console.log('日期', ageR)
    if (!isNaN(ageR)) {
      const rae = Sdate(startDateStr, "YYYY-mm-dd HH:MM:SS");
      fn(ageR, rae);
    }
  } catch {
    return;
  }
}

/**平级转树形结构 */
function arrayToTree(items: { id: number; pid: number }[]) {
  const result: any = []; // 存放结果集
  const itemMap: any = {}; //
  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];

    if (pid === 0) {
      // 最顶级
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      // 层级的children 添加上对于的itemMap[id]（）
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

/**根据身份证返回当前标准日期 */
function tada(value: string) {
  var sBirthday = (
    value.substring(6, 10) +
    "-" +
    Number(value.substring(10, 12)) +
    "-" +
    Number(value.substring(12, 14))
  ).replace(/-/g, "/");

  const d = new Date(sBirthday);
  return d;
}

/**根据标准日期，返回自定义格式日期 */
function Sdate(time: Date, fmt: any) {
  const date = time;
  let ret;
  const opt: any = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
}

export {
  debounce,
  removePepeat,
  tada,
  Sdate,
  isNumberBlurAge,
  arrayToTree,
  queChong,
};
