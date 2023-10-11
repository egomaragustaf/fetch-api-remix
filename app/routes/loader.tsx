import type { MetaFunction } from "@remix-run/react";
import { Link, useLoaderData } from "@remix-run/react";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Fetch with Loader" },
    { name: "description", content: "Fetch with Loader" },
  ];
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const base_url = `https://jsonplaceholder.typicode.com/users`;

export async function loader() {
  const response = await fetch(base_url);
  const users: User[] = await response.json();

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
      {users.length ? (
        <pre>{JSON.stringify(users, null, 2)}</pre>
      ) : (
        <p>No User Found</p>
      )}
    </Layout>
  );
}
