import { getAllDiscussionsId } from "../../lib/discussions";
import Head from "next/head";
import Image from "next/image";
import ChatArea from "../../components/ChatArea/ChatArea";
import styles from "../../styles/Home.module.css";

export default function Conversation({ conversation }) {
  return (
    <div style={{ backgroundColor: "#282a36" }} className={styles.container}>
      <Head>
        <title>Discussions on AI Safety</title>
        <meta name="description" content="Discussions on AI safety" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChatArea conversation={conversation} />
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const js = await import(`/discussions/${context.params.id}.json`);
  return { props: { conversation: js.default } };
}

export async function getStaticPaths() {
  const paths = getAllDiscussionsId();
  return {
    paths,
    fallback: false,
  };
}
