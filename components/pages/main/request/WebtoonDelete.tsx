import { WebtoonDetailType, WebtoonStateType } from '@/types/webtoon/webtoonDataType';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/requestinfo/Webtooninfo.module.css'
import Image from 'next/image';
import { useRouter } from 'next/router';
import Config from '@/configs/config.export';
import Swal from 'sweetalert2';

export default function WebtoonDelete() {

  const router = useRouter();
  const { baseUrl } = Config();
  const { webtoonId } = router.query;

  const [webtoonDelete, setWebtoonDelete] = useState<WebtoonDetailType>(
    {
      data: {
        webtoonId: 0,
        webtoonTitle: '',
        webtoonDescription: '',
        genre: 0,
        publicationDays: 0,
        creator: '',
        creatorId: '',
        illustrator: '',
        webtoonMainImage: '',
        webtoonThumbnail: '',
      },
    }
  );

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/webtoons/detail?webtoonId=${webtoonId}`)
      .then((res) => {
        setWebtoonDelete({
          data: res.data.data,
        })
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const handleAccept = () => {
    axios.put(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=remove&whether=accept&webtoonId=${webtoonId}`, {
      memberId: webtoonDelete.data.creatorId,
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
  }

  const handleRefuse = () => {
    axios.put(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=remove&whether=refuse&webtoonId=${webtoonId}`, {
      memberId: webtoonDelete.data.creatorId,
    })
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

  const genreOptions = [
    { label: '판타지 드라마', value: 0 },
    { label: '로맨스', value: 1 },
    { label: '판타지', value: 2 },
    { label: '로맨스 판타지', value: 3 },
    { label: '액션', value: 4 },
    { label: '드라마', value: 5 },
    { label: '공포', value: 6 },
    { label: '코믹', value: 7 },
  ];

  const dayOptions = [
    { label: '월', value: 0 },
    { label: '화', value: 1 },
    { label: '수', value: 2 },
    { label: '목', value: 3 },
    { label: '금', value: 4 },
    { label: '토', value: 5 },
    { label: '일', value: 6 },
  ];

  return (
    <div className={style.adminBox}>
      {webtoonDelete.data &&
        webtoonDelete.data.webtoonId === Number(webtoonId) && (
          <div className={style.WebtoonInfoWrap} key={webtoonDelete.data.webtoonId}>
            <p className={style.webtooninfotitle}>웹툰 삭제</p>
            <div className={style.InfoBox}>
              <p>작품명 : </p>
              <p className={style.infotxt}>{webtoonDelete.data.webtoonTitle}</p>
            </div>
            <div className={style.InfoBox}>
              <p>줄거리 : </p>
              <p className={style.infotxt}>{webtoonDelete.data.webtoonDescription}</p>
            </div>
            <div className={style.InfoBox}>
              <p>장르 : </p>
              {genreOptions.map((genreOption) => (
                webtoonDelete.data.genre === genreOption.value &&
                <p className={style.infotxt}>{genreOption.label}</p>
              ))}
            </div>
            <div className={style.InfoBox}>
              <p>요일 : </p>
              {dayOptions.map((dayOption) => (
                webtoonDelete.data.publicationDays === dayOption.value &&
                <p className={style.infotxt}>{dayOption.label}</p>
              ))}
            </div>
            <div className={style.InfoBox}>
              <p>작가 : </p>
              <p className={style.infotxt}>{webtoonDelete.data.creator}</p>
            </div>
            <div className={style.InfoillustratorBox}>
              <p>일러스트레이터 : </p>
              <p className={style.infotxt}>{webtoonDelete.data.illustrator}</p>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>메인 이미지</p>
              </div>
              <div className={style.ImgList}>
                <div className={style.Imgleft}></div>
                <div className={style.ImageBox}>
                  <Image src={webtoonDelete.data.webtoonMainImage} alt="WebtoonMainImagePreview" width={200} height={200} />
                </div>
              </div>
            </div>
            <div className={style.InfoImgBox}>
              <div className={style.labelBox}>
                <p>썸네일 이미지</p>
              </div>
              <div className={style.ImgList}>
                <div className={style.Imgleft}></div>
                <div className={style.ImageBox}>
                  <Image src={webtoonDelete.data.webtoonThumbnail} alt="WebtoonThumbnailImagePreview" width={200} height={200} />
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
