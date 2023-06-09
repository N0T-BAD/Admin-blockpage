import { episodeDetailType, episodeStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/EpisodeInfo.module.css'
import Config from '@/configs/config.export';
import Swal from 'sweetalert2';

export default function EpisodeInfo() {

  const { baseUrl } = Config();
  const router = useRouter();
  const { episodeId } = router.query;
  const { webtoonId } = router.query;
  const { episodeNumber } = router.query;

  const [episode, setEpisode] = useState<episodeDetailType>(
    {
      data: {
        episodeId: 0,
        episodeTitle: '',
        episodeNumber: 0,
        author: '',
        uploadDate: '',
        authorWords: '',
        episodeThumbnail: '',
        images: [{
          imageUrl: '',
        }]
      }
    }
  );

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/episodes/detail?episodeId=${episodeId}&webtoonId=${webtoonId}&episodeNumber=${episodeNumber}`)
      .then((res) => {
        setEpisode(res.data)
        console.log(res.data)
      })
  }, [])

  const handleAccept = () => {
    axios.put(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=enroll&whether=accept&episodeId=${episodeId}`, {
      memberId: episode.data.author,
    })
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: '승인되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
        router.back();
      })
      .catch((err) => {
        console.log(err)
      }
      )
  }

  const handleRefuse = () => {
    axios.put(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=enroll&whether=refuse&episodeId=${episodeId}`, {
      memberId: episode.data.author,
    },
    )
      .then((res) => {
        console.log(res)
        Swal.fire({
          icon: 'success',
          title: '거부되었습니다.',
          showConfirmButton: false,
          timer: 1500
        })
        router.back();
      })
  }

  console.log(episode.data.author)

  return (
    <div className={style.adminBox}>
      {episode.data &&
        episode.data.episodeId === Number(episodeId) && (
          <div className={style.episodewrap} key={episode.data.episodeId}>
            <p className={style.episodeinfotitle}>회차 등록</p>
            <div className={style.InfoBox}>
              <p>에피소드 회차 : </p>
              <p className={style.infotxt}>{episode.data.episodeNumber} 화</p>
            </div>
            <div className={style.InfoBox}>
              <p>에피소드 명 : </p>
              <p className={style.infotxt}>{episode.data.episodeTitle}</p>
            </div>
            <div className={style.InfoBox}>
              <p>업로드 일 : </p>
              <p className={style.infotxt}>{episode.data.uploadDate}</p>
            </div>
            <div className={style.InfoBox}>
              <p>작가의 말 : </p>
              <p className={style.infotxt}>{episode.data.authorWords}</p>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>회차 썸네일 이미지</p>
              </div>
              <div className={style.ImgList}>
                <div className={style.Imgleft}></div>
                <div className={style.ImageBox}>
                  <Image src={episode.data.episodeThumbnail} alt={"thumbnailImage"} width={200} height={200} />
                </div>
              </div>
            </div>
            <div className={style.InfoImgBox} >
              <div className={style.labelBox}>
                <p>에피소드 이미지 </p>
              </div>
              <div className={style.ImgList}>
                <div className={style.Imgleft2}></div>
                <div className={style.episodeimg}>
                  {episode.data.images.map((episode) => (
                    <Image src={episode.imageUrl} alt={"edisodeImage"} width={200} height={200} />
                  ))}
                </div>
              </div>
            </div>
            <div className={style.submit}>
              <button onClick={handleAccept}>승인</button>
              <button onClick={handleRefuse}>거부</button>
            </div>
          </div>
        )}
    </div>
  )
}
