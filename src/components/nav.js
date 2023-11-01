import { useContext, useEffect, useState } from 'react'
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
  Alarm,
} from '../styles/nav.styles'
import { Router, useRouter } from 'next/router'
import { UserContext } from '../pages/api/util/UserContext'
import { useMoveToPage } from './hook/useMoveToPage'

const NavMenu = () => {
  //const { users, accessToken, setUsers, setAccessToken } = useContext(
  //  UserContext,
  // )

  let [alarm, setAlarm] = useState(false)
  let [more, setMore] = useState(false)
  const [user, setUser] = useState([])
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 브라우저 환경인 경우에만 localStorage 사용
      setUser(JSON.parse(localStorage.getItem('user'))) //user
    }
  }, [])

  const { onClickMoveToPage } = useMoveToPage()

  const onLogoutClick = () => {
    localStorage.removeItem('user')
    setAccessToken('')
    onClickMoveToPage('/')
  }

  return (
    <>
      <Navbar>
        <LogoBox>
          <a>
            <LogoImg
              src="../instagram.png"
              onClick={onClickMoveToPage('/story')}
            ></LogoImg>
          </a>
        </LogoBox>
        <NavList>
          <NavItem>
            <NavSvg className="navImgBox" src="house-heart-fill.svg"></NavSvg>
            <NavText
              onClick={() => {
                router.push('./story')
              }}
            >
              홈
            </NavText>
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
          <NavItem
            onClick={() => {
              alarm == true ? setAlarm(!true) : setAlarm(true)
            }}
          >
            <NavSvg className="navImgBox" src="heart (1).svg"></NavSvg>
            <NavText>알림</NavText>
          </NavItem>
          <NavItem>
            <NavSvg className="navImgBox" src="plus-square.svg"></NavSvg>
            <NavText>만들기</NavText>
          </NavItem>
          <NavItem
            onClick={() => {
              router.push('./profil')
            }}
          >
            <MiniProfilImg
              src={user.profile_img}
              className="navImgBox"
            ></MiniProfilImg>
            <NavText>{user.user_name}</NavText>
          </NavItem>
          {more == true ? (
            <MoreCard>
              <MoreCardItem onClick={onClickMoveToPage('/signIn')}>
                {user ? onLogoutClick : onClickMoveToPage('/signIn')}
                {user ? '로그아웃' : '로그인'}
                {/* 로그아웃 */}
              </MoreCardItem>
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
      <Alarm isOpen={alarm}>
        <h4>알림</h4>
        <div>
          <h5>이번 달</h5>
        </div>
        <div>
          <h5>이전 활동</h5>
        </div>
      </Alarm>
    </>
  )
}

export default NavMenu
