import Layout from "@/components/layouts/layout"
import { NextPageWithLayout } from "@/pages/_app"
import style from '@/pages/css/login.module.css'

const main: NextPageWithLayout = () => {
  return (
    <></>
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

