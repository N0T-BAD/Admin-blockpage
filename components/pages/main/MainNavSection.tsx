import React from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'
import { AuthorPathData } from '@/data/MainTopNavData'
import { useRouter } from 'next/router';
import RequestPage from './RequestPage';
import CommentsPage from '../comments/CommentsPage';
import WebtooninfoSection from './requestinfo/WebtooninfoSection';
import EpisodeInfo from './requestinfo/EpisodeInfo';



export default function MainNavSection() {

  const router = useRouter();

  return (
    <>
      <section className={style.bottomSection}>
        {router.pathname === "/request" ?
          <RequestPage />
          : router.pathname === "/comments" ?
            <CommentsPage />
            : router.pathname === "/correction" ?
              <WebtooninfoSection />
              : router.pathname === "/episode" ?
                <EpisodeInfo />
                : router.pathname === "/changeepisode" ?
                  <EpisodeInfo />
                  : ""
        }
      </section>
    </>
  )
}