import styled from "@emotion/styled";
import { useState } from "react";

const ProfilPage = () => {
  let [more, serMore] = useState(false);
  let [tabs, setTabs] = useState(2);

  return (
    <Container>
      {/* Nav 구간 */}
      <Navbar>
        <LogoBox>
          <a>
            <LogoImg src="../instagram.png"></LogoImg>
          </a>
        </LogoBox>
        <NavList>
          <NavItem>
            <NavSvg className="navImgBox" src="house-heart-fill.svg"></NavSvg>
            <NavText>홈</NavText>
          </NavItem>
          <NavItem>
            <NavSvg className="navImgBox" src="search-heart-fill.svg"></NavSvg>
            <NavText>검색</NavText>
          </NavItem>
          <NavItem>
            <NavSvg className="navImgBox" src="compass.svg"></NavSvg>
            <NavText>탐색</NavText>
          </NavItem>
          <NavItem>
            <NavSvg
              className="navImgBox"
              src="chat-square-heart-fill.svg"
            ></NavSvg>
            <NavText>메세지</NavText>
          </NavItem>
          <NavItem>
            <NavSvg className="navImgBox" src="heart (1).svg"></NavSvg>
            <NavText>알림</NavText>
          </NavItem>
          <NavItem>
            <NavSvg className="navImgBox" src="plus-square.svg"></NavSvg>
            <NavText>만들기</NavText>
          </NavItem>
          <NavItem>
            <MiniProfilImg className="navImgBox"></MiniProfilImg>
            <NavText>프로필</NavText>
          </NavItem>
          {more == true ? (
            <MoreCard>
              <MoreCardItem>로그아웃</MoreCardItem>
            </MoreCard>
          ) : null}
        </NavList>
        <NavItem
          className="moreBox"
          onClick={() => {
            more == true ? serMore(!true) : serMore(true);
          }}
        >
          <NavSvg className="navImgBox" src="list (1).svg"></NavSvg>
          <NavText>더 보기</NavText>
        </NavItem>
      </Navbar>
      {/* Nav 끝 */}
      {/* Profil 시작 */}
      {/* Profil 해더 */}
      <ProfilContainer>
        <ProfilHeader>
          <ProfilImgBox>
            <ProfilImg></ProfilImg>
          </ProfilImgBox>

          <ProfilBox>
            <ProfilMainBox>
              <UserName>username</UserName>
              <ProfilBtn>
                <a>프로필 편집</a>
              </ProfilBtn>
              <ProfilBtn>
                <a>보관된 스토리 보기</a>
              </ProfilBtn>
              <div>설정</div>
            </ProfilMainBox>
            <ProfilMainBox>
              <ContentCount>게시물 00</ContentCount>
              <UserFriends>팔로워 00</UserFriends>
              <UserFriends>팔로우 00</UserFriends>
            </ProfilMainBox>
            <ProfilMainBox>
              <div>usernickneme</div>
            </ProfilMainBox>
          </ProfilBox>
        </ProfilHeader>
        {/* Profil 해더 끝*/}
        <StoryHighlight>
          <NewHighlight>
            <NewHighlightBtn src="plus.svg"></NewHighlightBtn>
            <NewHighlightTxt>신규</NewHighlightTxt>
          </NewHighlight>
        </StoryHighlight>
        <ContentContiner>
          <ContentList defaultActiveKey="link0">
            <ContentListItem
              eventKey="link0"
              onClick={() => {
                setTabs(0);
              }}
            >
              <ContentListItemImg src="heart (1).svg" />
              게시물
            </ContentListItem>
            <ContentListItem
              eventKey="link1"
              onClick={() => {
                setTabs(1);
              }}
            >
              <ContentListItemImg src="heart (1).svg" />
              릴스
            </ContentListItem>
            <ContentListItem
              eventKey="link2"
              onClick={() => {
                setTabs(2);
              }}
            >
              <ContentListItemImg src="heart (1).svg" />
              저장 됨
            </ContentListItem>
            <ContentListItem
              eventKey="link3"
              onClick={() => {
                setTabs(3);
              }}
            >
              <ContentListItemImg src="heart (1).svg" />
              태그 됨
            </ContentListItem>
          </ContentList>
          <TabContent tabs={tabs} />
        </ContentContiner>
      </ProfilContainer>
    </Container>
  );
};
function TabContent({ tabs }) {
  return [
    <UserContentInfo>게시물 내용</UserContentInfo>,
    <UserContentInfo>릴스 내용</UserContentInfo>,
    <UserContentInfo>저장 됨 내용</UserContentInfo>,
    <UserContentInfo>태그 됨 내용</UserContentInfo>,
  ][tabs];
}

export default ProfilPage;
// 전체 Container

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Profil main Content

// Prifil Header 시작
export const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfilHeader = styled.div`
  display: flex;
  width: 935px;
  padding: 30px 20px 0;
  margin-bottom: 44px;
`;

export const ProfilImgBox = styled.div`
  width: 291px;
  height: 150px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
`;

export const ProfilImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: url("stitch2.png");
  background-position: center;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
  border: 1px solid rgba(0, 0, 0, 0.25);
`;

export const ProfilBox = styled.div`
  height: 150px;
`;

export const ProfilMainBox = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  gap: 15px;
`;

export const UserName = styled.h2`
  font-size: 20px;
  font-weight: normal;
  &:hover {
    cursor: pointer;
  }
`;

export const ProfilBtn = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding: 5px 13px;
  border-radius: 8px;
  background-color: #f3e8ff;

  &:hover {
    cursor: pointer;
    background-color: #fde5ec;
  }
`;

export const ContentCount = styled.div``;

export const UserFriends = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

// Profil Header 끝

// Profil NewStory 시작

export const StoryHighlight = styled.div`
  width: 935px;
  height: 130px;
  margin-bottom: 44px;
`;

export const NewHighlight = styled.div`
  width: 115px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const NewHighlightBtn = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 87px;
  height: 87px;
  border-radius: 50%;
  background-color: #f3e8ff;
`;

export const NewHighlightTxt = styled.p`
  font-size: 13px;
  font-weight: bold;
  margin: 10px 0;
`;

// Profil NewStory 끝

// UserContent 시작
export const ContentContiner = styled.div`
  width: 935px;
  height: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ContentList = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  margin-right: 30px;
  height: 100%;
  font-size: 13px;
  font-weight: bold;
  color: gray;

  &:hover {
    cursor: pointer;
  }

  &:active {
    border-top: 1px solid black;
    color: black;
  }
`;
export const ContentListItemImg = styled.img`
  width: 13px;
  height: 13px;
`;
export const UserContentInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
// Nav style 시작

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MoreCard = styled.div`
  position: fixed;
  bottom: 55px;
  width: 266px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid black;
`;

export const MoreCardItem = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0px 10px;
  border-radius: 10px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #fde5ec;
  }
`;

export const Navbar = styled.div`
  background-color: white;
  width: 233px;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;

export const LogoBox = styled.div`
  display: flex;
  margin: 10px;
  padding: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 113px;
`;

export const NavItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px;
  padding: 0px 10px;
  border-radius: 10px;
  transition: all 0.5s;
  &:hover {
    cursor: pointer;
    background-color: #fde5ec;
  }
  &:hover .navImgBox {
    width: 26px;
    height: 26px;
  }
`;

export const NavSvg = styled.img`
  width: 24px;
  height: 24px;
`;

export const NavText = styled.p`
  font-size: 16px;
`;

export const MiniProfilImg = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background: url("stitch2.png");
  background-position: center;
  background-size: cover;
`;

// Nav style 끝
