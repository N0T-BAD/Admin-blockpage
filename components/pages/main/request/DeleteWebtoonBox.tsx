import React, { useEffect } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Config from '@/configs/config.export';
import { useRecoilState } from 'recoil';
import { WebtoonModifyType } from '@/types/webtoon/webtoonDataType';
import { webtoonlist } from '@/state/webtoonlist';

export default function DeleteWebtoonBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [webtoonData, setWebtoonData] = useRecoilState<WebtoonModifyType>(webtoonlist);

  const handleWebtoonClick = (webtoonId: number) => {
    router.push(`/request/${requestId}/delete/${webtoonId}`);
  }

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/demands?target=webtoon&type=remove&pageNo=0`)
      .then((res) => {
        setWebtoonData(res.data)
        console.log(res.data)
      })
  }, [])


  return (
    <>
      <div className={style.adminBox}>
        <div className={style.webtoontext}>
          <p>웹툰 삭제 요청</p>
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
