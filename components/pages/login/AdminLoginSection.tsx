import React from 'react'
import style from '@/components/pages/login/AdminLoginSection.module.css'
import AdminLogin from '@/components/pages/login/AdminLogin'

interface RequestListProps {
    requestId: string;
}

export default function AdminLoginSection({ requestId }: RequestListProps) {
    return (
        <section className={style.AdminLoginSection}>
            <AdminLogin requestId={requestId} />
        </section>
    )
}