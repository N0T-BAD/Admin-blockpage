import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

interface RequestListProps {
  requestId: string;
}

const Request: NextPageWithLayout<RequestListProps> = ({ requestId }) => {
  console.log(requestId)

  return (
    <>
      <MainNavSection requestId={requestId} />
    </>
  )
}

Request.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Request

export async function getServerSideProps(context: Params) {
  const { requestId } = context.query;

  console.log(requestId);

  return {
    props: {
      requestId: String(requestId),
    },
  };
}