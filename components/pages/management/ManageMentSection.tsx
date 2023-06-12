import React from 'react'
import ManagementBox from './ManagementBox'
import style from '@/components/pages/management/ManageMentSection.module.css'

export default function ManageMentSection() {
  return (
    <section className={style.bottomSection}>
      <ManagementBox />
    </section>
  )
}
