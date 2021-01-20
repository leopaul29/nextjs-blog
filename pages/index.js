import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Léo-Paul's site</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am Léo, Full-Stack Developer from Nice, France.</p>
        <ul>
          <li>🔭 I’m currently working on my portfolio </li>
          <li>🌱 I’m currently learning ReactJs and Gatsby</li>
          <li>📚 I'm planning to learn Typescript </li>
        </ul>

        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
