import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

const comments: NextPageWithLayout = () => {
    return (
        <>
            <MainNavSection />
        </>
    )
}

comments.getLayout = function getLayout(comments: React.ReactElement) {
    return (
        <Layout>
            {comments}
        </Layout>
    )
}

export default comments