import styled from "@emotion/styled";
import NavMenu from "../../components/nav";
import CardContainer from "../../components/card";
import FriendPro from "../../components/FriendPro";

const StoryPage = () => {
  return (
    <Container>
      {/* Nav 구간 */}
      <NavMenu></NavMenu>
      <MainContainer>
        <LeftContainer>
          <StoryPeed>
            <Stories>
              <ProfileImage className="profileImage">
                <ImageBorder className="image-border"></ImageBorder>
                <ProfileCanvas className="canvasProfileLove"></ProfileCanvas>
              </ProfileImage>
              <NickName>이름1</NickName>
            </Stories>
          </StoryPeed>
          <CardContainer />
        </LeftContainer>
        <RightContainer>
          <SideMyPro>
            <MyImg></MyImg>
            <MyNickName>nickname</MyNickName>
            <ChangeBtn>
              <a>전환</a>
            </ChangeBtn>
          </SideMyPro>
          <RecommendWrap>
            <Recommend>회원님을 위한 추천</Recommend>
            <AllViewBtn>
              <a>모두 보기</a>
            </AllViewBtn>
          </RecommendWrap>
          <FriendPro></FriendPro>
        </RightContainer>
      </MainContainer>
    </Container>
  );
};

export default StoryPage;
// 전체 Container

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const MainContainer = styled.div`
  /* margin-left: 150px; */
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: center;
`;

export const LeftContainer = styled.section`
  /* position: absolute; */
  // border: 1px solid black;
  /* position: fixed; */
  box-sizing: border-box;
  width: 1000px;
  align-items: center;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StoryPeed = styled.div`
  border: 1px solid gray;
  width: 900px;
  height: 90px;
  margin-left: 5px;
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
`;

export const ProfileImage = styled.div`
  background-color: white;
  width: 64px;
  height: 64px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProfileCanvas = styled.div`
  background-color: gray;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;

  background-image: url("../stitch2.png");
  background-size: cover;
  background-position: center;
`;

export const ProfileName = styled.a`
  background-color: white;
  width: 64px;
  height: 16px;
  font-size: 8px;
  text-align: center;
  margin-left: 15px;
`;
export const ImageBorder = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, red 0%, orange 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  position: absolute;
`;

export const IpBtn = styled.p`
  font-weight: bold;
  font-size: 20px;
  width: 30px;
`;

export const Stories = styled.div`
  width: 8%;
`;

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
  background: url("../stitch2.png");
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`;

export const NickName = styled.p`
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
  font-size: 12px;
  text-align: center;
`;

export const Card = styled.div`
  margin: 20px 100px;
  width: 60%;
  background-color: white;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-bottom: 1px solid gray;
`;

export const CardLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgWrap = styled.div`
  margin-right: 15px;
`;

export const PeedIMG = styled.img`
  width: 40px;
  height: 40px;
  display: flex;
  border-radius: 50%;
  background: url("../stitch2.png");
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`;

export const UserNickName = styled.p`
  padding-bottom: 1px;
  font-weight: bold;
`;

export const ContentIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const AllBtn = styled.i`
  font-size: 22px;
  margin-right: 10px;
`;

export const Save = styled.div`
  font-size: 22px;
`;

export const FooterContent = styled.div`
  padding: 0 16px 16px 16px;
`;

export const FooterPTag = styled.p`
  margin-bottom: 3px;
`;

export const ButtonWrap = styled.div`
  justify-content: space-between;
  display: flex;
  height: 50px;
  box-sizing: border-box;
  padding: 5px;
`;

export const TextWrap = styled.div`
  border-top: 1px solid gray;
  box-sizing: border-box;
  width: 100%;
`;

export const NiceNumberWrap = styled.div`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  //border: 1px solid gray;

  padding-left: 9px;
  display: flex;
  align-items: center;
`;

export const ReviewWrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  // border: 1px solid gray;

  padding-left: 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Review = styled.div`
  width: 90%;
  box-sizing: border-box;

  display: flex;
`;

export const MiddleButtonWrap = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
`;

export const MiddleButton = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 50px;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
`;

export const SaveButton = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 25px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
`;

export const HeartButton = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: inline-block;
  text-align: center;
  overflow: hidden;
`;

export const MiddlePickture = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  border-radius: 50%;
  background: url("../stitch2.png");
  background-position: center;
  background-size: cover;
  border: 3px solid pink;
`;
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
`;
export const MyNickName2 = styled.p`
  margin-left: 10px;
  font-size: 15px;
  font-weight: 700;
  height: 30px;
  margin-right: 10px;
  box-sizing: border-box;
`;

export const Comments = styled.input`
  box-sizing: border-box;
  margin-top: 9px;
  width: 70%;
  height: 40px;
`;

export const RightContainer = styled.section`
  border: 1px solid gray;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  /* position: absolute; */
  right: 100px;
  //left: 100px;
  top: 100px;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1270px) {
    display: none;
  }
`;

export const SideMyPro = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 15%;
  box-sizing: border-box;
`;
export const MyImg = styled.img`
  float: left;
  display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: url("stitch2.png");
  background-position: center;
  margin: 5px;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const MyNickName = styled.div`
  display: inline-block;
  margin-left: 7px;
  margin-top: 22px;
  font-size: 20px;
  float: left;
  width: 70%;
  height: 40px;
  font-weight: 500;
`;

export const ChangeBtn = styled.div`
  display: inline-block;
  text-align: center;
  float: left;
  margin-top: 24px;
  width: 40px;
  height: 30px;
  // border: 1px solid black;
  color: skyblue;
  font-weight: bold;

  a {
    &:hover {
      color: blue;
    }
  }
`;

export const RecommendWrap = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 8%;
  box-sizing: border-box;
  margin-top: 3px;
`;
export const Recommend = styled.div`
  //border: 1px solid black;
  display: inline-block;
  box-sizing: border-box;
  width: 300px;
  height: 95%;
  padding-left: 4px;
  margin-top: 3px;
  font-size: 18px;
  font-weight: bold;
  color: grey;
  float: left;
`;

export const AllViewBtn = styled.div`
  // border: 1px solid black;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  margin-left: 15px;
  margin-top: 3px;
  width: 75px;
  height: 95%;
  float: right;

  a {
    text-align: center;
    color: skyblue;
    font-weight: bold;
    &:hover {
      color: black;
    }
  }
`;
