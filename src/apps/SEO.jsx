import { Head, Title, Meta } from "@tanstack/react-head";

export default function SEO() {
  return (
    <>
      <Head>
        <Title>My Page Title</Title>
        <Meta name="description" content="My page description" />
      </Head>
      <div>SEO</div>
    </>
  );
}
