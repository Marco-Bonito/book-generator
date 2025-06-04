import { createClient } from "@supabase/supabase-js";
import env from "./localEnvConfig.js";
const supabaseUrl = env.SUPABASE_URL;
const supabaseKey = env.SUPABASE_KEY;
const options = {
  db: {
    schema: "public",
  },
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
  global: {
    headers: { "x-my-custom-header": "BookGenerator" },
  },
};
export const supabase = createClient(supabaseUrl, supabaseKey, options);
