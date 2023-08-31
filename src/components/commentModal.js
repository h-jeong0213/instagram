import styled from "@emotion/styled";
import { useRef, useState } from "react";
import Modal1 from "./modal";
import UserComment from "./userComment";
import CommentFooter from "./CommentFooter";

const CommentModal = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const handleClose = () => {
    onClose?.();
  };
  const onClickButton = () => {
    setIsOpen(true);
  };

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <openBtn onClick={handleClose}></openBtn>
        <Contents>
          <CommentImgWrap>
            <StoryImg>이미지 넣을 공간</StoryImg>
            <CommentWrap>
              <MyComment>
                <ProfileImage2 className="profileImage">
                  <ImageBorder2 className="image-border"></ImageBorder2>
                  <ProfileCanvas2 className="canvasProfileLove"></ProfileCanvas2>
                </ProfileImage2>
                <NickNameWrap>
                  <NickName>my nickname</NickName>
                </NickNameWrap>
                <Modal>
                  <OpenBtn2 onClick={onClickButton}>+</OpenBtn2>
                  {isOpen && (
                    <Modal1
                      open={isOpen}
                      onClose={() => {
                        setIsOpen(false);
                      }}
                    />
                  )}
                </Modal>
              </MyComment>
              <UserCommentWrap>
                <UserComment></UserComment>
                <UserComment></UserComment>
              </UserCommentWrap>
              <CommentFooter />
            </CommentWrap>
          </CommentImgWrap>
          <Button onClick={handleClose}>취소</Button>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

export default CommentModal;

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
`;

export const ModalWrap = styled.div`
  width: 1200px;
  height: fit-content;
  // border-radius: 15px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

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
`;

export const Contents = styled.div`
  margin: 5px;

  h1 {
    font-size: 30px;
    font-size: 600;
    margin-bottom: 50px;
  }
`;

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
`;

export const Modal = styled.div`
  text-align: center;
  margin: 50px auto;
`;
export const CommentImgWrap = styled.div`
  display: flex;
`;
export const StoryImg = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  width: 500px;
  height: 600px;
  display: flex;
  flex: 3;
  position: relative;
`;
export const CommentWrap = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 600px;
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const MyComment = styled.div`
  border-bottom: 1px solid gray;
  margin-left: 10px;
  display: flex;
  box-sizing: border-box;
  height: 70px;
  width: 95%;
`;

export const ProfileImage2 = styled.div`
  background-color: white;
  width: 65px;
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileCanvas2 = styled.div`
  background-color: gray;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;

  background-image: url("../stitch2.png");
  background-size: cover;
  background-position: center;
`;

export const ImageBorder2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: absolute;
`;

export const NickNameWrap = styled.div`
  display: flex;
`;
export const NickName = styled.p`
  height: 40px;
  margin-left: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: 550;
`;
export const OpenBtn2 = styled.button`
  border: 1px solid black;
  position: fixed;
  top: 30px;
  right: 40px;
  border-style: none;
  border-radius: 3px;

  font-size: 14px;
  cursor: pointer;
  // border-style: none;

  &:hover {
    color: red;
  }
`;

export const UserCommentWrap = styled.div`
  // border: 1px solid black;
  overflow-x: hidden;
  overflow-y: scroll;
  //overflow: scroll;
  width: 470px;
  height: 100%;

  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
