import axios from "axios";
import { createPool } from "mysql2/promise";
import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export default function App({ Component, pageProps }) {
  createPool({
    host: "localhost",
    user: restagramuser,
    password: "1234",
    database: "restagram",
    port: 3306,
  });
  const [users, setUsers] = useState([]);

  return (
    <UsersContext>
      <Component {...pageProps} />
    </UsersContext>
  );
}
