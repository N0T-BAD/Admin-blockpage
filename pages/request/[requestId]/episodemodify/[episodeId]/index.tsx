import Layout from "@/components/layouts/layout"
import EpisodeModifySection from "@/components/pages/main/modify/EpisodeModifySection";
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const EpisodeModify: NextPageWithLayout = () => {

    return (
        <>
            <EpisodeModifySection />
        </>
    )
}

EpisodeModify.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EpisodeModify



export async function getServerSideProps(context: Params) {
    const { requestId } = context.query;
    const { episodeId } = context.query;

    console.log(requestId);

    return {
        props: {
            requestId,
            episodeId,
        },
    };
}