import NextHead from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

const Head = () => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <NextHead>
      <title>Niels Segers</title>

      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />

      <meta key="og:title" property="og:title" content="Niels Segers" />
      <meta key="og:sitename" property="og:sitename" content="Niels Segers" />
      <meta
        key="description"
        name="description"
        content="Full Stack Developer"
      />
      <meta
        key="og:description"
        property="og:description"
        content="Full Stack Developer"
      />

      <link
        key="canonical"
        rel="canonical"
        href={`${process.env.NEXT_PUBLIC_URL}${asPath}`}
      />
      <meta
        key="og:url"
        property="og:url"
        content={`${process.env.NEXT_PUBLIC_URL}${asPath}`}
      />
    </NextHead>
  );
};

export default Head;
