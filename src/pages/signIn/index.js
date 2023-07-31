import styled from '@emotion/styled'
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

const SignInPage = () => {
  return (
    <>
      <MainBox>
        <LeftSection>
          <PhoneImg alt="phone" src="../phon.png" />
          <Screen src="../stitch2.png" alt="screem2" />
        </LeftSection>
        <RightSection>
          <LoginPanel>
            <Logo src="../instagram.png" alt="logo" />
            <Container>
              <InputBox
                type="text"
                name="username"
                required
                placeholder="전화번호 또는 이메일"
              />
              <InputBox
                type="password"
                name="password"
                required
                placeholder="비밀번호를 입력해주세요"
              />
              <LoginButton type="submit" name="login" value="로그인" />
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
