import { episodeStateType } from "@/types/webtoon/webtoonDataType";
import { atom } from "recoil";

const episodelist = atom<episodeStateType>({
    key: "episodelist",
    default: {
        data: [{
            webtoonId: 0,
            episodeId: 0,
            episodeTitle: '',
            uploadDate: '',
            authorWords: '',
            thumbnail: '',
        }]
    },
});

export { episodelist };