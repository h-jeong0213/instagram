import styled from '@emotion/styled'

// Nav style 시작
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const MoreCard = styled.div`
  position: fixed;
  bottom: 70px;
  width: 266px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
  border: 1px solid black;
`

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
`

export const Navbar = styled.div`
  background-color: white;
  width: 233px;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`

export const LogoBox = styled.div`
  display: flex;
  margin: 10px;
  padding: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`

export const LogoImg = styled.img`
  width: 113px;
`

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
`

export const NavSvg = styled.img`
  width: 24px;
  height: 24px;
`

export const NavText = styled.p`
  font-size: 16px;
`

export const MiniProfilImg = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 24px;
  height: 24px;
  border-radius: 30px;
  background: url('stitch2.png');
  background-position: center;
  background-size: cover;
`

export const Alarm = styled.div`
  left: 200px;
  height: 100vh;
  padding: ${({ isOpen }) => (isOpen ? '20px' : '0px')};
  width: ${({ isOpen }) => (isOpen ? '450px' : '0px')};
  overflow: hidden;
  transition-duration: 0.4s;
  /* border: 1px solid black; */
  border-radius: 0 25px 25px 0;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 15px;
`
