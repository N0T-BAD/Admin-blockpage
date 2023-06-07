import Layout from "@/components/layouts/layout"
import WebtoonDeleteSection from "@/components/pages/main/requestinfo/WebtoonDeleteSection";
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const WebtoonDelete: NextPageWithLayout = () => {

    return (
        <>
            <WebtoonDeleteSection />
        </>
    )
}

WebtoonDelete.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default WebtoonDelete



export async function getServerSideProps(context: Params) {
    const { requestId } = context.query;
    const { webtoonId } = context.query;

    console.log(requestId);

    return {
        props: {
            requestId,
            webtoonId,
        },
    };
}