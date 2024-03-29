import { useEffect, useState } from 'react'
import {
  MainBox,
  LeftSection,
  PhoneImg,
  Screen,
  RightSection,
  LoginPanel,
  Logo,
  Container,
  InputBox,
  LoginButton,
  Divider,
  Line,
  Facebook,
  Forgot,
  SignUpPanel,
  Signup,
} from '../../styles/signIn.styleds'
import axios from 'axios'
import { useRouter } from 'next/router'

const SignInPage = () => {
  const router = useRouter()
  const [user_idRef, setUser_idRef] = useState('')
  const [pwRef, setPwRef] = useState('')

  const handleInputId = (e) => {
    setUser_idRef(e.target.value)
  }

  const handleInputPw = (e) => {
    setPwRef(e.target.value)
  }

  const onSignInClick = (e) => {
    e.preventDefault()
    console.log(user_idRef, pwRef)
    axios
      .post('/api/login', {
        user_id: user_idRef,
        pw: pwRef,
      })
      .then((res) => {
        const userInfo = res.data.userInfo
        localStorage.setItem('user', JSON.stringify(userInfo))
        router.push('./story')
      })
      .catch((err) => {
        console.log(err)
      })

    // 어려워요....
  }

  return (
    <>
      <MainBox>
        <LeftSection>
          <Screen>
            <PhoneImg />
          </Screen>
        </LeftSection>
        <RightSection>
          <LoginPanel>
            <Logo src="../instagram.png" alt="logo" />
            <Container>
              <InputBox
                type="text"
                name="user_id"
                required
                placeholder="전화번호 또는 이메일"
                onChange={handleInputId}
                setInputPw
              />
              <InputBox
                type="password"
                name="pw"
                required
                placeholder="비밀번호를 입력해주세요"
                onChange={handleInputPw}
                setInputPw
              />
              <LoginButton
                type="submit"
                value="로그인"
                onClick={onSignInClick}
              />

              <Divider>
                <Line></Line>
                <p>OR</p>
                <Line></Line>
              </Divider>
              <Facebook>페이스북으로 로그인</Facebook>
              <Forgot>비밀번호를 잊어버리셨나요?</Forgot>
            </Container>
          </LoginPanel>
          <SignUpPanel>
            <p>계정이 없으신가요?</p>
            <Signup href="#">가입하기</Signup>
          </SignUpPanel>
        </RightSection>
      </MainBox>
    </>
  )
}

export default SignInPage
