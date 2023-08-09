import styled from '@emotion/styled'
import StoryContent from '../../components/storyContent'

const StoryPage = () => {
  return (
    <MainContainer>
      <HeaderWrap>
        <Header>
          <Logo src="../instagram.png"></Logo>
          <SearchInput placeholder="SEARCH"></SearchInput>

          <AllBtnWrap>
            <BtnWrap>
              <Btn src="house-heart-fill.svg"></Btn>
            </BtnWrap>
            <BtnWrap>
              <Btn src="chat-square-heart-fill.svg"></Btn>
            </BtnWrap>
            <BtnWrap>
              <Btn src="plus-square.svg"></Btn>
            </BtnWrap>
            <BtnWrap>
              <Btn src="heart (1).svg"></Btn>
            </BtnWrap>
            <BtnWrap>
              <Btn src="search-heart-fill.svg"></Btn>
            </BtnWrap>
            <BtnWrap>
              <ImageBorder>
                <ProfileImage></ProfileImage>
              </ImageBorder>
            </BtnWrap>
          </AllBtnWrap>
        </Header>
      </HeaderWrap>
      <SectionWrap>
        <LeftSection>
          <StoryPeed>
            <Stories>
              <a href="#">
                <IMG></IMG>
              </a>
              <NickName>이름1</NickName>
            </Stories>
          </StoryPeed>
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

              <IpBtn>...</IpBtn>
            </CardTitle>
            <div>
              <ContentIMG src="../ST.jpg" width={600} height={600}></ContentIMG>
            </div>
            <ButtonWrap>
              <MiddleButtonWrap>
                <MiddleButton src="heart (1).svg"></MiddleButton>
                <MiddleButton src="../balloon.svg"></MiddleButton>
                <MiddleButton src="chat-square-heart-fill.svg"></MiddleButton>
              </MiddleButtonWrap>
              <SaveButton src="../save.svg"></SaveButton>
            </ButtonWrap>
            <TextWrap>
              <NiceNumberWrap>
                <MiddlePickture></MiddlePickture>
                <MiddleText>ooo님 외 00명이 좋아합니다</MiddleText>
              </NiceNumberWrap>
              <ReviewWrap>
                <Review>
                  <MyNickName2>닉네임</MyNickName2>
                  <Comments
                    type="text"
                    placeholder="댓글을 작성해주세요!"
                  ></Comments>
                </Review>
                <HeartButton src="heart (1).svg"></HeartButton>
              </ReviewWrap>
            </TextWrap>
          </Card>
        </LeftSection>
        <section></section>
      </SectionWrap>
    </MainContainer>
  )
}

export default StoryPage

export const MainContainer = styled.div`
  width: 100%;
`

export const HeaderWrap = styled.header`
  border-bottom: 1px solid gray;
  width: 80%;
  height: 8%;
  margin-left: 8%;
`

export const Header = styled.div`
  width: 100%;
  height: 100%;
`

export const Logo = styled.img`
  width: 10%;
  height: 80px;
  margin-top: 5px;
  margin-left: 10%;
`

export const SearchInput = styled.input`
  border-radius: 5px;
  background-color: whitesmoke;
  text-align: center;
  width: 18%;
  height: 35px;
  display: inline-block;
  position: relative;
  left: 20%;
  box-sizing: border-box;
  bottom: 32px;
`

export const AllBtnWrap = styled.div`
  width: 25%;

  display: inline-flex;
  position: relative;
  float: right;

  @media screen and (max-width: 768px) {
  }
`

export const BtnWrap = styled.div`
  margin-left: 10px;
  height: 50px;
  margin-top: 20px;
  right: 10px;
`

export const Btn = styled.img`
  gap: 15px;
  width: 24px;
  height: 24px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
`

export const ProfileImage = styled.div`
  background-color: gray;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  bottom: 1.5px;
  left: 2px;

  background-image: url('../stitch2.png');
  background-size: cover;
  background-position: center;
`
export const ImageBorder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  bottom: 1.5px;

  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: absolute;
`

export const SectionWrap = styled.div`
  position: absolute;
  //border: 1px solid black;
  width: 1550px;
  left: 9%;
`

export const LeftSection = styled.section`
  width: 70%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`

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
  margin: 20px 100px;
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
  position: inherit;
  width: 85%;
  height: 100%;
  //  margin: 10px;
  font-size: 18px;
  font-weight: 500;
  border: 1px solid black;
  margin-top: 30px;
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
`
