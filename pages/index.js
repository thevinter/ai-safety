import Head from "next/head";
import Image from "next/image";
import ChatArea from "../components/ChatArea/ChatArea";
import styles from "../styles/Home.module.css";
import YAML from "yaml";

import yaml_dialogue from "../discussions/example.yaml";

const dialogue = YAML.parse(yaml_dialogue);

export default function Home() {
  return (
    <div style={{ backgroundColor: "#282a36" }} className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Discussions about AI safety" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ChatArea conversation={dialogue} />
      </main>
    </div>
  );
}
