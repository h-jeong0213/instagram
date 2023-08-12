import styled from '@emotion/styled'

export const FriendProWrap = styled.div`
  //border: 1px solid pink;
  width: 100%;
  height: 50px;
  display: flex;
`
export const FriendImg = styled.img`
  float: left;
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url('stitch2.png');
  background-position: center;
  margin: 5px;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  border: 1px solid rgba(0, 0, 0, 0.25);
`

export const FriendName = styled.div`
  //border: 1px solid black;
  display: inline-block;
  margin-left: 7px;
  margin-top: 10px;
  font-size: 18px;
  float: left;
  width: 270px;
  height: 40px;
  font-weight: 500;
`

export const FollowBtn = styled.div`
  display: inline-block;
  text-align: center;
  float: left;
  margin-top: 15px;
  width: 70px;
  height: 30px;
  // border: 1px solid black;
  color: skyblue;
  font-weight: bold;

  a {
    &:hover {
      color: black;
    }
  }
`
