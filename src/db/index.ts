import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env/server";
import * as schema from "./schema/index";

const connectionOptions = {
  max: process.env.DB_MIGRATING ? 1 : 10,
  idle_timeout: 20,
  connect_timeout: 10,
  connection: {
    timezone: "UTC",
  },
};

export const client = postgres(env.DATABASE_URL, connectionOptions);

const db = drizzle(client, {
  schema,
});

export default db;
