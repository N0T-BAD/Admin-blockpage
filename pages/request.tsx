import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import RequestPage from "@/components/pages/main/RequestPage"
import { NextPageWithLayout } from "@/pages/_app"

const request: NextPageWithLayout = () => {
    return (
        <>
            <MainNavSection />
            <RequestPage />
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