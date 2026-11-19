// Single source of truth for the backend API origin.
// Exposed via NEXT_PUBLIC_ so it is available on both server and client.
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
