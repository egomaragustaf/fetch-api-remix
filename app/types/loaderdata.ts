import type { User } from "./users";

export type LoaderData = {
    query: string;
    users: User[];
    count: number;
  }