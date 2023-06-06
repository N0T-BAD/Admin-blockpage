import { episodeStateType } from "@/types/webtoon/webtoonDataType";
import { atom } from "recoil";

const episodelist = atom<episodeStateType>({
  key: "episodelist",
  default: {
    data: {
      demandView: [{
        webtoonId: 0,
        episodeId: 0,
        episodeTitle: '',
        uploadDate: '',
        authorWords: '',
        thumbnail: '',
      }],
      totalSize: 0,
    }
  },
});

export { episodelist };