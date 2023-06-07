import AdminLoginSection from "@/components/pages/login/AdminLoginSection"
import { NextPageWithLayout } from "@/pages/_app"

interface RequestListProps {
  requestId: string;
}

const Login: NextPageWithLayout<RequestListProps> = ({ requestId }) => {

  return (
    <>
      <AdminLoginSection requestId={requestId} />
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

