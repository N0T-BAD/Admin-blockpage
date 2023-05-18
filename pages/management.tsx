import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

const management: NextPageWithLayout = () => {
    return (
        <>
            <MainNavSection />
        </>
    )
}

management.getLayout = function getLayout(management: React.ReactElement) {
    return (
        <Layout>
            {management}
        </Layout>
    )
}

export default management