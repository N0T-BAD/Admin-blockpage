import React, { useRouter } from "next/router"
import Header from "@/components/layouts/header/Header"

export default function Layout(props: { children: React.ReactNode }) {

    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    )
}