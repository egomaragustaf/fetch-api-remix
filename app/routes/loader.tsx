import { useLoaderData } from "@remix-run/react";

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
  const users = (await response.json()) as User[];

  return { users };
}

export default function Route() {
  const { users } = useLoaderData<typeof loader>();

  return (
    <div>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
