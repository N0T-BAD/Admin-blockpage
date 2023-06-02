import { webtoonData } from '@/data/webtoonData'
import { episodesubcategories, webtoonsubcategories } from '@/types/webtoon/webtoonDataType'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'

export default function RequestPage() {

  const router = useRouter();

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

          {subCategory.episodesubcategories && subCategory.episodesubcategories.map((info) => (
            <div className={style.webtoonBox} key={subCategory.id}>
              <div className={style.webtoonInfoWrap}
                onClick={() => {
                  if (subCategory.id === 3) {
                    handleEpisodeClick();
                  } else if (subCategory.id === 4) {
                    handleChangeEpisodeClick();
                  } else {
                    return;
                  }
                }}>
                <div className={style.ImgWrap}>
                  <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                </div>
                <div className={style.contentWrap}>
                  <div className={style.option}>
                    <div className={style.views}>
                      <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                      <p className={style.viewstxt}>{info.rating}</p>
                    </div>
                    <div className={style.likes}>
                      <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                      <p className={style.likestxt}>{info.day}</p>
                    </div>
                  </div>
                  <p className={style.title}>{info.title}</p>
                </div>
                {subCategory.id === 5 ?
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
      ))}
    </>

    // <div className={style.adminBox}>
    //   <div className={style.HistoryCategory}>
    //     <nav>
    //       <ul>
    //         {webtoonData.map((category) => (
    //           <li
    //             key={category.id}
    //             className={category.name === active ? `${style.active}` : ""}
    //             onClick={() => handleCategoryClick(category.name)}
    //           >
    //             {category.name}
    //           </li>
    //         ))}
    //       </ul>
    //     </nav>
    //   </div>

    //   {webtoonData.map((category) => (
    //     <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
    //       {
    //         category.name === '웹툰 수정' ?
    //           <>
    //             {category.webtoonsubcategories && category.webtoonsubcategories.map((subCategory) => (
    //               <div className={style.webtoonBox} onClick={handleWebtoonClick} key={subCategory.subCategoryId}>
    //                 <div className={style.webtoonInfoWrap}>
    //                   <div className={style.ImgWrap}>
    //                     <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
    //                   </div>
    //                   <div className={style.contentWrap}>
    //                     <div className={style.option}>
    //                       <div className={style.views}>
    //                         <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
    //                         <p className={style.viewstxt}>{subCategory.views}</p>
    //                       </div>
    //                       <div className={style.likes}>
    //                         <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
    //                         <p className={style.likestxt}>{subCategory.likes}</p>
    //                       </div>
    //                     </div>
    //                     <p className={style.title}>{subCategory.title}</p>
    //                     <p className={style.author}>{subCategory.author}</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             ))}
    //           </>
    //           :
    //           category.name === '웹툰 삭제' ?
    //             <>
    //               {category.webtoonsubcategories && category.webtoonsubcategories.map((subCategory: webtoonsubcategories) => (
    //                 <div className={style.webtoonBox} key={subCategory.subCategoryId}>
    //                   <div className={style.webtoonInfoWrap}>
    //                     <div className={style.ImgWrap}>
    //                       <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
    //                     </div>
    //                     <div className={style.contentWrap}>
    //                       <div className={style.option}>
    //                         <div className={style.views}>
    //                           <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
    //                           <p className={style.viewstxt}>{subCategory.views}</p>
    //                         </div>
    //                         <div className={style.likes}>
    //                           <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
    //                           <p className={style.likestxt}>{subCategory.likes}</p>
    //                         </div>
    //                       </div>
    //                       <p className={style.title}>{subCategory.title}</p>
    //                       <p className={style.author}>{subCategory.author}</p>
    //                     </div>
    //                     <div className={style.webtoonButton}>
    //                       <button>삭제</button>
    //                     </div>
    //                   </div>
    //                   <div className={style.reasonWrap}>
    //                     <p>삭제 이유 : </p>
    //                     <p>{subCategory.reason}</p>
    //                   </div>
    //                 </div>
    //               ))}
    //             </>
    //             :
    //             category.name === '회차 등록' ?
    //               <>
    //                 {category.episodesubcategories && category.episodesubcategories.map((subCategory) => (
    //                   <div className={style.webtoonBox} key={subCategory.id}>
    //                     <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
    //                       <div className={style.ImgWrap}>
    //                         <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
    //                       </div>
    //                       <div className={style.contentWrap}>
    //                         <div className={style.option}>
    //                           <div className={style.views}>
    //                             <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
    //                             <p className={style.viewstxt}>{subCategory.rating}</p>
    //                           </div>
    //                           <div className={style.likes}>
    //                             <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
    //                             <p className={style.likestxt}>{subCategory.day}</p>
    //                           </div>
    //                         </div>
    //                         <p className={style.title}>{subCategory.title}</p>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 ))}
    //               </>
    //               :
    //               category.name === '회차 수정' ?
    //                 <>
    //                   {category.episodesubcategories && category.episodesubcategories.map((subCategory) => (
    //                     <div className={style.webtoonBox} key={subCategory.id}>
    //                       <div className={style.webtoonInfoWrap} onClick={handleChangeEpisodeClick}>
    //                         <div className={style.ImgWrap}>
    //                           <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
    //                         </div>
    //                         <div className={style.contentWrap}>
    //                           <div className={style.option}>
    //                             <div className={style.views}>
    //                               <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
    //                               <p className={style.viewstxt}>{subCategory.rating}</p>
    //                             </div>
    //                             <div className={style.likes}>
    //                               <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
    //                               <p className={style.likestxt}>{subCategory.day}</p>
    //                             </div>
    //                           </div>
    //                           <p className={style.title}>{subCategory.title}</p>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   ))}
    //                 </>
    //                 :
    //                 category.name === '회차 삭제' ?
    //                   <>
    //                     {category.episodesubcategories && category.episodesubcategories.map((subCategory: episodesubcategories) => (
    //                       <div className={style.webtoonBox} key={subCategory.id}>
    //                         <div className={style.webtoonInfoWrap}>
    //                           <div className={style.ImgWrap}>
    //                             <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
    //                           </div>
    //                           <div className={style.contentWrap}>
    //                             <div className={style.option}>
    //                               <div className={style.views}>
    //                                 <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
    //                                 <p className={style.viewstxt}>{subCategory.rating}</p>
    //                               </div>
    //                               <div className={style.likes}>
    //                                 <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
    //                                 <p className={style.likestxt}>{subCategory.day}</p>
    //                               </div>
    //                             </div>
    //                             <p className={style.title}>{subCategory.title}</p>
    //                           </div>
    //                           <div className={style.webtoonButton}>
    //                             <button>삭제</button>
    //                           </div>
    //                         </div>
    //                         <div className={style.reasonWrap}>
    //                           <p>삭제 이유 :</p>
    //                           <p>{subCategory.reason}</p>
    //                         </div>
    //                       </div>
    //                     ))}
    //                   </>
    //                   :
    //                   <></>
    //       }
    //     </div>
    //   ))}
    // </div >

  )
}
