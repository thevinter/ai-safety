import { useState } from "react";
import AnswerBox from "./AnswerBox";
import UserInputBox from "./UserInputBox";

export default function ChatArea({ conversation }) {
  const [currentElementId, setCurrentElementId] = useState(0);
  const currentElement = conversation.messages.filter(
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
