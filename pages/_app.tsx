import type { AppProps } from "next/app";

import { App } from "@/app";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <App>
    <Component {...pageProps} />
  </App>
);

export default MyApp;
