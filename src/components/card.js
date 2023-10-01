import styled from "@emotion/styled";
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
} from "../styles/card.styles";
import Modal1 from "./modal";
import { useState } from "react";
import CommentModal from "./commentModal";

const CardContainer = (props) => {
  const { posts, users } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const onCommentButton = () => {
    setIsCommentOpen(true);
  };

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
          <OpenBtn onClick={onClickButton}>+</OpenBtn>
          {isOpen && (
            <Modal1
              open={isOpen}
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
        </Modal>
      </CardTitle>
      <ImgBox>
        {posts.post_img.map((imgSrc, i) => (
          <ContentIMG key={i} src={imgSrc} />
        ))}
      </ImgBox>
      <ButtonWrap>
        <MiddleButtonWrap>
          <MiddleButton src="heart (1).svg"></MiddleButton>
          <Modal>
            <MiddleButton2 onClick={onCommentButton}></MiddleButton2>
            {isCommentOpen && (
              <CommentModal
                open={isCommentOpen}
                onClose={() => {
                  setIsCommentOpen(false);
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
            <MyNickName2>
              {users.find((user) => user.id === posts.id)?.user_name}
            </MyNickName2>
            <Comments type="text" placeholder="댓글을 작성해주세요!"></Comments>
          </Review>
          <HeartButton src="heart (1).svg"></HeartButton>
        </ReviewWrap>
      </TextWrap>
    </Card>
  );
};

export default CardContainer;

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
`;

export const Modal = styled.div`
  text-align: center;
`;

export const CommendModal = styled.div`
  text-align: center;
`;

export const ImgBox = styled.div`
  display: flex;
`;
