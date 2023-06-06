import { WebtoonStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/Webtooninfo.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Config from '@/configs/config.export';

export default function WebtoonDelete() {

  const router = useRouter();
  const { baseUrl } = Config();
  const { requestId } = router.query;
  const { webtoonId } = router.query;

  const [webtoonDelete, setWebtoonDelete] = useState<WebtoonStateType>(
    {
      data: [{
        webtoonId: 0,
        webtoonTitle: '',
        webtoonDescription: '',
        genre: '',
        publicationDays: '',
        creator: '',
        illustrator: '',
        webtoonMainImage: '',
        webtoonThumbnail: '',
      }],
    }
  );

  useEffect(() => {
    axios.get("https://blockpage.site/webtoon-service/v1/webtoons/creator",
      {
        headers: {
          memberId: session?.email || '',
          // role: role,
        },
      })
      .then((res) => {
        setWebtoonDelete({
          data: res.data.data,
        })
        console.log(res.data.data)
        // console.log(webtoonData)
        // const selectedWebtoon = res.data.data.find((webtoon: any) => webtoon.webtoonId === Number(webtoonId));
        // if (selectedWebtoon) {
        //   setAuthorName({
        //     data: selectedWebtoon.creator,
        //   });
        // }
        // console.log(authorName)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleAccept = () => {
    axios.post(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=remove&whether=accept&webtoonId=${webtoonId}`, {
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
    axios.post(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=remove&whether=refuse&webtoonId=${webtoonId}`, {
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
      {webtoonDelete.data.map((webtoon) => (
        webtoon.webtoonId === Number(webtoonId) && (
          <div className={style.WebtoonInfoWrap} key={webtoon.webtoonId}>
            <p className={style.webtooninfotitle}>웹툰 삭제</p>
            <div className={style.InfoBox}>
              <p>작품명 : </p>
              <p className={style.infotxt}>{webtoon.webtoonTitle}</p>
            </div>
            <div className={style.InfoBox}>
              <p>줄거리 : </p>
              <p className={style.infotxt}>{webtoon.webtoonDescription}</p>
            </div>
            <div className={style.InfoBox}>
              <p>장르 : </p>
              <p className={style.infotxt}>{webtoon.genre}</p>
            </div>
            <div className={style.InfoBox}>
              <p>요일 : </p>
              <p className={style.infotxt}>{webtoon.publicationDays}</p>
            </div>
            <div className={style.InfoBox}>
              <p>작가 : </p>
              <p className={style.infotxt}>{webtoon.creator}</p>
            </div>
            <div className={style.InfoillustratorBox}>
              <p>일러스트레이터 : </p>
              <p className={style.infotxt}>{webtoon.illustrator}</p>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>메인 이미지</p>
              </div>
              <div className={style.ImageBox}>
                <Image src={webtoon.webtoonMainImage} alt="WebtoonMainImagePreview" width={200} height={200} />
              </div>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>썸네일 이미지</p>
              </div>
              <div className={style.ImageBox}>
                <Image src={webtoon.webtoonThumbnail} alt="WebtoonThumbnailImagePreview" width={200} height={200} />
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
