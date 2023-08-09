import { useState } from 'react'
import {
  Navbar,
  LogoBox,
  LogoImg,
  NavList,
  NavItem,
  NavSvg,
  NavText,
  MiniProfilImg,
  MoreCard,
  MoreCardItem,
} from '../styles/nav.styles'

const NavMenu = () => {
  let [more, setMore] = useState(false)
  return (
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
          more == true ? setMore(!true) : setMore(true)
        }}
      >
        <NavSvg className="navImgBox" src="list (1).svg"></NavSvg>
        <NavText>더 보기</NavText>
      </NavItem>
    </Navbar>
  )
}

export default NavMenu