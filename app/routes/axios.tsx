import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import axios from "axios";

import type { User } from "~/types";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Fetch with Axios" },
    { name: "description", content: "Fetch with Axios" },
  ];
};

const base_url = "https://jsonplaceholder.typicode.com/users";

export default function Route() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get<User[]>(base_url)
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
          href={base_url}
          target="_blank"
          className="text-muted-foreground"
          rel="noreferrer">
          {base_url}
        </a>
      </p>

      {error && <p className="text-danger">{error}</p>}
      {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
    </Layout>
  );
}
