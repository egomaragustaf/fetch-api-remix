import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Fetch API" },
    { name: "description", content: "Remix Fetch API" },
  ];
};

type FetchList = {
  to: string;
  text: string;
};

const fetchListItems: FetchList[] = [
  { to: "/loader", text: "Loader" },
  { to: "/axios", text: "Axios" },
];

export default function Index() {
  return (
    <Layout>
      <h1 className="text-slate-600 text-2xl">Welcome to RemixV2</h1>
      <p className="mb-4">
        This is web experiment to fetch API with several approaches
      </p>
      <ul>
        {fetchListItems.map((item) => {
          return (
            <li key={item.to}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
