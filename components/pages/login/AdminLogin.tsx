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

// axios.defaults.withCredentials = true;

export default function AdminLogin() {

  const router = useRouter();
  const { baseUrl } = Config();

  const [inputData, setInputData] = useState<inputAdminType>({
    adminId: '',
    password: ''
  })

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    if (inputData.adminId === "" || inputData.password === "") {
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
      axios.post(`${baseUrl}/member-service/v1/admins`, {
        adminId: inputData.adminId,
        password: inputData.password,
      }, { withCredentials: true })
        .then(res => {
          console.log(res)
          localStorage.setItem("username", res.data.data.name);
          console.log(localStorage.getItem("username"))
          Swal.fire({
            icon: "success",
            text: `${res.data.data.name}님 환영합니다~ ^^`,
          }).then(() => {
            router.push(`/request/1`);
          });
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "아이디와 비밀번호를 확인해주세요!",
            customClass: {
              confirmButton: 'swal-confirm-button'
            }
          });
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
            <input className={style.inputID} type="text" name="adminId" placeholder='ID' onChange={handleOnChange} />
          </div>
          <div className={style.inputPwWrap}>
            <input className={style.inputPw} type="password" name="password" placeholder='Password' onChange={handleOnChange} />
          </div>
          <button className={style.Loginbutton} type="submit">로그인</button>
        </form>
      </div>
    </div>
  )
}
