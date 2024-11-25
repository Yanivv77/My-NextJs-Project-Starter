import { migrate } from "drizzle-orm/postgres-js/migrator";
import config from "@/../drizzle.config";
import database, { client } from "./index";

if (!process.env.DB_MIGRATING) {
  throw new Error("You must set DB_MIGRATING to true.");
}

await migrate(database, { migrationsFolder: config.out! });

await client.end();
