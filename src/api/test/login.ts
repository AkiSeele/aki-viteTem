import AxiosToken from "../index";

const { request } = AxiosToken;
let remoteUrl = "";

interface LoginAki {
  /**手机 */
  phone: string;
  /**密码 */
  password: string;
}

export const userAkiStore = defineStore("userAki", () => {
  //网易云api登陆接口
  async function userLogin(params: LoginAki) {
    return await request({
      url: remoteUrl + "/login/cellphone",
      method: "get",
      params: params,
    });
  }
  
  return { userLogin };
});