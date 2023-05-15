import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import style from '@/components/layouts/header/Header.module.css'
import { adminLoginState } from '@/state/adminLoginState';
import { useRecoilValue } from 'recoil';
import Swal from 'sweetalert2';
import MainNavSection from '@/components/pages/main/MainNavSection';

export default function Header() {

    const router = useRouter();

    const { isLogin, accessToken } = useRecoilValue(adminLoginState)

    useEffect(() => {
        if (!isLogin) {
            Swal.fire({
                icon: 'error',
                text: '로그인이 필요한 서비스 입니다.',
                customClass: {
                    confirmButton: 'swal-confirm-button'
                }
            }).then(
                res => res.isConfirmed && router.push('/login')
            )
            return;
        }
    }, [accessToken, isLogin])

    const handlemain = () => {
        router.push("/");
    }

    return (
        <header className={style.headerWrap}>
            <div className={style.logo}>
                <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={handlemain} />
            </div>
        </header>
    )
}
