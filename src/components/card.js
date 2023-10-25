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
  MiddleButton2,
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
  BackDrop,
} from '../styles/card.styles'
import Modal1 from './modal'
import { useEffect, useState } from 'react'
import CommentModal from './commentModal'

const CardContainer = (props) => {
  const { posts, users } = props
  const [isOpen, setIsOpen] = useState(false)
  const [isCommentOpen, setIsCommentOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [user, setUser] = useState([])

  const nextImage = () => {
    // 다음 이미지로 이동
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % posts.post_img.length)
  }

  const prevImage = () => {
    // 이전 이미지로 이동
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? posts.post_img.length - 1 : prevIndex - 1,
    )
  }

  const onClickButton = () => {
    setIsOpen(true)
  }

  const onCommentButton = () => {
    setIsCommentOpen(true)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 브라우저 환경인 경우에만 localStorage 사용
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [])

  return (
    <Card>
      <CardTitle>
        <CardLeft>
          <ImgWrap>
            <PeedIMG
              src={users.find((user) => user.id === posts.id)?.profile_img}
            ></PeedIMG>
          </ImgWrap>
          <div>
            <UserNickName>
              {users.find((user) => user.id === posts.id)?.user_name}
            </UserNickName>
          </div>
        </CardLeft>
        <Modal>
          <OpenButton onClick={onClickButton}>+</OpenButton>
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
      <ImgBox>
        {posts.post_img.length > 1 && (
          <ImgBtnWrap2>
            <prevBtn2 onClick={prevImage}>&lt;</prevBtn2>
            <nextBtn2 onClick={nextImage}>&gt;</nextBtn2>
          </ImgBtnWrap2>
        )}
        <ContentIMG
          key={currentImageIndex}
          src={posts.post_img[currentImageIndex]}
        />
        {/* {posts.post_img.map((imgSrc, i) => (
          <ContentIMG key={i} src={imgSrc} />
        ))} */}
      </ImgBox>
      <PoetContent>{posts.post_contents}</PoetContent>
      <ButtonWrap>
        <MiddleButtonWrap>
          <MiddleButton src="heart (1).svg"></MiddleButton>
          <Modal>
            <MiddleButton2 onClick={onCommentButton}></MiddleButton2>
            {isCommentOpen && (
              <CommentModal
                open={isCommentOpen}
                users={users}
                posts={posts}
                onClose={() => {
                  setIsCommentOpen(false)
                }}
              ></CommentModal>
            )}
          </Modal>
          <MiddleButton src="chat-square-heart-fill.svg"></MiddleButton>
        </MiddleButtonWrap>
        <SaveButton src="../save.svg"></SaveButton>
      </ButtonWrap>
      <TextWrap>
        <NiceNumberWrap>
          <MiddlePickture
            src={users.find((user) => user.id === posts.id)?.profile_img}
          ></MiddlePickture>
          <MiddleText>좋아요 000개</MiddleText>
        </NiceNumberWrap>
        <ReviewWrap>
          <Review>
            <MyNickName2>{user.user_name}</MyNickName2>
            <Comments type="text" placeholder="댓글을 작성해주세요!"></Comments>
          </Review>
          <HeartButton src="heart (1).svg"></HeartButton>
        </ReviewWrap>
      </TextWrap>
    </Card>
  )
}

export default CardContainer

export const OpenButton = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  font-weight: 200;
  cursor: pointer;
  border-style: none;
`

export const Modal = styled.div`
  text-align: center;
`

export const CommendModal = styled.div`
  text-align: center;
`

export const ImgBox = styled.div`
  display: flex;
  overflow: hidden;
`

export const ImgBtn = styled.button`
  position: absolute;
`

export const PoetContent = styled.p`
  padding: 5px;
  padding-left: 10px;
`
export const ImgBtnWrap2 = styled.div`
  // border: 1px solid black;
  width: 400px;
  height: 40px;
  z-index: 1;
  position: absolute;
  margin-top: 250px;
  color: white;
  font-size: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 420px;
`

export const prevBtn2 = styled.button`
  // align-items: center;
  position: absolute;
  z-index: 1;
`
export const nextBtn2 = styled.button`
  position: absolute;
  z-index: 1;
  //background-position: center;
`
