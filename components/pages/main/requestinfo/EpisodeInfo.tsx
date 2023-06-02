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
      ask: true,
    }
  );

  useEffect(() => {
    axios.get('api')
      .then(res => res.data)
      .then(data => setEpisode(data))
  }, [])

  const handleApproval = () => {
    axios.post('api', {
      id: episode.id,
      title: episode.title,
      episodetitle: episode.episodetitle,
      episodedescription: episode.episodedescription,
      day: episode.day,
      authortalk: episode.authortalk,
      thumbnailImage: episode.thumbnailImage,
      edisodeImage: episode.edisodeImage,
      ask: true,
    })
      .then((res) => {
        console.log(res)
        router.push("/request")
      })
  }

  const handleRefusal = () => {
    axios.post('api', {
      id: episode.id,
      title: episode.title,
      episodetitle: episode.episodetitle,
      episodedescription: episode.episodedescription,
      day: episode.day,
      authortalk: episode.authortalk,
      thumbnailImage: episode.thumbnailImage,
      edisodeImage: episode.edisodeImage,
      ask: false,
    })
      .then((res) => {
        console.log(res)
        router.push("/request")
      })
  }

  return (
    <div className={style.adminBox}>
      {episode &&
        <div className={style.episodewrap} key={episode.id}>
          {router.pathname === "/episode" ?
            <p className={style.episodeinfotitle}>회차 등록</p>
            : router.pathname === "/changeepisode" ?
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
            <button onClick={handleApproval}>승인</button>
            <button onClick={handleRefusal}>거부</button>
          </div>
        </div>
      }
    </div>
  )
}
