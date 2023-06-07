import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

interface MainNavSectionProps {
  requestId: string;
}

const Comments: NextPageWithLayout<MainNavSectionProps> = ({ requestId }) => {
  return (
    <>
      <MainNavSection requestId={requestId} />
    </>
  )
}

Comments.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Comments