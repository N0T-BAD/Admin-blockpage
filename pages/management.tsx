import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"

const Management: NextPageWithLayout = () => {
  return (
    <>

    </>
  )
}

Management.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Management