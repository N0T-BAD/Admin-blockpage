import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

const request: NextPageWithLayout = () => {
    return (
        <>
            <MainNavSection />
        </>
    )
}

request.getLayout = function getLayout(request: React.ReactElement) {
    return (
        <Layout>
            {request}
        </Layout>
    )
}

export default request