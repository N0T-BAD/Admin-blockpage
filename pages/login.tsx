import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import style from '@/pages/css/login.module.css'

const login: NextPageWithLayout = () => {
    return (
        <></>
    )
}

login.getLayout = function getLayout(login: React.ReactElement) {
    return (
        <Layout>
            {login}
        </Layout>
    )
}

export default login

