import styled from "@emotion/styled";
import { useState } from "react";

const ProfilPage = () => {
  let [more, serMore] = useState(false);
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
              <div>게시물 00</div>
              <div>팔로워 00</div>
              <div>팔로우 00</div>
            </ProfilMainBox>
            <ProfilMainBox>
              <div>usernickneme</div>
            </ProfilMainBox>
          </ProfilBox>
        </ProfilHeader>
      </ProfilContainer>
    </Container>
  );
};

export default ProfilPage;
// 전체 Container

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: hidden;
`;

// Profil main Content

export const ProfilContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* justify-content: center; */
`;

export const ProfilHeader = styled.div`
  display: flex;
  width: 935px;
  padding: 30px 20px 0;
  /* border: 1px solid violet; */
`;

export const ProfilImgBox = styled.div`
  width: 291px;
  height: 150px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
`;

export const ProfilImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
  border: 1px solid black;
`;

export const ProfilBox = styled.div`
  height: 150px;
  /* border: 1px solid blue; */
`;

export const ProfilMainBox = styled.div`
  display: flex;
  /* justify-content: center; */
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
  border-right: 1px solid black;

  &:last-of-type {
    justify-content: flex-end;
  }
  .moreBox {
    /* justify-content: flex-end; */
  }
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
  border: 1px solid black;
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background-color: blue;
`;

// Nav style 끝
