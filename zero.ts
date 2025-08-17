import { Zero } from "@rocicorp/zero";
import { schema } from "./schema";

export const z = new Zero({
  userID: "anon",
  server: "http://localhost:4848",
  schema,
});
