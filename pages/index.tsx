import Layout from "@/components/layouts/layout"
import MainNavSection from "@/components/pages/main/MainNavSection"
import { NextPageWithLayout } from "@/pages/_app"

const main: NextPageWithLayout = () => {
  return (
    <>
      <MainNavSection />
    </>
  )
}

main.getLayout = function getLayout(main: React.ReactElement) {
  return (
    <Layout>
      {main}
    </Layout>
  )
}

export default main