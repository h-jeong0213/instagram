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
import handler from "../api/signup";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const [userIdDB, setUserIdDB] = useState([]);

  useEffect(() => {
    // 서버에서 데이터를 가져와 userIdDB를 업데이트합니다.
    axios.get("/api/login").then((res) => {
      const userIds = res.data.map((item) => item.user_id);
      setUserIdDB(userIds);
    });
  }, []);

  const router = useRouter();
  // 초기값
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [nickName, setNickName] = useState("");

  // 오류메세지
  const [idErr, setIdErr] = useState("");
  const [pwErr, setPwErr] = useState("");
  const [pwCheckErr, setPwCheckErr] = useState("");
  const [nickNameErr, setNickNameErr] = useState("");

  // 유효성검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isNickName, setIsNickName] = useState(false);

  const IdInputRef = useRef(null);
  const PwInputRef = useRef(null);
  const PwCheckInputRef = useRef(null);
  const NickNameInputRef = useRef(null);

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setId(currentId);
    const idReg = /^[a-zA-Z][0-9a-zA-Z]{4,7}$/;
    console.log(currentId);

    if (!idReg.test(currentId)) {
      setIdErr("사용이 불가능한 아이디 입니다.");
      setIsId(false);
    } else {
      setIdErr("사용 가능한 아이디 입니다.");
      setIsId(true);
    }

    const checkId = userIdDB
      .map((item) => item.trim())
      .includes(currentId.trim());

    if (checkId) {
      setIdErr("중복된 아이디 입니다.");
      setIsId(false);
    } else {
      console.log("가능!!");
      setIdErr("사용 가능한 아이디 입니다.");
      setIsId(true);
    }
  };

  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw);
    const PwReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

    if (!PwReg.test(currentPw)) {
      setPwErr("숫자,영문,특수문자를 사용하여 8자리 이상 입력해주세요");
      setIsPw(false);
    } else {
      setPwErr("안전한 비밀번호 입니다.");
      setIsPw(true);
    }
  };

  const onChangePwCheck = (e) => {
    const currentPwCheck = e.target.value;
    setPwCheck(currentPwCheck);
    if (onChangePw === onChangePwCheck) {
      setPwCheckErr("비밀번호가 일치합니다.");
    } else {
      setPwCheckErr("비밀번호가 일치하지 않습니다.");
    }
  };

  const onChangeNickName = (e) => {
    const currentNickName = e.target.value;
    setNickName(currentNickName);

    if (currentNickName.lenght > 2 || currentNickName.lenght > 5) {
      setNickNameErr("닉네임은 2글자 이상 5글자 이하로 입력해주세요");
      setIsNickName(false);
      NickNameInputRef.current.focus();
    } else {
      setNickNameErr("사용 가능한 닉네임입니다.");
      setIsNickName(true);
    }
  };

  console.log("isId:", isId);
  console.log("isPw:", isPw);
  console.log("isNickName:", isNickName);
  const onSignUpClick = () => {
    if (!isId || !isPw || !isNickName) {
      alert("모든 정보를 알맞게 입력해주세요.");
    } else {
      axios
        .post("/api/signup", {
          user_id: IdInputRef.current.value,
          pw: PwInputRef.current.value,
          user_name: NickNameInputRef.current.value,
        })
        .then((res) => {
          console.log("res.data :", res.body);
          alert("회원가입 성공!");
          router.replace("../signIn");
        })
        .catch((err) => console.log(err, "실패"));
    }
  };

  return (
    <BigContainer>
      <Container>
        <image className="logo"></image>
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
        <SignUpForm onSubmit={handler}>
          <Input
            type="text"
            name="id"
            placeholder="아이디 입력"
            onChange={onChangeId}
            ref={IdInputRef}
          ></Input>
          <p>{idErr}</p>
          <Input
            type="text"
            name="nickName"
            placeholder="닉네임"
            onChange={onChangeNickName}
            ref={NickNameInputRef}
          ></Input>
          <Input
            type="password"
            name="pw"
            placeholder="비밀번호"
            onChange={onChangePw}
            ref={PwInputRef}
          ></Input>
          <Input
            type="password"
            name="pw"
            placeholder="비밀번호확인"
            onChange={onChangePwCheck}
            ref={PwCheckInputRef}
          ></Input>

          <SignUpBtn type="submit" onClick={onSignUpClick}>
            가입
          </SignUpBtn>
          <div></div>
        </SignUpForm>
      </Container>
      <Container>
        <p>
          계정이 있으신가요?
          <a href="#" style={{ textDecoration: "none" }}>
            로그인
          </a>
        </p>
      </Container>
    </BigContainer>
  );
};

export default SignUpPage;
