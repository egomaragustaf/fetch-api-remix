import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Fetch API" },
    { name: "description", content: "Remix Fetch API" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1 className="text-slate-500 text-2xl">Welcome to RemixV2</h1>
    </div>
  );
}
