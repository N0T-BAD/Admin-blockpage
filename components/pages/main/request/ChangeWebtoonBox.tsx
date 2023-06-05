import React from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { UserPathData } from '@/data/MainTopNavData';

export default function ChangeWebtoonBox() {

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
            <p>웹툰 수정 요청</p>
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

      {/* {webtoonData && webtoonData.map((subCategory) => (
        <div className={style.adminBox} key={subCategory.id}>
          <div className={style.webtoontext}>
            <p>{subCategory.name}</p>
          </div>
          {subCategory.webtoonsubcategories && subCategory.webtoonsubcategories.map((info) => (
            <div className={style.webtoonBox}
              onClick={() => {
                if (subCategory.id === 1) {
                  handleWebtoonClick();
                } else {
                  return;
                }
              }}
              key={info.subCategoryId}>
              <div className={style.webtoonInfoWrap}>
                <div className={style.ImgWrap}>
                  <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
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
                {subCategory.id === 2 ?
                  <div className={style.webtoonButton}>
                    <button>삭제</button>
                  </div>
                  : ""
                }
              </div>
              {'reason' in info ?
                <div className={style.reasonWrap}>
                  <p>삭제 이유 : </p>
                  <p>{info.reason}</p>
                </div>
                : ""
              }
            </div>
          ))}
        </div>
      ))} */}
    </>
  )
}
