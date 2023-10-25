import { useRouter } from 'next/router'
import { useEffect } from 'react'

// 로그인이 되어있어야지만 보여질 컴포넌트
// 수업영상 6/20
export const withAuth = (Components) => (props) => {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      //user가 아니면 accessToken
      alert('로그인을 먼저 해주세요!')
      router.push('/signIn')
    }
  }, [])
  return <Components {...props} />
}
