import {
  PeedContent,
  PeedHeader,
  ImageWrap,
  MyPickture,
  MyNickName,
  HamButton,
  Line1,
  StoryImage,
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
} from '../styles/storyContent.styles'
import styled from '@emotion/styled'

const StoryContent = () => {
  return (
    <PeedContent>
      <PeedHeader>
        <ImageWrap>
          <MyPickture>이미지</MyPickture>
          <MyNickName>닉네임</MyNickName>
        </ImageWrap>
        <HamButton>
          <Line1></Line1>
          <Line1></Line1>
          <Line1></Line1>
        </HamButton>
      </PeedHeader>
      <StoryImage></StoryImage>
      <ButtonWrap>
        <MiddleButtonWrap>
          <MiddleButton>하트</MiddleButton>
          <MiddleButton>댓글</MiddleButton>
          <MiddleButton>공유</MiddleButton>
        </MiddleButtonWrap>
        <SaveButton>저장</SaveButton>
      </ButtonWrap>
      <TextWrap>
        <NiceNumberWrap>
          <MiddlePickture>이미지</MiddlePickture>
          <MiddleText>ooo님 외 00명이 좋아합니다</MiddleText>
        </NiceNumberWrap>
        <ReviewWrap>
          <Review>
            <MyNickName2>닉네임</MyNickName2>
            <Comments></Comments>
          </Review>
          <HeartButton>하트</HeartButton>
        </ReviewWrap>
      </TextWrap>
    </PeedContent>
  )
}

export default StoryContent
