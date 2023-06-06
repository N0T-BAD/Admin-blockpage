import { episodeStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/EpisodeInfo.module.css'
import Config from '@/configs/config.export';

export default function EpisodeDelete() {

  const { baseUrl } = Config();
  const router = useRouter();
  const { episodeId } = router.query;

  const [episode, setEpisode] = useState<episodeStateType>(
    {
      data: [{
        webtoonId: 0,
        episodeId: 0,
        episodeTitle: '',
        uploadDate: '',
        authorWords: '',
        thumbnail: '',
      }]
    }
  );

  // useEffect(() => {
  //   axios.get('api')
  //     .then(res => res.data)
  //     .then(data => setEpisode(data))
  // }, [])

  const handleAccept = () => {
    axios.post(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=remove&whether=accept&episodeId=${episodeId}`, {
      header: {
        memberId: session?.email || '',
      },
    })
      .then((res) => {
        console.log(res)
        router.back();
      })
  }

  const handleRefuse = () => {
    axios.post(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=remove&whether=refuse&episodeId=${episodeId}`, {
      header: {
        memberId: session?.email || '',
      },
    })
      .then((res) => {
        console.log(res)
        router.back();
      })
  }


  return (
    <div className={style.adminBox}>
      {episode.data.map((episode) => (
        episode.episodeId === Number(episodeId) && (
          <div className={style.episodewrap} key={episode.episodeId}>
            <p className={style.episodeinfotitle}>회차 등록</p>
            <div className={style.InfoBox}>
              <p>에피소드 회차 : </p>
              <p className={style.infotxt}>{episode.episodeId} 화</p>
            </div>
            <div className={style.InfoBox}>
              <p>에피소드 명 : </p>
              <p className={style.infotxt}>{episode.episodeTitle}</p>
            </div>
            <div className={style.InfoBox}>
              <p>업로드 일 : </p>
              <p className={style.infotxt}>{episode.uploadDate}</p>
            </div>
            <div className={style.InfoBox}>
              <p>작가의 말 : </p>
              <p className={style.infotxt}>{episode.authorWords}</p>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>회차 썸네일 이미지</p>
              </div>
              <div className={style.ImageBox}>
                <Image src={episode.thumbnail} alt={"thumbnailImage"} width={200} height={200} />
              </div>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>에피소드 이미지 </p>
              </div>
              <div className={style.episodeimg}>
                <Image src={episode.edisodeImage} alt={"edisodeImage"} width={200} height={200} />
              </div>
            </div>
            <div className={style.submit}>
              <button onClick={handleAccept}>승인</button>
              <button onClick={handleRefuse}>거부</button>
            </div>
          </div>
        )))}
    </div>
  )
}
