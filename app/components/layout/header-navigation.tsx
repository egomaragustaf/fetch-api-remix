import { Link } from "@remix-run/react";
import { Button } from "~/components";

export function Navigation() {
  return (
    <div>
      <Link to="/">
        <Button variant="link" className="text-indigo-700">
          Home
        </Button>
      </Link>
    </div>
  );
}
