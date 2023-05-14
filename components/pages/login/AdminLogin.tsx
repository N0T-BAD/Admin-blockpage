import React from 'react'
import style from '@/components/pages/login/AdminLogin.module.css'
import Image from 'next/image'

export default function AdminLogin() {
    return (
        <div className={style.AdminLoginWrap}>
            <div className={style.AdminLogin}>
                <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} />
                <p>관리자 페이지 입니다.</p>
                <form>
                    <div className={style.inputIDWrap}>
                        <input className={style.inputID} type="text" id="id" placeholder='ID' />
                    </div>
                    <div className={style.inputPwWrap}>
                        <input className={style.inputPw} type="password" id="pw" placeholder='Password' />
                    </div>
                    <button className={style.Loginbutton} type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}
