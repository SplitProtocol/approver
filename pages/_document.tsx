import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@/shared/lib/styles";

const Document = () => (
  <Html>
    <Head>
      {/* eslint-disable-next-line */}
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      <title>Split approver</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
