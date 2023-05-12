import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import style from '@/components/layouts/header/Header.module.css'

export default function Header() {

    const router = useRouter();

    const handlemain = () => {
        router.push("/");
    }

    return (
        <header>
            <div className={style.logo}>
                <Image src={'/assets/images/logo/logo.svg'} alt="logo" width={200} height={77} onClick={handlemain} />
                <h1>BlockPage</h1>
            </div>
        </header>
    )
}
