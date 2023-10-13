import { useEffect, useState } from "react";
import axios from "axios";

import type { User } from "~/types";
import { Layout } from "~/components";

export default function Route() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <Layout>
      <h1>Fetching data with Remix Loader</h1>
      <p>
        Source:{" "}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          className="text-muted-foreground"
          rel="noreferrer">
          https://jsonplaceholder.typicode.com/users
        </a>
      </p>

      {error && <p className="text-danger">{error}</p>}
      {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
    </Layout>
  );
}
