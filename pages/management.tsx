import Layout from "@/components/layouts/layout"
import ManageMentSection from "@/components/pages/management/ManageMentSection"
import { NextPageWithLayout } from "@/pages/_app"

const Management: NextPageWithLayout = () => {
  return (
    <>
      <ManageMentSection />
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