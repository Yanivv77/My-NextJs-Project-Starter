import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(32),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  },
  onValidationError: (error) => {
    console.error("❌ Environment Variable Validation Error:");
    console.error("----------------------------------------");
    const { fieldErrors } = error.flatten();

    for (const [field, errors] of Object.entries(fieldErrors)) {
      if (errors) {
        console.error(`${field}: ${errors.join(", ")}`);
      }
    }

    throw new Error(
      "Invalid environment variables. Please check your .env file and ensure all required variables are set correctly."
    );
  },
});