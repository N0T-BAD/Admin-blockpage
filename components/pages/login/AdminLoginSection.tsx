import React from 'react'
import style from '@/components/pages/login/AdminLoginSection.module.css'
import AdminLogin from '@/components/pages/login/AdminLogin'

export default function AdminLoginSection() {
    return (
        <section className={style.AdminLoginSection}>
            <AdminLogin />
        </section>
    )
}
