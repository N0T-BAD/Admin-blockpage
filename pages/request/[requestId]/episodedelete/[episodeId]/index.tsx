import Layout from "@/components/layouts/layout"
import EpisodeDeleteSection from "@/components/pages/main/delete/EpisodeDeleteSection";
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const EpisodeDelete: NextPageWithLayout = () => {

    return (
        <>
            <EpisodeDeleteSection />
        </>
    )
}

EpisodeDelete.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default EpisodeDelete



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