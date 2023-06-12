import React, { useEffect, useState } from 'react'
import style from '@/components/pages/main/request/ChangeWebtoonBox.module.css'
import { webtoonData } from '@/data/webtoonData';
import { useRouter } from 'next/router';
import Image from 'next/image';
import axios from 'axios';
import Config from '@/configs/config.export';
import { useRecoilState } from 'recoil';
import { WebtoonModifyType } from '@/types/webtoon/webtoonDataType';
import { webtoonlist } from '@/state/webtoonlist';
import Pagination from '../../ui/pagebutton/Pagination';

export default function DeleteWebtoonBox() {

  const router = useRouter();
  const { requestId } = router.query;
  const { baseUrl } = Config();

  const [webtoonData, setWebtoonData] = useRecoilState<WebtoonModifyType>(webtoonlist);

  const handleWebtoonClick = (webtoonId: number) => {
    router.push(`/request/${requestId}/delete/${webtoonId}`);
  }

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

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
        <div className={style.contentbox}>
          {webtoonData.data && webtoonData.data.demandView.slice(offset, offset + limit).map((subCategory) => (
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
        <footer className={style.paginationfotter}>
          <Pagination
            total={webtoonData.data.demandView.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </footer>
      </div>
    </>
  )
}
