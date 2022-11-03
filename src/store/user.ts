import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: (): StateTs => {
    return {
      name: "Hello Pinia",
    };
  },
  actions: {
    updateName(name: string | number) {
      this.name = name;
    },
  },
});

interface StateTs {
  name: string | number;
}
