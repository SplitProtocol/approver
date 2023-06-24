import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@/shared/lib/styles";

const Document = () => (
  <Html>
    <Head>
      {/* eslint-disable-next-line */}
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
