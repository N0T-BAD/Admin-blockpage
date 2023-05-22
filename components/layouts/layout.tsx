import React, { useRouter } from "next/router"
import Header from "@/components/layouts/header/Header"
import style from "@/components/layouts/layout.module.css"

export default function Layout(props: { children: React.ReactNode }) {

    return (
        <div className={style.blockpage}>
            <Header />
            <div className={style.childrenbox}>{props.children}</div>
        </div>
    )
}