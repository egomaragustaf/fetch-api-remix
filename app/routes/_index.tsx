import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Layout } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Fetch API" },
    { name: "description", content: "Remix Fetch API" },
  ];
};

export default function Index() {
  return (
    <Layout>
      <h1 className="text-slate-500 text-2xl">Welcome to RemixV2</h1>
      <p className="mb-6">
        This is web experiment to fetch API with several approaches
      </p>
      <Link to="/loader" className="text-muted-foreground">
        Loader
      </Link>
    </Layout>
  );
}
