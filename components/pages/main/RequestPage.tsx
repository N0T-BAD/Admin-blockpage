import { webtoonData } from '@/data/webtoonData'
import { episodesubcategories, webtoonsubcategories } from '@/types/webtoon/webtoonDataType'
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'

export default function RequestPage() {

  const router = useRouter();

  const [active, setActive] = useState('');

  const handleCategoryClick = (name: string) => {
    setActive(name);
  }

  const handleEpisodeClick = () => {
    router.push("/correction");
  }

  return (
    <div className={style.adminBox}>
      <div className={style.HistoryCategory}>
        <nav>
          <ul>
            {webtoonData.map((category) => (
              <li
                key={category.id}
                className={category.name === active ? `${style.active}` : ""}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {webtoonData.map((category) => (
        <div className={category.name === active ? `${style.Clickactive}` : `${style.NoClickactive}`} key={category.id}>
          {
            category.name === '웹툰 수정' ?
              <>
                {category.webtoonsubcategories && category.webtoonsubcategories.map((subCategory) => (
                  <div className={style.webtoonBox} onClick={handleEpisodeClick} key={subCategory.subCategoryId}>
                    <div className={style.webtoonInfoWrap}>
                      <div className={style.ImgWrap}>
                        <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                      </div>
                      <div className={style.contentWrap}>
                        <div className={style.option}>
                          <div className={style.views}>
                            <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                            <p className={style.viewstxt}>{subCategory.views}</p>
                          </div>
                          <div className={style.likes}>
                            <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                            <p className={style.likestxt}>{subCategory.likes}</p>
                          </div>
                        </div>
                        <p className={style.title}>{subCategory.title}</p>
                        <p className={style.author}>{subCategory.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
              :
              category.name === '웹툰 삭제' ?
                <>
                  {category.webtoonsubcategories && category.webtoonsubcategories.map((subCategory: webtoonsubcategories) => (
                    <div className={style.webtoonBox} key={subCategory.subCategoryId}>
                      <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
                        <div className={style.ImgWrap}>
                          <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                        </div>
                        <div className={style.contentWrap}>
                          <div className={style.option}>
                            <div className={style.views}>
                              <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                              <p className={style.viewstxt}>{subCategory.views}</p>
                            </div>
                            <div className={style.likes}>
                              <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                              <p className={style.likestxt}>{subCategory.likes}</p>
                            </div>
                          </div>
                          <p className={style.title}>{subCategory.title}</p>
                          <p className={style.author}>{subCategory.author}</p>
                        </div>
                        <div className={style.webtoonButton}>
                          <button>삭제</button>
                        </div>
                      </div>
                      <div className={style.reasonWrap}>
                        <p>삭제 이유 : </p>
                        <p>{subCategory.reason}</p>
                      </div>
                    </div>
                  ))}
                </>
                :
                category.name === '회차 등록' ?
                  <>
                    {category.episodesubcategories && category.episodesubcategories.map((subCategory) => (
                      <div className={style.webtoonBox} key={subCategory.id}>
                        <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
                          <div className={style.ImgWrap}>
                            <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                          </div>
                          <div className={style.contentWrap}>
                            <div className={style.option}>
                              <div className={style.views}>
                                <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                                <p className={style.viewstxt}>{subCategory.rating}</p>
                              </div>
                              <div className={style.likes}>
                                <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                                <p className={style.likestxt}>{subCategory.day}</p>
                              </div>
                            </div>
                            <p className={style.title}>{subCategory.title}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                  :
                  category.name === '회차 수정' ?
                    <>
                      {category.episodesubcategories && category.episodesubcategories.map((subCategory) => (
                        <div className={style.webtoonBox} key={subCategory.id}>
                          <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
                            <div className={style.ImgWrap}>
                              <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                            </div>
                            <div className={style.contentWrap}>
                              <div className={style.option}>
                                <div className={style.views}>
                                  <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                                  <p className={style.viewstxt}>{subCategory.rating}</p>
                                </div>
                                <div className={style.likes}>
                                  <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                                  <p className={style.likestxt}>{subCategory.day}</p>
                                </div>
                              </div>
                              <p className={style.title}>{subCategory.title}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                    :
                    category.name === '회차 삭제' ?
                      <>
                        {category.episodesubcategories && category.episodesubcategories.map((subCategory: episodesubcategories) => (
                          <div className={style.webtoonBox} key={subCategory.id}>
                            <div className={style.webtoonInfoWrap} onClick={handleEpisodeClick}>
                              <div className={style.ImgWrap}>
                                <Image src={'/assets/webtoon/image1.png'} alt={'이것이 법이다'} width={140} height={120} />
                              </div>
                              <div className={style.contentWrap}>
                                <div className={style.option}>
                                  <div className={style.views}>
                                    <Image src={'/assets/images/icons/views.svg'} alt={'조회 수'} width={15} height={15} />
                                    <p className={style.viewstxt}>{subCategory.rating}</p>
                                  </div>
                                  <div className={style.likes}>
                                    <Image src={'/assets/images/icons/likes.svg'} alt={'좋아요 수'} width={12} height={12} />
                                    <p className={style.likestxt}>{subCategory.day}</p>
                                  </div>
                                </div>
                                <p className={style.title}>{subCategory.title}</p>
                              </div>
                              <div className={style.webtoonButton}>
                                <button>삭제</button>
                              </div>
                            </div>
                            <div className={style.reasonWrap}>
                              <p>삭제 이유 :</p>
                              <p>{subCategory.reason}</p>
                            </div>
                          </div>
                        ))}
                      </>
                      :
                      <></>
          }
        </div>
      ))}
    </div>
  )
}
