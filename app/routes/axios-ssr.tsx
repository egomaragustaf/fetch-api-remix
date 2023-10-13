import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Fetch with Axios-SSR" },
    { name: "description", content: "Fetch with Axios-SSR" },
  ];
};

const base_url = `https://jsonplaceholder.typicode.com/users`;

export async function loader() {
  const response = await axios.get(base_url);
  const users = await response.data;

  return { users };
}

export default function Route() {
  const { users } = useLoaderData<typeof loader>();

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
      {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
    </Layout>
  );
}
