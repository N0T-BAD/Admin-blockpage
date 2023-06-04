import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'

interface userIsLoginProps {
    children: ReactNode
}

export default function userIsLogin({ children }: userIsLoginProps) {
    const [accessToken, setaccessToken] = useState<boolean>(false)

    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken') ? true : false
        if (accessToken === false) {
            router.push('/')
        } else {
            setaccessToken(accessToken)
        }
    }, [children])

}