import styled from '@emotion/styled'
import { useEffect, useRef } from 'react'

const Modal1 = ({ onClose }) => {
  const modalRef = useRef(null)
  const handleClose = () => {
    onClose?.()
  }

  // 모달창 열었을 때 외부 스크롤 방지
  useEffect(() => {
    const $body = document.querySelector('body')
    const overflow = $body.style.overflow
    $body.style.overflow = 'hidden'
    return () => {
      $body.style.overflow = overflow
    }
  }, [])
  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <openBtn onClick={handleClose}></openBtn>
        <Contents>
          <Menu>신고</Menu>
          <Menu>팔로우 취소</Menu>
          <Menu>즐겨찾기에 추가</Menu>
          <Menu>게시물로 이동</Menu>
          <Menu>공유 대상..</Menu>
          <Menu>링크 복사</Menu>
          <Menu>퍼가기</Menu>
          <Menu>이 계정 정보</Menu>
          <Button onClick={handleClose}>취소</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  )
}

export default Modal1

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`

export const ModalWrap = styled.div`
  width: 400px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const openBtn = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 20px;
  cursor: pointer;

  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`

export const Contents = styled.div`
  margin: 40px 20px;

  h1 {
    font-size: 30px;
    font-size: 600;
    margin-bottom: 50px;
  }
`

export const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: white;
  border-radius: 10px;
  color: grey;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: beige;
  }
`

export const CloseBtn = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  background-color: #ababab;
  border-radius: 10px;
  color: white;
  font-style: italic;
  font-weight: 200;
  cursor: pointer;

  &:hover {
    background-color: #fac2be;
  }
`

export const Modal = styled.div`
  text-align: center;
  margin: 50px auto;
`

export const Menu = styled.div`
  height: 40px;
  border-bottom: 1px solid grey;
  font-size: 20px;
  margin: 5px;
  text-align: center;
  color: grey;

  &:nth-child(1) {
    color: red;
  }

  &:nth-child(2) {
    color: red;
  }
`
