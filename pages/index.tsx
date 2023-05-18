import AdminLoginSection from "@/components/pages/login/AdminLoginSection"
import { NextPageWithLayout } from "@/pages/_app"

const login: NextPageWithLayout = () => {
  return (
    <>
      <AdminLoginSection />
    </>
  )
}

login.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      {page}
    </>
  )
}

export default login

