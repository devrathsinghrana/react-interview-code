export default function SEO() {
  const reqStr = `FOR react 19 we can directly use meta tags and for older versions we can go for tanstack/react-router or react-helmet`;
  return (
    <>
      <title>{"blog SEO"}</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={"devrath, singh, rana"} />
      <div>
        SEO
        <pre style={{ whiteSpace: "pre-wrap" }}>{reqStr}</pre>
      </div>
    </>
  );
}
