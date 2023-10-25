import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null)
  const [accessToken, setAccessToken] = useState('')
  useEffect(() => {
    console.log('유저컨텍스트프로바이더의 useEffect가 실행됨!')

    if (localStorage.getItem('accessToken')) {
      // accessToken이 있다면
      console.log('현재 로그인 된 상태임!')
      axios
        .get('/api/login', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        })
        .then((res) => {
          setUsers(res.data)
          setAccessToken(localStorage.getItem('accessToken'))
        })
        .catch((err) => console.log(err))
    }
  }, [accessToken])

  return (
    <UserContext.Provider
      value={{
        users,
        accessToken,
        setUsers,
        setAccessToken,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
