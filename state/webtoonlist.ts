import { WebtoonModifyType } from "@/types/webtoon/webtoonDataType";
import { atom } from "recoil";

const webtoonlist = atom<WebtoonModifyType>({
  key: "webtoonlist",
  default: {
    data: {
      demandView: [{
        webtoonId: 0,
        webtoonTitle: '',
        webtoonDescription: '',
        genre: '',
        publicationDays: '',
        main: '',
        thumbnail: '',
      }],
      totalSize: 0,
    }
  },
});

export { webtoonlist };