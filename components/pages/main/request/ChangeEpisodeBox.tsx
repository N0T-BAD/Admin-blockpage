import React from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ChangeEpisodeBox() {

  const router = useRouter();
  const { requestId } = router.query;

  const handleWebtoonClick = () => {
    router.push("/correction");
  }

  const handleEpisodeClick = () => {
    router.push('/episode');
  }

  const handleChangeEpisodeClick = () => {
    router.push("/changeepisode");
  }

  return (
    <>
      {webtoonData && webtoonData.map((subCategory) => (
        <div className={style.adminBox} key={subCategory.id}>
          <div className={style.webtoontext}>
            <p>회차 수정 요청</p>
          </div>
          {subCategory.webtoonsubcategories && subCategory.webtoonsubcategories.map((info) => (
            <div className={style.webtoonInfoWrap}>
              <div className={style.ImgWrap}>
                <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={120} height={100} />
              </div>
              <div className={style.contentWrap}>
                <div className={style.option}>
                  <div className={style.views}>
                    <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                    <p className={style.viewstxt}>{info.views}</p>
                  </div>
                  <div className={style.likes}>
                    <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                    <p className={style.likestxt}>{info.likes}</p>
                  </div>
                </div>
                <p className={style.title}>{info.title}</p>
                <p className={style.author}>{info.author}</p>
              </div>
            </div>

          ))}
        </div>
      ))}
    </>
  )
}
