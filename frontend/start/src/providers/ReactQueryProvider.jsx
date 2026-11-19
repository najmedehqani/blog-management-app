"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

// Create the client lazily, once per component instance (TanStack's official
// App Router pattern). A module-level client is shared across requests on the
// server and can leak cache between users; useState keeps it request-scoped.
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Treat data as fresh for a minute so navigations and window refocus
        // don't trigger a refetch storm (also stops the home carousel from
        // resetting on focus).
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  });
}

export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      {/* {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )} */}
      {children}
    </QueryClientProvider>
  );
}
