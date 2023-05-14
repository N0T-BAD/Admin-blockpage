import React, { ChangeEvent, useState } from 'react'
import { useRecoilState } from 'recoil';
import style from '@/components/pages/login/AdminLogin.module.css'
import Image from 'next/image'
import { inputAdminType, loginAdminType } from '@/types/login/inputAdminType'
import { adminLoginState } from '@/state/adminLoginState'
import axios from 'axios';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import Config from '@/configs/config.export';

export default function AdminLogin() {

    const router = useRouter();
    const { baseUrl } = Config();

    const [inputData, setInputData] = useState<inputAdminType>({
        id: '',
        password: ''
    })

    const [loginData, setLoginData] = useRecoilState<loginAdminType>(adminLoginState);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = (event: any) => {

        event.preventDefault();
        console.log(inputData);
        if (inputData.id === "" || inputData.password === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "아이디와 비밀번호를 입력해주세요!",
                customClass: {
                    confirmButton: 'swal-confirm-button'
                }
            });
            return;
        }
        else {
            axios.post(`${baseUrl}/api/v1/users/login`, {
                userEmail: inputData.id,
                password: inputData.password,
            }, { withCredentials: false }).then((res) => {
                setLoginData({
                    adminNickname: res.data,
                    accessToken: res.headers.authorization,
                    isLogin: true
                });

                const adminNickname = res.data;

                const accessToken = res.headers.authorization;

                localStorage.setItem("userNickname", adminNickname);
                localStorage.setItem("accessToken", accessToken);
                router.back();

                Swal.fire({
                    icon: "success",
                    text: `${res.data}님 환영합니다~ ^^`,
                })

                return res;
            })
                .catch(err => {
                    console.log(err);
                })
            return;
        }
    };

    return (
        <div className={style.AdminLoginWrap}>
            <div className={style.AdminLogin}>
                <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} />
                <p>관리자 페이지 입니다.</p>
                <form onSubmit={handleSubmit}>
                    <div className={style.inputIDWrap}>
                        <input className={style.inputID} type="text" id="id" placeholder='ID' onChange={handleOnChange} />
                    </div>
                    <div className={style.inputPwWrap}>
                        <input className={style.inputPw} type="password" id="pw" placeholder='Password' onChange={handleOnChange} />
                    </div>
                    <button className={style.Loginbutton} type="submit">로그인</button>
                </form>
            </div>
        </div>
    )
}
