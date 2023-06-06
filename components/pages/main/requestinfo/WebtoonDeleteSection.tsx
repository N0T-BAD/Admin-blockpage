import React from 'react'
import style from '@/components/pages/main/requestinfo/WebtooninfoSection.module.css'
import WebtoonDelete from '../request/WebtoonDelete'

export default function WebtoonDeleteSection() {
    return (
        <section className={style.webtoondeletesection}>
            <WebtoonDelete />
        </section>
    )
}