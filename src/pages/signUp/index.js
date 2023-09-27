import axios from "axios";
import {
  BigContainer,
  Container,
  FacebookLogin,
  Input,
  Line,
  LineBox,
  SignUpBtn,
  SignUpForm,
  SignUpTitle,
} from "../../styles/signup.styles";
import { useEffect } from "react";

const SignUpPage = () => {
  return (
    <BigContainer>
      <Container>
        {/* <image className="logo">logo</image> */}
        <div>
          <SignUpTitle>
            친구들의 사진과 동영상을 보려면 <br />
            가입하세요
          </SignUpTitle>
        </div>
        <div>
          <FacebookLogin>Facebook으로 로그인</FacebookLogin>
        </div>
        <LineBox>
          <Line></Line>
          <p>또는</p>
          <Line></Line>
        </LineBox>
        <SignUpForm>
          <Input type="email" name="id" placeholder="이메일 주소"></Input>
          <Input type="text" name="nickName" placeholder="이름"></Input>
          <Input type="text" name="userName" placeholder="사용자 이름"></Input>
          <Input type="password" name="pw" placeholder="비밀번호"></Input>
          <SignUpBtn type="submit"> 가입 </SignUpBtn>
          <div></div>
        </SignUpForm>
      </Container>
      <Container>
        <p>
          계정이 있으신가요?{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            로그인
          </a>
        </p>
      </Container>
    </BigContainer>
  );
};

export default SignUpPage;
