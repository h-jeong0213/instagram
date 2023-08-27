import styled from "@emotion/styled";
import axios from "axios";

export default function Home() {
  axios
    .get("/public/users.json")
    .then((users) => {
      console.log(users.data);
    })
    .catch((err) => {
      console.log("에러:", err);
    });
  return (
    <>
      <h1>음..?</h1>
      <h2>하이요!</h2>

      <InputTest placeholder="댓글"></InputTest>
    </>
  );
}

export const Container = styled.div``;

export const InputTest = styled.input`
  outline: none;
  border: none;
`;
