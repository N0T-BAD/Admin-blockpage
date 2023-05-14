import { atom } from "recoil";

const adminLoginState = atom({
    key: "adminLoginState",
    default: {
        adminNickname: "",
        accessToken: "",
        isLogin: false
    },
});

export { adminLoginState };