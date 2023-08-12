import {
  FriendProWrap,
  FriendImg,
  FriendName,
  FollowBtn,
} from '../styles/FriendPro.styles'

const FriendPro = () => {
  return (
    <FriendProWrap>
      <FriendImg></FriendImg>
      <FriendName>friendName</FriendName>
      <FollowBtn>
        <a>팔로우</a>
      </FollowBtn>
    </FriendProWrap>
  )
}

export default FriendPro
