import styled from "@emotion/styled";

export const Container = styled.div`
  margin-top: 15px;
  width: 350px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const SignUpTitle = styled.h1`
  font-size: 17px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
`;

export const FacebookLogin = styled.button`
  width: 200px;
  text-align: center;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 7px 16px !important;
  font-size: 14px;
  background-color: rgb(0, 149, 246);
  cursor: pointer;

  &:hover {
    background-color: rgb(24, 119, 242);
  }
`;

export const LineBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: rgb(219, 219, 219);
  width: 100px;
`;

export const Input = styled.input`
  width: 200px;
  display: flex;
  padding: 9px 0 7px;
  margin-bottom: 5px;
  padding-left: 10px;
  :last-child {
    margin-bottom: 10px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpBtn = styled.button`
  margin: 16px 0;
  width: 200px;
  text-align: center;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 7px 16px !important;
  font-size: 14px;
  background-color: rgb(0, 149, 246);
  cursor: pointer;

  &:hover {
    background-color: rgb(24, 119, 242);
  }
`;

export const BigContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  position: fixed;
  overflow: hidden;
`;
