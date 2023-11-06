import { useEffect, useState } from 'react'
import {
  FriendProWrap,
  FriendImg,
  FriendName,
  FollowBtn,
} from '../styles/FriendPro.styles'
import axios from 'axios'

const FriendPro = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

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
    <FriendProWrap>
      <FriendImg src={user.profile_img}></FriendImg>
      <FriendName>{user.user_name}</FriendName>
      <FollowBtn>
        <a>팔로우</a>
      </FollowBtn>
    </FriendProWrap>
  )
}

export default FriendPro
