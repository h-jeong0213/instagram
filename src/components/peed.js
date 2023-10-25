import styled from '@emotion/styled'
import axios from 'axios'
import { useEffect, useState } from 'react'

const UserPeed = () => {
  const [user, setUser] = useState([])
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/posts').then((res) => {
      setPosts(res.data)
    })

    axios.get('/api/users').then((res) => {
      setUsers(res.data)
    })

    if (typeof window !== 'undefined') {
      // 브라우저 환경인 경우에만 localStorage 사용
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return (
    <Stories>
      <ProfileImage className="profileImage">
        <ImageBorder className="image-border"></ImageBorder>
        <ProfileCanvas
          className="canvasProfileLove"
          src={user.profile_img}
        ></ProfileCanvas>
      </ProfileImage>
      <NickName>{user.user_name}</NickName>
    </Stories>
  )
}
export default UserPeed

export const Stories = styled.div`
  width: 10%;
  box-sizing: border-box;
  position: relative;
`

export const ProfileImage = styled.div`
  background-color: white;
  width: 70px;
  height: 55px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ProfileCanvas = styled.img`
  background-color: gray;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;

  //background-image: url('../stitch2.png');
  background-size: cover;
  background-position: center;
`

export const ImageBorder = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: absolute;
`
export const NickName = styled.p`
  //border: 1px solid black;
  width: 70px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
  font-size: 12px;
  text-align: center;
`
