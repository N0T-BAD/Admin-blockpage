import React from 'react'
import style from '@/components/pages/login/AdminLogin.module.css'

export default function AdminLogin() {
    return (
        <div className={style.AdminLoginWrap}>
            <div className={style.AdminLogin}>
                <h2>관리자 로그인</h2>
                <form>
                    <div className={style.inputWrap}>
                        <label htmlFor="id">아이디</label>
                        <input type="text" id="id" />
                    </div>
                    <div className={style.inputWrap}>
                        <label htmlFor="pw">비밀번호</label>
                        <input type="password" id="pw" />
                    </div>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}
