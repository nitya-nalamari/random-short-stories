import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ChakraProvider>
        <link rel="icon" href="/icons8-coco-tree-16.png" sizes="any" />
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
