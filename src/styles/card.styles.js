import styled from '@emotion/styled'

export const StoryPeed = styled.div`
  border: 1px solid gray;
  width: 90%;
  height: 90px;
  display: flex;
  padding: 5px;
  background-color: white;

  border-radius: 5px;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  word-break: break-all;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const IpBtn = styled.p`
  font-weight: bold;
  font-size: 20px;
  width: 30px;
`

export const Stories = styled.div`
  width: 8%;
`

export const IMG = styled.img`
  //  border-radius: 50%;
  // border: 2px solid pink;
  //  padding: 2px;
  // margin-left: 4px;
  //  object-fit: cover;

  width: 60px;
  height: 60px;
  display: flex;
  border-radius: 50%;
  background: url('../stitch2.png');
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`

export const NickName = styled.p`
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
  font-size: 12px;
  text-align: center;
`

export const Card = styled.div`
  margin: 20px 140px;
  width: 60%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid gray;
`

export const CardLeft = styled.div`
  display: flex;
  align-items: center;
`

export const ImgWrap = styled.div`
  margin-right: 15px;
`

export const PeedIMG = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background: url('../stitch2.png');
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`

export const UserNickName = styled.p`
  padding-bottom: 1px;
  font-weight: bold;
`

export const ContentIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export const AllBtn = styled.i`
  font-size: 22px;
  margin-right: 10px;
`

export const Save = styled.div`
  font-size: 22px;
`

export const FooterContent = styled.div`
  padding: 0 16px 16px 16px;
`

export const FooterPTag = styled.p`
  margin-bottom: 3px;
`

export const ButtonWrap = styled.div`
  justify-content: space-between;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  padding: 5px;
`

export const TextWrap = styled.div`
  border-top: 1px solid gray;
  box-sizing: border-box;
  width: 100%;
`

export const NiceNumberWrap = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  //border: 1px solid gray;

  padding-left: 9px;
  display: flex;
  align-items: center;
`

export const ReviewWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  // border: 1px solid gray;

  padding-left: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Review = styled.div`
  width: 90%;
  box-sizing: border-box;

  display: flex;
`

export const MiddleButtonWrap = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`

export const MiddleButton = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 50px;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
`

export const SaveButton = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 25px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
`

export const HeartButton = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
`

export const MiddlePickture = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  background: url('../stitch2.png');
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`
export const MiddleText = styled.p`
  font-weight: 200;
  position: inherit;
  width: 85%;
  height: 100%;
  //  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 35px;
  margin-left: 10px;
`
export const MyNickName2 = styled.p`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  margin-right: 10px;
  box-sizing: border-box;
`

export const Comments = styled.input`
  box-sizing: border-box;
  margin-top: 9px;
  width: 70%;
  height: 40px;
  &:hover{
    
  }
`
