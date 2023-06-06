import React, { useEffect } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { episodeStateType } from '@/types/webtoon/webtoonDataType';
import { episodelist } from '@/state/episodelist';
import Config from '@/configs/config.export';

export default function ChangeEpisodeBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [episodeData, setEpisodeData] = useRecoilState<episodeStateType>(episodelist);

  const handleWebtoonClick = (episodeId: number) => {
    router.push(`/request/${requestId}/episodemodify/${episodeId}`);
  }

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=modify&pageNo=0`)
      .then((res) => {
        setEpisodeData(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className={style.adminBox}>
        <div className={style.webtoontext}>
          <p>회차 수정 요청</p>
        </div>
        {episodeData.data && episodeData.data.demandView.map((subCategory) => (
          <div className={style.webtoonInfoWrap} key={subCategory.episodeId} onClick={() => handleWebtoonClick(subCategory.episodeId)}>
            <div className={style.ImgWrap}>
              <Image src={subCategory.thumbnail} alt={subCategory.episodeTitle} width={120} height={100} />
            </div>
            <div className={style.contentWrap}>
              <p className={style.title}>{subCategory.episodeId}화 {subCategory.episodeTitle}</p>
              <p className={style.author}>{subCategory.uploadDate}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
