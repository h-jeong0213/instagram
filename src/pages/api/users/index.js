import pool from "../../../db";

const handler = async (req, res) => {
  console.log(process.env.DB_HOST);

  if (req.method === "GET") {
    let conn = null;
    try {
      let conn = await pool.getConnection();
      let [result] = await conn.query("SELECT * FROM users");

      // console.log(result)
      res.status(200).json(result);
      return;
    } catch (err) {
      res.status(500).json({ message: "서버 오류 발생" });
    } finally {
      if (conn !== null) conn.release();
    }
  }
};
export default handler;
