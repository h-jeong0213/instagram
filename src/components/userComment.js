import styled from '@emotion/styled'

const UserComment = () => {
  return (
    <FriendProWrap2>
      <FriendImg2></FriendImg2>
      <FriendNameWrap>
        <CommentWrap2>
          <FriendName2>friendName</FriendName2>
          <UserComments>댓글댓글댓글</UserComments>
          <LikeButton src="heart (1).svg" />
        </CommentWrap2>
        <Wrap>
          <Time>00분전</Time>
          <LikeNumber>좋아요 n개</LikeNumber>
        </Wrap>
      </FriendNameWrap>
    </FriendProWrap2>
  )
}

export default UserComment

export const FriendProWrap2 = styled.div`
  //border: 1px solid pink;
  width: 450px;
  display: flex;
  margin-left: 10px;

  // justify-content: space-between;
`

export const FriendImg2 = styled.img`
  width: 35px;
  height: 35px;
  margin: 8px 10px;

  border-radius: 50%;

  background-image: url('../stitch2.png');
  background-size: cover;
  background-position: center;
`
export const FriendName2 = styled.div`
  //border: 1px solid black;
  box-sizing: border-box;
  // text-align: left;
  height: 20px;
  margin-top: 8px;
  margin-right: 5px;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 550;
`

export const FriendNameWrap = styled.div`
  // border: 1px solid black;
  box-sizing: border-box;
  width: 370px;

  // position: relative;
  // box-align: start;
`

export const Wrap = styled.div`
  //border: 1px solid black;
  box-align: center;
  width: 200px;
  font-size: 12px;
  height: 15px;
  box-sizing: border-box;
  text-align: left;
`

export const Time = styled.a`
  // border: 1px solid black;
  margin: 0 5px;
  box-sizing: border-box;
  color: gray;
`

export const LikeNumber = styled.a`
  // border: 1px solid black;
  margin: 0 5px;
  box-sizing: border-box;
  color: gray;
`

export const LikeButton = styled.img`
  // border: 1px solid black;
  width: 20px;
  margin: 10px 5px;
  //position: fixed;
  display: flex;
  overflow: hidden;
  right: 40px;

  box-sizing: border-box;

  overflow: hidden;
`

export const CommentWrap2 = styled.div`
  // border: 1px solid black;
  width: 380px;
  display: flex;
  font-size: 13px;
`

export const UserComments = styled.p`
  text-align: left;
  width: 250px;
  margin-top: 10px;
  // border: 1px solid black;
  word-wrap: break-word;
`
