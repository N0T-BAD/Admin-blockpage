import React from 'react'
import EpisodeInfo from '../requestinfo/EpisodeInfo'
import style from '@/components/pages/main/requestinfo/WebtooninfoSection.module.css'

export default function EpisodeEnrollSection() {
    return (
        <section className={style.episodeenrollsection}>
            <EpisodeInfo />
        </section>
    )
}
