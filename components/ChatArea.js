import { useState } from "react";
import AnswerBox from "./AnswerBox";
import UserInputBox from "./UserInputBox";

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

export default function ChatArea() {
  const [currentElementId, setCurrentElementId] = useState(0);
  const currentElement = dialogue.messages.filter(
    (element) => element.id === currentElementId
  )[0];
  console.log(currentElement.messages);
  return (
    <div>
      <AnswerBox currentMessages={currentElement.messages} />
      <UserInputBox
        setCurrentElementId={setCurrentElementId}
        currentElementId={currentElementId}
        link={currentElement.link}
        currentChoices={currentElement.choices}
      />
    </div>
  );
}
