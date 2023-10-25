import { useRouter } from 'next/router'

export const useMoveToPage = () => {
  const router = useRouter()

  const onClickMoveToPage = (path) => (e) => {
    router.push(path)
  }

  return { onClickMoveToPage: onClickMoveToPage }
}
