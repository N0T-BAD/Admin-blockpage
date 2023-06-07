import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

const episode: NextPageWithLayout = () => {
  return (
    <>
      {/* <MainNavSection /> */}
    </>
  )
}

episode.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default episode

