import { WebtoonModifyType } from "@/types/webtoon/webtoonDataType";
import { atom } from "recoil";

const webtoonlist = atom<WebtoonModifyType>({
    key: "webtoonlist",
    default: {
        data: [{
            webtoonId: 0,
            webtoonTitle: '',
            webtoonDescription: '',
            genre: '',
            publicationDays: '',
            main: '',
            thumbnail: '',
        }]
    },
});

export { webtoonlist };