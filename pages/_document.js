import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="UBC Bachelor of Computer Science Student Association"
        />

        <meta property="og:title" content="UBC BCSSA" />
        <meta
          property="og:description"
          content="UBC Bachelor of Computer Science Student Association"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ubcbcs.ca/" />
        <meta property="og:image" content="https://i.imgur.com/JQHrDlm.png" />

        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_MEASUREMENT_ID}');
                  `,
              }}
            />
          </>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
