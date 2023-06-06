import React from 'react'
import style from '@/components/pages/main/requestinfo/WebtooninfoSection.module.css'
import EpisodeModify from './EpisodeModify'

export default function EpisodeModifySection() {
    return (
        <section className={style.episodemodifysection}>
            <EpisodeModify />
        </section>
    )
}
