import styled from '@emotion/styled'

const CommentFooter = () => {
  return (
    <Footer>
      <FooterWrap>
        <FooterButtonWrap>
          <FooterButton src="heart (1).svg" />
          <FooterButton src="../balloon.svg" />
          <FooterButton src="../chat-square-heart-fill.svg" />
          <FooterButton src="../save.svg" />
        </FooterButtonWrap>
        <LikeNumber2>좋아요 n 개</LikeNumber2>
        <ModalCommentWrap>
          <IconImg src="../Icon.svg" />
          <ModalComment />
          <PostingBtn>게시</PostingBtn>
        </ModalCommentWrap>
      </FooterWrap>
    </Footer>
  )
}

export default CommentFooter

export const Footer = styled.footer`
  //border: 1px solid black;

  // margin-top: 30px;
  margin-top: auto;
`

export const FooterWrap = styled.div`
  border: 1px solid gray;
  width: 100%;
  margin: 0 auto;
  //padding: 20px 0;
`

export const FooterButtonWrap = styled.div`
  border-bottom: 1px solid gray;
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
`

export const FooterButton = styled.img`
  width: 25px;
  height: 40px;
  box-sizing: border-box;
  margin-right: 10px;
  margin-left: 3px;
  float: left;

  &:last-child {
    float: right;
  }
`
export const ModalCommentWrap = styled.div`
  border: 1px solid black;
  box-align: center;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  display: inline-flex;

  // flex-direction: column;
`

export const IconImg = styled.img`
  width: 25px;
  height: 25px;
  box-sizing: border-box;
  margin-left: 5px;
  margin-right: 10px;
  margin-top: 10px;
`
export const ModalComment = styled.textarea`
  width: 350px;
  height: 30px;
  resize: none;
  box-sizing: border-box;
  overflow: hidden;
  border: none;
  font-size: 15px;
  margin-top: 10px;
`

export const PostingBtn = styled.button`
  border: none;
  background-color: white;
  color: skyblue;
  font-size: 15px;
  width: 60px;
  height: 30px;
  margin-top: 10px;
  margin-left: 15px;
  text-align: center;
`
export const LikeNumber2 = styled.p`
  // border: 1px solid black;
  width: 100%;
  height: 30px;
  padding: 3px;
  margin: 0 auto;
  box-sizing: border-box;
  color: black;
  font-weight: bold;
  text-align: left;
`
