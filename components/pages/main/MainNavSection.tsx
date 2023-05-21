import React from 'react'
import style from '@/components/pages/main/MainNavSection.module.css'
import { AuthorPathData } from '@/data/MainTopNavData'
import { useRouter } from 'next/router';



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
        </>
    )
}