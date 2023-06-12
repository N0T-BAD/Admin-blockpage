import AdminLoginSection from "@/components/pages/login/AdminLoginSection"
import { NextPageWithLayout } from "@/pages/_app"

const Login: NextPageWithLayout = () => {

  return (
    <>
      <AdminLoginSection />
    </>
  )
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      {page}
    </>
  )
}

export default Login

