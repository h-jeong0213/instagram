import axios from 'axios'
import { createPool } from 'mysql2/promise'
import { createContext, useEffect, useState } from 'react'

export const UsersContext = createContext()

export default function App({ Component, pageProps }) {
  createPool({
    host: 'localhost',
    user: 'restagramuser',
    password: '1234',
    database: 'restagram',
    port: 3306,
  })
  const [users, setUsers] = useState([])

  //const mysqlData = ''

  useEffect(() => {
    const mysqlData = 'users.json'

    axios
      .get(mysqlData)
      .then((users) => {
        console.log(users.data)
        setUsers(users.data)
      })
      .catch((err) => {
        console.log('에러:', err)
      })
  }, [])

  return (
    // value={{ users, setUsers }}
    <UsersContext.Provider value={{ users, setUsers }}>
      <Component {...pageProps} />
    </UsersContext.Provider>
  )
}
