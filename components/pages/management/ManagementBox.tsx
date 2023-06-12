import React from 'react'
import style from '@/components/pages/management/ManagementBox.module.css'
import Image from 'next/image'

export default function ManagementBox() {
  return (
    <div className={style.adminBox}>
      <div className={style.sorrybox}>
        <Image src={'/assets/images/icons/Sorry.gif'} alt={'Sorry'} width={100} height={100} />
        <p>준비중인 서비스 입니다.</p>
      </div>
    </div>
  )
}
