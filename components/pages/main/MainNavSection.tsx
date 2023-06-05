import React from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'
import { AuthorPathData } from '@/data/MainTopNavData'
import { useRouter } from 'next/router';
import RequestPage from './RequestPage';
import CommentsPage from '../comments/CommentsPage';
import WebtooninfoSection from './requestinfo/WebtooninfoSection';
import EpisodeInfo from './requestinfo/EpisodeInfo';
import ChangeWebtoonBox from './request/ChangeWebtoonBox';
import DeleteWebtoonBox from './request/DeleteWebtoonBox';

interface MainNavSectionProps {
  requestId: string;
}

export default function MainNavSection({ requestId }: MainNavSectionProps) {

  const router = useRouter();

  return (
    <>
      <section className={style.bottomSection}>
        {requestId ?
          requestId === "1" ? <ChangeWebtoonBox /> :
            requestId === "2" ? <DeleteWebtoonBox /> :
              requestId === "3" ? <ChangeWebtoonBox /> : ""
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