import { createPool } from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  user: 'restagramuser',
  password: '1234',
  database: 'restagram',
  port: 3306,
})

export default pool
