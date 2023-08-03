import styled from "@emotion/styled";
import { useState } from "react";

const ProfilPage = () => {
  let [more, serMore] = useState(false);
  return (
    <>
      <Navbar>
        <LogoBox>
          <a>
            <LogoImg src="../instagram.png"></LogoImg>
          </a>
        </LogoBox>
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
          <ProfilBox className="navImgBox"></ProfilBox>
          <NavText>프로필</NavText>
        </NavItem>

        <NavItem
          onClick={() => {
            more == true ? serMore(!true) : serMore(true);
          }}
        >
          <NavSvg className="navImgBox" src="list (1).svg"></NavSvg>
          <NavText>더 보기</NavText>
        </NavItem>
        {more == true ? (
          <MoreCard>
            <MoreCardItem>로그아웃</MoreCardItem>
          </MoreCard>
        ) : null}
      </Navbar>
    </>
  );

  function moreCard() {
    return <></>;
  }
};

export default ProfilPage;

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
  width: 233px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
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

  /* &:last-child {
    position: absolute;
    bottom: 0;
  } */
`;

export const NavSvg = styled.img`
  width: 24px;
  height: 24px;
`;

export const NavText = styled.p`
  font-size: 16px;
`;

export const ProfilBox = styled.div`
  border: 1px solid black;
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background-color: blue;
`;
