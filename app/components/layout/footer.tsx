import { Link } from "@remix-run/react";
import { Button } from "~/components";

export function Footer() {
  return (
    <div>
      <Link to="https://github.com/egomaragustaf">
        <Button variant="link" className="text-muted-foreground">
          &copy; Ego Maragustaf
        </Button>
      </Link>
    </div>
  );
}
