import pool from "../../../db";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handler = async (req, res) => {
  const { user_id, pw } = req.body;
  if (req.method === "POST") {
    console.log("req =", req.body);
    console.log("POST왔어요!");

    let conn = null;
    try {
      conn = await pool.getConnection();
      let [result] = await conn.query(
        "SELECT * FROM users WHERE user_id=?",
        user_id
      );
      console.log(result[0]);
      console.log("try왔어요!");
      if (result[0] == undefined) {
        // 해당 아이디가 존재하지 않음
        console.log("if왔어요");
        res.status(401).json({ message: "유효하지 않은 아이디 입니다" });
        return;
      }
      // pw는 로그인 할 때 입력한 암호화되지 않은 비밀번호
      // result[0].pw 암호화된 비밀번호
      // let passwordMatch = (pw, result[0].pw);

      if (pw !== result[0].pw) {
        // 이메일은 맞지만 비밀번호가 틀렸을 경우
        console.log("pw왔어요");
        console.log(pw, result[0].pw);
        console.log(passwordMatch);
        res.status(401).json({ message: "유효하지 않은 비밀번호 입니다" });
        return;
      }

      // 이메일 비밀번호 모두 성공
      const accessToken = jwt.sign(
        { id: result[0].id, user_name: result[0].user_name },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      console.log(accessToken);
      console.log("토큰 왔어요");

      res.status(200).json({ message: "로그인성공", accessToken: accessToken });
    } catch (err) {
      console.log(err);
      console.log(process.env.JWT_SECRET);
      res.status(500).json(err);
    } finally {
      console.log("파이널리 왔어요");
      if (conn !== null) conn.release();
    }

    return;
  }
  res.status(405).json({ message: "허용되지 않은 요청 메소드" });
};

export default handler;
