import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react'
import style from '@/components/layouts/header/Header.module.css'
import { AuthorPathData, UserPathData } from '@/data/MainTopNavData';
import { AuthorPath } from '@/types/category/Category';
import { adminIdData } from '@/data/adminIdData';
import { adminDataType, adminIdDataType } from '@/types/login/adminIdDataType';
import Config from '@/configs/config.export';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Header() {

  const router = useRouter();
  const { baseUrl } = Config();

  // const { isLogin, accessToken } = useRecoilValue(adminLoginState)
  const [AdminName, setAdminName] = useState<string>();

  const [showMenu, setShowMenu] = useState(false);
  const [showMenuAnimationTimeout, setShowMenuAnimationTimeout] = useState<NodeJS.Timeout | null>(null);


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

  const handleLogout = () => {
    axios.delete(`${baseUrl}/member-service/v1/admins`,
      { withCredentials: true })
      .then(res => {
        console.log(res);
        Swal.fire({
          icon: "success",
          text: res.data.data.message,
        }).then(() => {
          localStorage.removeItem('username')
          router.push("/");
        });
      })
  }

  useEffect(() => {
    const UserName = localStorage.getItem('username')
    if (UserName === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "로그인이 필요한 서비스입니다!",
        customClass: {
          confirmButton: 'swal-confirm-button'
        }
      }).then(() => {
        router.push('/')
      })
    } else {
      setAdminName(UserName)
    }
  }, [])

  return (
    <>
      <header className={style.headerWrap}>
        <div className={style.logo}>
          <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={150} height={77} onClick={handlemain} />
        </div>
        {AdminName &&
          <div className={style.adminnamebox}>
            <p>{AdminName} 님~</p>
            <p>환영합니다~ ^^</p>
          </div>
        }
        <section className={style.MainNavSection}>
          <div className={style.TopCategoriesBox}>
            <div className={style.TopCategories}>
              <Image src={"/assets/images/icons/request.svg"} alt="icon" width={20} height={20} />
              <button onClick={toggleMenu}>요청 승인</button>
            </div>
            <div className={`${style.megaMenu} ${showMenu ? style.show : style.hide}`} onClick={toggleDropMenu}>
              {UserPathData.map((category) => (
                <div onClick={() => handleAuthor(category.id)} key={category.id}>
                  <p className={style.megaMenuItem} key={category.id}>{category.name}</p>
                </div>
              ))}
            </div>
            {AuthorPathData.map((category: AuthorPath) => (
              <div className={style.TopCategories} key={category.id}>
                <Image src={category.imgurl} alt="icon" width={20} height={20} />
                <button onClick={() => category.path ? router.push(category.path) : undefined}>{category.name}</button>
              </div>
            ))}
            <div className={style.TopCategories}>
              <Image src={"/assets/images/icons/logout.svg"} alt="logout" width={20} height={20} />
              <button onClick={handleLogout}>로그아웃</button>
            </div>
          </div>
        </section>
      </header >
    </>
  )
}