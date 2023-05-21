import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import WebtooninfoSection from "@/components/pages/main/requestinfo/WebtooninfoSection"
import { NextPageWithLayout } from "@/pages/_app"

const correction: NextPageWithLayout = () => {
    return (
        <>
            <MainNavSection />
            <WebtooninfoSection />
        </>
    )
}

correction.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default correction

