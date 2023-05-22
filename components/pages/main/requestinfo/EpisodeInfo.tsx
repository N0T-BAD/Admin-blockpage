import { episodeStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/EpisodeInfo.module.css'

export default function EpisodeInfo() {

  const router = useRouter();

  const [episode, setEpisode] = useState<episodeStateType>(
    {
      id: 0,
      title: '',
      episodetitle: '',
      episodedescription: '',
      day: '',
      authortalk: '',
      thumbnailImage: '',
      edisodeImage: '',
    }
  );

  useEffect(() => {
    axios.get('api')
      .then(res => res.data)
      .then(data => setEpisode(data))
  }, [])

  return (
    <div className={style.adminBox}>
      {episode &&
        <div className={style.episodewrap} key={episode.id}>
          {router.pathname === "/episode" ?
            <p className={style.episodeinfotitle}>회차 등록</p>
            : router.pathname === "/chargeepisode" ?
              <p className={style.episodeinfotitle}>회차 수정</p>
              : ""
          }
          <div className={style.InfoBox}>
            <p>작품명 : </p>
            <p className={style.infotxt}>{episode.title}</p>
          </div>
          <div className={style.InfoBox}>
            <p>에피소드 회차 : </p>
            <p className={style.infotxt}>{episode.id} 화</p>
          </div>
          <div className={style.InfoBox}>
            <p>에피소드 명 : </p>
            <p className={style.infotxt}>{episode.episodetitle}</p>
          </div>
          <div className={style.InfoBox}>
            <p>에피소드 내용 : </p>
            <p className={style.infotxt}>{episode.episodedescription}</p>
          </div>
          <div className={style.InfoBox}>
            <p>업로드 일 : </p>
            <p className={style.infotxt}>{episode.day}</p>
          </div>
          <div className={style.InfoBox}>
            <p>작가의 말 : </p>
            <p className={style.infotxt}>{episode.authortalk}</p>
          </div>
          <div className={style.InfoImgBox}>
            <div className={style.labelBox}>
              <p>회차 썸네일 이미지</p>
            </div>
            <div className={style.ImageBox}>
              <Image src={episode.thumbnailImage} alt={"thumbnailImage"} width={200} height={200} />
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
            <button >승인</button>
            <button >거부</button>
          </div>
        </div>
      }
    </div>
  )
}
