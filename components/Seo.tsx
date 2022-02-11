import Head from "next/head";

interface ISeoProps {
  title: string;
}

export default function Seo({ title }: ISeoProps) {
  return (
    <Head>
      <meta name="description" content="movies app" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title} | Movies</title>
    </Head>
  );
}
