import { useState } from "react";
import AnswerBox from "./AnswerBox/AnswerBox";
import UserInputBox from "./UserInputBox/UserInputBox";

export default function ChatArea({ conversation }) {
  const [currentElementId, setCurrentElementId] = useState("0");
  const [previousElementId, setPreviousElementId] = useState("0")
  const currentElement = conversation.messages.filter(
    (element) => element.id == currentElementId
  )[0];
  return (
    <div>
      <AnswerBox currentMessages={currentElement.messages} />
      <UserInputBox
        setCurrentElementId={setCurrentElementId}
        currentElementId={currentElementId}
        link={currentElement.link}
        currentChoices={currentElement.choices}
        previousElementId={previousElementId}
        setPreviousElementId={setPreviousElementId}
      />
    </div>
  );
}
