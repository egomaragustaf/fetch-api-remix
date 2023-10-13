import type { MetaFunction } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";
import type { User } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "Fetch with Loader" },
    { name: "description", content: "Fetch with Loader" },
  ];
};

const base_url = `https://jsonplaceholder.typicode.com/users`;

export async function loader() {
  const response = await fetch(base_url);
  const users = (await response.json()) as { products: User[] };

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
