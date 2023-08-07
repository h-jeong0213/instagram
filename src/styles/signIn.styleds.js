import styled from '@emotion/styled'

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`

export const LeftSection = styled.section`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: 15px;
`
export const PhoneImg = styled.div`
  width: 253px;
  height: 536px;
  position: relative;
  margin: 16px;
  border-radius: 33px;
  transform: translateX(100px);
  transform: translateY(15px);
  background: no-repeat 50% 50% / cover;
  animation: fade 15s infinite;
  z-index: 1;

  @keyframes fade {
    0% {
      background-image: url('../../ST.jpg');
    }
    17% {
      background-image: url('../../ST.jpg');
    }
    34% {
      background-image: url('../../mm.png');
    }
    51% {
      background-image: url('../../mm.png');
    }

    68% {
      background-image: url('../../ST.jpg');
    }
    85% {
      background-image: url('../../ST.jpg');
    }
    100% {
      background-image: url('../../ST.jpg');
    }
  }
`

export const Screen = styled.div`
  width: 278px;
  height: 568px;
  border-radius: 35px;
  background-image: url('../iphon.png');
  background-size: cover;
  position: relative;
  z-index: 2;
`

export const RightSection = styled.section`
  margin-left: 15px;
  margin-right: auto;
`

export const LoginPanel = styled.div`
  width: 350px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 20px 40px;
  margin: 5px 0;
  display: flex;

  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 65%;
  margin-top: 20px;
  margin-bottom: 30px;
`

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputBox = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fafafa;
  border: 1px solid gray;
  border-radius: 2px;

  &::placeholder {
    color: #8a8a8a;
    font-size: 12px;
  }

  &:focus {
    outline: none;
    border: 1px solid #8a8a8a;
  }
`

export const LoginButton = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 7px 0;
  background-color: #b2dffc;
  color: #fff;
  border-radius: 5px;
  border: none;
  font-size: 14px;
`

export const Divider = styled.div`
  display: flex;
  width: 100%;
  font-size: 12px;
  color: #8a8a8a;
  font-weight: bold;
  gap: 20px;
  align-items: center;
`

export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: #8a8a8a;
`

export const Facebook = styled.a`
  margin: 20px 0;
  color: blue;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;

  &::before {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin-right: 5px;
    font-size: 14px;
  }
`

export const Forgot = styled.a`
  color: skyblue;
  text-decoration: none;
  font-size: 12px;
`
export const SignUpPanel = styled.div`
  width: 350px;
  background-color: #fff;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 20px 40px;
  margin: 5px 0;
  display: flex;

  justify-content: center;
  gap: 5px;
  font-size: 14px;
`

export const Signup = styled.a`
  color: blue;
  margin-top: 13px;
  text-decoration: none;
  font-weight: 600;
`
