import pool from '../../../db'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    let conn = null
    try {
      let sql = `
                INSERT INTO likes
                (id, post_id, user_name)
                VALUES
                (?,?,?)
            `
      conn = await pool.getConnection()
      const [result] = await conn.query(sql, [
        req.body.id,
        req.body.post_id,
        req.body.user_name,
      ])
      result.serverStatus(200).josn('post 성공!')
      console.log(result)
      return
    } catch (err) {
      res.status(500).json({ message: '서버 오류!' })
      console.log(err)
      return
    } finally {
      if (conn !== null) conn.release()
    }
  }
}

export default handler
