import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { episodelist } from '@/state/episodelist';
import { episodeStateType } from '@/types/webtoon/webtoonDataType';
import { useRecoilState } from 'recoil';
import Config from '@/configs/config.export';
import axios from 'axios';
import Pagination from '../../ui/pagebutton/Pagination';

export default function EpisodeInfoBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [episodeData, setEpisodeData] = useRecoilState<episodeStateType>(episodelist);

  const handleWebtoonClick = (webtoonId: number, episodeId: number, episodeNumber: number) => {
    router.push(`/request/${requestId}/webtoonId/${webtoonId}/enroll/${episodeId}/episodeNumber/${episodeNumber}`);
  }

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=enroll`)
      .then((res) => {
        setEpisodeData(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className={style.adminBox}>
        <div className={style.webtoontext}>
          <p>회차 등록 요청</p>
        </div>
        <div className={style.contentbox}>
          {episodeData.data && episodeData.data.slice(offset, offset + limit).map((subCategory) => (
            <div className={style.webtoonInfoWrap} key={subCategory.episodeId} onClick={() => handleWebtoonClick(subCategory.webtoonId, subCategory.episodeId, subCategory.episodeNumber)}>
              <div className={style.ImgWrap}>
                <Image src={subCategory.thumbnail} alt={subCategory.episodeTitle} width={120} height={100} />
              </div>
              <div className={style.contentWrap}>
                <p className={style.title}>{subCategory.episodeNumber}화 {subCategory.episodeTitle}</p>
                <p className={style.author}>{subCategory.uploadDate}</p>
              </div>
            </div>
          ))}
        </div>
        <footer className={style.paginationfotter}>
          <Pagination
            total={episodeData.data.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </>
  )
}
