import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import style from '@/components/layouts/header/Header.module.css'
import { adminLoginState } from '@/state/adminLoginState';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import MainNavSection from '@/components/pages/main/MainNavSection';
import { AuthorPathData } from '@/data/MainTopNavData';
import { AuthorPath } from '@/types/category/Category';
import { adminIdData } from '@/data/adminIdData';
import { adminIdDataType } from '@/types/login/adminIdDataType';

export default function Header() {

  const router = useRouter();

  // const { isLogin, accessToken } = useRecoilValue(adminLoginState)
  const [AdminName, setAdminName] = useState<adminIdDataType>();

  // useEffect(() => {
  //   if (!isLogin) {
  //     Swal.fire({
  //       icon: 'error',
  //       text: '로그인이 필요한 서비스 입니다.',
  //       customClass: {
  //         confirmButton: 'swal-confirm-button'
  //       }
  //     }).then(
  //       res => res.isConfirmed && router.push('/')
  //     )
  //     return;
  //   }
  // }, [accessToken, isLogin, router])

  const handlemain = () => {
    router.push("/request");
  }

  useEffect(() => {
    setAdminName(adminIdData[0])
  }, [])


  return (
    <header className={style.headerWrap}>
      <div className={style.logo}>
        <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={150} height={77} onClick={handlemain} />
      </div>
      {AdminName &&
        <div className={style.adminnamebox} key={AdminName.id}>
          <p>{AdminName.name} 님~</p>
          <p>환영합니다~ ^^</p>
        </div>
      }
      <section className={style.MainNavSection}>
        <div className={style.TopCategoriesBox}>
          {AuthorPathData.map((category: AuthorPath) => (
            <div className={style.TopCategories} key={category.id}>
              <Image src={category.imgurl} alt="icon" width={30} height={30} />
              <button onClick={() => router.push(category.path)}>{category.name}</button>
            </div>
          ))}
        </div>
      </section>
    </header>
  )
}
