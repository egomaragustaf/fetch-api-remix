import type { MetaFunction } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";
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
        <Link
          to={"https://jsonplaceholder.typicode.com/users"}
          className="text-muted-foreground">
          https://jsonplaceholder.typicode.com/users
        </Link>
      </p>
      {users && <pre>{JSON.stringify(users, null, 2)}</pre>}
    </Layout>
  );
}
