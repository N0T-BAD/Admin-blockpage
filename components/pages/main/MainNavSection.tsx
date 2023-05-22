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
            <section className={style.MainNavSection}>
                <div className={style.TopCategoriesBox}>
                    {AuthorPathData.map(category => (
                        <div className={style.TopCategories} key={category.id}>
                            <p onClick={() => router.push(category.path)}>{category.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className={style.bottomSection}>
                {router.pathname === "/request" ?
                    <RequestPage />
                    : router.pathname === "/comments" ?
                        <CommentsPage />
                        : router.pathname === "/correction" ?
                            <WebtooninfoSection />
                            : router.pathname === "/episode" ?
                                <EpisodeInfo />
                                : ""
                }
            </section>
        </>
    )
}