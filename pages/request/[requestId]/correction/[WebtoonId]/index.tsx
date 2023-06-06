import Layout from "@/components/layouts/layout"
import WebtooninfoSection from "@/components/pages/main/requestinfo/WebtooninfoSection";
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const Correction: NextPageWithLayout = () => {

    return (
        <>
            <WebtooninfoSection />
        </>
    )
}

Correction.getLayout = function getLayout(page: React.ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default Correction



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