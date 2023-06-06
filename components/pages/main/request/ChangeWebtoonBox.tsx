import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { UserPathData } from '@/data/MainTopNavData';
import axios from 'axios';
import Config from '@/configs/config.export';
import { WebtoonModifyType, WebtoonStateType } from '@/types/webtoon/webtoonDataType';
import { webtoonlist } from '@/state/webtoonlist';
import { useRecoilState } from 'recoil';

export default function ChangeWebtoonBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [webtoonData, setWebtoonData] = useRecoilState<WebtoonModifyType>(webtoonlist);

  const handleWebtoonClick = (webtoonId: number) => {
    router.push(`/request/${requestId}/correction/${webtoonId}`);
  }

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=modify&pageNo=0`)
      .then((res) => {
        setWebtoonData(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className={style.adminBox}>
        <div className={style.webtoontext}>
          <p>웹툰 수정 요청</p>
        </div>
        {webtoonData.data && webtoonData.data.map((subCategory) => (
          <div className={style.webtoonInfoWrap} key={subCategory.webtoonId} onClick={() => handleWebtoonClick(subCategory.webtoonId)}>
            <div className={style.ImgWrap}>
              <Image src={subCategory.main} alt={'이것이 법이다'} width={120} height={100} />
            </div>
            <div className={style.contentWrap}>
              <p className={style.title}>{subCategory.webtoonTitle}</p>
              <p className={style.author}>{subCategory.genre}</p>
              <p className={style.author}>{subCategory.publicationDays}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
