import pool from "../../../db";

const handler = async (req, res) => {
  console.log(process.env.DB_HOST);

  if (req.method === "GET") {
    let conn = null;
    try {
      let conn = await pool.getConnection();
      let [result] = await conn.query("SELECT * FROM posts");

      // console.log(result)
      res.status(200).json(result);
      return;
    } catch (err) {
      res.status(500).json({ message: "서버 오류 발생" });
    } finally {
      if (conn !== null) conn.release();
    }
  }
  if (req.method === "POST") {
    let conn = null;
    try {
      let sql = `
        INSERT INTO posts
        (user_name, user_id, pw, profile_img)
        VALUES
        (?, ?, ?, ?)
    `;
      conn = await pool.getConnection();
      const [result] = await conn.query(sql, [
        req.body.user_name,
        req.body.user_id,
        req.body.pw,
        req.body.profile_img,
      ]);
      //  console.log(result.insertId)
      let [result2] = await conn.query(
        "SELECT * FROM users WHERE user_id = ?",
        result.insertId
      );
      //  console.log(result2)
      res.status(201).josn(result2);
      return;
    } catch (err) {
      res.status(500).json({ message: "서버오류 발생" });
      console.log(err);
      return;
    } finally {
      if (conn !== null) conn.release();
    }
  }

  res.status(405).json({ message: "허용되지 않는 메소드 사용" });
};
export default handler;
