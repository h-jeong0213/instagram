import { UserContextProvider } from './api/util/UserContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </>
  )
}
