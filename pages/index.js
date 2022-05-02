import Head from "next/head";
import Image from "next/image";
import ChatArea from "../components/ChatArea/ChatArea";
import { getAnswer } from "../services/apiService";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

const dialogue = {
  id: 0,
  messages: [
    {
      id: 0,
      messages: [
        "Why would Artificial Intelligence kill us all?",
        "We're a bunch of nerds who have thought about the future of AI a lot and have concluded that future AI systems are quite likely to destroy humanity.",
        "We know that sounds weird. You probably disagree. Click on why you disagree and see if we know something you don't.",
      ],
      choices: [
        {
          text: "Artificial Intelligence as smart as humans is impossible because…",
          next: 1,
        },
        {
          text: "If an AI does bad things we just turn it off",
          next: 2,
        },
        {
          text: " Smart people are nice, smart machines will also be nice",
          next: 3,
        },
      ],
    },
    {
      id: 1,
      messages: [
        "You've chosen 1",
        "What do you think computers can't do that we can",
      ],
      choices: [
        {
          text: "Computers can't innovate",
          next: 1,
        },
        {
          text: "Computers can't be creative",
          next: 2,
        },
        {
          text: " Smart people are nice, smart machines will also be nice",
          next: 3,
        },
      ],
    },
    {
      id: 2,
      messages: [
        "You've chosen number 2",
        "How do you think that should work?",
      ],
      choices: [
        {
          text: "Scenario 1",
          next: 1,
        },
        {
          text: "Scenario 2",
          next: 2,
        },
        {
          text: "Scenario 3",
          next: 3,
        },
      ],
    },
    {
      id: 3,
      messages: ["You've chosen 3", "Who do you think will take care of it?"],
      choices: [
        {
          text: "Government",
          next: 1,
        },
        {
          text: "Tech companies",
          next: 2,
        },
      ],
    },
  ],
};

export default function Home() {
  useEffect(() => {
    getAnswer("Can_you_give_an_AI_a_goal_of_“minimally_impact_the_world”%3F");
  }, []);

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
