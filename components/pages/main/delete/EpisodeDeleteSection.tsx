import React from 'react'
import style from '@/components/pages/main/requestinfo/WebtooninfoSection.module.css'
import EpisodeDelete from './EpisodeDelete'

export default function EpisodeDeleteSection() {
    return (
        <section className={style.episodedeletesection}>
            <EpisodeDelete />
        </section>
    )
}
