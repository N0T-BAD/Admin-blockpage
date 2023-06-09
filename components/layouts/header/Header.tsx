import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import style from '@/components/layouts/header/Header.module.css'
import { AuthorPathData, UserPathData } from '@/data/MainTopNavData';
import { AuthorPath } from '@/types/category/Category';
import { adminIdData } from '@/data/adminIdData';
import { adminDataType, adminIdDataType } from '@/types/login/adminIdDataType';

export default function Header() {

  const router = useRouter();

  // const { isLogin, accessToken } = useRecoilValue(adminLoginState)
  const [AdminName, setAdminName] = useState<adminIdDataType>();

  const [showMenu, setShowMenu] = useState(false);

  const toggleDropMenu: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handlemain = () => {
    router.push("/request");
  }

  const handleAuthor = (requestId: number) => {
    router.push(`/request/${requestId}`);
  }

  useEffect(() => {
    setAdminName(adminIdData[0])
  }, [])


  return (
    <>
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
            <div className={style.TopCategories}>
              <Image src={"/assets/images/icons/request.svg"} alt="icon" width={20} height={20} />
              <button onClick={toggleMenu}>요청 승인</button>
            </div>
            {AuthorPathData.map((category: AuthorPath) => (
              <div className={style.TopCategories} key={category.id}>
                <Image src={category.imgurl} alt="icon" width={20} height={20} />
                <button onClick={() => category.path ? router.push(category.path) : undefined}>{category.name}</button>
              </div>
            ))}
          </div>
        </section>
      </header >
      <div className={`${style.megaMenu} ${showMenu ? style.show : style.megaMenu}`} onClick={toggleDropMenu}>
        {UserPathData.map((category) => (
          <div onClick={() => handleAuthor(category.id)} key={category.id}>
            <p className={style.megaMenuItem} key={category.id}>{category.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}