import styled from '@emotion/styled'
import {
  Card,
  CardTitle,
  CardLeft,
  ImgWrap,
  PeedIMG,
  UserNickName,
  IpBtn,
  ContentIMG,
  ButtonWrap,
  MiddleButtonWrap,
  MiddleButton,
  SaveButton,
  TextWrap,
  NiceNumberWrap,
  MiddlePickture,
  MiddleText,
  ReviewWrap,
  Review,
  MyNickName2,
  Comments,
  HeartButton,
} from '../styles/card.styles'
import Modal1 from './modal'
import { useState } from 'react'

const CardContainer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCommentOpen, setIsCommentOpen] = useState(false)

  const onClickButton = () => {
    setIsOpen(true)
  }

  const onCommentButton = () => {
    setIsCommentOpen(true)
  }
  return (
    <Card>
      <CardTitle>
        <CardLeft>
          <ImgWrap>
            <PeedIMG></PeedIMG>
          </ImgWrap>
          <div>
            <UserNickName>nickname</UserNickName>
          </div>
        </CardLeft>
        <Modal>
          <OpenBtn onClick={onClickButton}>+</OpenBtn>
          {isOpen && (
            <Modal1
              open={isOpen}
              onClose={() => {
                setIsOpen(false)
              }}
            />
          )}
        </Modal>
      </CardTitle>
      <div>
        <ContentIMG src="../ST.jpg" width={600} height={600}></ContentIMG>
      </div>
      <ButtonWrap>
        <MiddleButtonWrap>
          <MiddleButton src="heart (1).svg"></MiddleButton>
          <MiddleButton
            src="../balloon.svg"
            onClick={onCommentButton}
          ></MiddleButton>
          <MiddleButton src="chat-square-heart-fill.svg"></MiddleButton>
        </MiddleButtonWrap>
        <SaveButton src="../save.svg"></SaveButton>
      </ButtonWrap>
      <TextWrap>
        <NiceNumberWrap>
          <MiddlePickture></MiddlePickture>
          <MiddleText>좋아요 000개</MiddleText>
        </NiceNumberWrap>
        <ReviewWrap>
          <Review>
            <MyNickName2>닉네임</MyNickName2>
            <Comments type="text" placeholder="댓글을 작성해주세요!"></Comments>
          </Review>
          <HeartButton src="heart (1).svg"></HeartButton>
        </ReviewWrap>
      </TextWrap>
    </Card>
  )
}

export default CardContainer

export const OpenBtn = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-weight: 200;
  cursor: pointer;
  border-style: none;

  &:hover {
    color: red;
  }
`

export const Modal = styled.div`
  text-align: center;
`
