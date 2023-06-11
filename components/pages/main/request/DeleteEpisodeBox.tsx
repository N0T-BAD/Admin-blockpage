import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { episodeStateType } from '@/types/webtoon/webtoonDataType';
import { episodelist } from '@/state/episodelist';
import Config from '@/configs/config.export';
import axios from 'axios';
import Pagination from '../../ui/pagebutton/Pagination';

export default function DeleteEpisodeBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [episodeData, setEpisodeData] = useRecoilState<episodeStateType>(episodelist);

  const handleWebtoonClick = (webtoonId: number, episodeId: number, episodeNumber: number) => {
    router.push(`/request/${requestId}/webtoonId/${webtoonId}/episodedelete/${episodeId}/episodeNumber/${episodeNumber}`);
  }

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios.get(`${baseUrl}/webtoon-service/v1/demands?target=episode&type=remove&pageNo=0`)
      .then((res) => {
        setEpisodeData(res.data)
        console.log(res.data)
      })
  }, [])

  return (
    <>
      <div className={`${style.adminBox} ${episodeData.data && episodeData.data.demandView.length % 2 !== 0 ? style.adminBox2 : ''}`}>
        <div className={style.webtoontext}>
          <p>회차 삭제 요청</p>
        </div>
        {episodeData.data && episodeData.data.demandView.slice(offset, offset + limit).map((subCategory) => (
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
        <footer className={style.paginationfotter}>
          <Pagination
            total={episodeData.data.demandView.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </>
  )
}
