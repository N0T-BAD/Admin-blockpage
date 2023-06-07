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
      <div className={style.adminBox}>
        {requestId && UserPathData.map((category) => (
          <>
            {category.id === 1 ?
              <p>안농</p>
              :
              category.id === 2 ?
                <p>구래</p>
                :
                <></>
            }
          </>
        ))}
      </div>
    </>
  )
}
