import styled from '@emotion/styled'
import axios from 'axios'
import { useContext } from 'react'
import { UsersContext } from './_app'

export default function Home() {
  // axios
  //   .get('/users.json')
  //   .then((users) => {
  //     console.log(users.data)
  //   })
  //   .catch((err) => {
  //     console.log('에러:', err)
  //   })

  const { users, setUsers } = useContext(UsersContext)
  console.log(users)

  return (
    <>
      <h1>음..?</h1>
      <h2>하이요!</h2>

      <InputTest placeholder="댓글"></InputTest>
    </>
  )
}

export const Container = styled.div``

export const InputTest = styled.input`
  outline: none;
  border: none;
`
