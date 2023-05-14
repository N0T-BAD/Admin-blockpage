import Layout from "@/components/layouts/layout"
import AdminLoginSection from "@/components/pages/login/AdminLoginSection"
import { NextPageWithLayout } from "@/pages/_app"
import style from '@/pages/css/login.module.css'

const login: NextPageWithLayout = () => {
    return (
        <>
            <AdminLoginSection />
        </>
    )
}

login.getLayout = function getLayout(login: React.ReactElement) {
    return (
        <>
            {login}
        </>
    )
}

export default login

