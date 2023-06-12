import Layout from "@/components/layouts/layout"
import ManageMentSection from "@/components/pages/management/ManageMentSection"
import { NextPageWithLayout } from "@/pages/_app"

const Statistics: NextPageWithLayout = () => {
    return (
        <>
            <ManageMentSection />
        </>
    )
}

Statistics.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Statistics