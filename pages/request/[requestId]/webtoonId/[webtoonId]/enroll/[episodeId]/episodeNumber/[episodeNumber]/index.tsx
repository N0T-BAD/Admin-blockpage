import Layout from "@/components/layouts/layout"
import EpisodeEnrollSection from "@/components/pages/main/Enroll/EpisodeEnrollSection";
import EpisodeInfo from "@/components/pages/main/requestinfo/EpisodeInfo";
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const Enroll: NextPageWithLayout = () => {

    return (
        <>
            <EpisodeEnrollSection />
        </>
    )
}

Enroll.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Enroll



export async function getServerSideProps(context: Params) {
    const { requestId } = context.query;
    const { episodeId } = context.query;
    const { episodeNumber } = context.query;
    const { webtoonId } = context.query;

    console.log(requestId);

    return {
        props: {
            requestId,
            episodeId,
            episodeNumber,
            webtoonId,
        },
    };
}