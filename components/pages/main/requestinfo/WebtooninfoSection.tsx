import React from 'react'
import style from '@/components/pages/main/requestinfo/WebtooninfoSection.module.css'
import Webtooninfo from './Webtooninfo'

export default function WebtooninfoSection() {

    return (
        <section className={style.webtooninfosection}>
            <Webtooninfo />
        </section>
    )
}
