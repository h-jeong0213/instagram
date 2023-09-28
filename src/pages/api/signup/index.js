import pool from "../../../db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    let conn = null;
    try {
      let sql = `
            INSERT INTO users
            (user_name, user_id, pw)
            VALUES
            (?, ?, ?,)
            `;

      conn = await pool.getConnection();
      const [result] = await conn.query(sql, [
        req.body.user_name,
        req.body.user_id,
        req.body.pw,
      ]);
      res.status(200).json("POST 성공!");
      console.log(result);
      return;
    } catch (err) {
      res.status(500).json({ message: "서버 오류!" });
      console.log(err);
      return;
    } finally {
      if (conn !== null) conn.release();
    }
  }
};
