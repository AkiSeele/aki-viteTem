import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  // 开启数据持久化
  persist: true,
  
  state: (): StateTs => {
    return {
      name: "",
      imgUrl: "",
    };
  },
  actions: {
    updateName(name: string | number,imgUrl: string) {
      this.name = name;
      this.imgUrl = imgUrl;
    },
  },
});

interface StateTs {
  name: string | number;
  imgUrl: string
}
