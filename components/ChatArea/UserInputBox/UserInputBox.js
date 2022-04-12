import styles from "./UserInputBox.module.css";

export default function UserInputBox({
  currentChoices,
  link,
  setCurrentElementId,
  currentElementId,
  previousElementId,
  setPreviousElementId,
}) {
  const choicesToShow = currentChoices.map((choice, i) => (
    <div
      className={styles.choice}
      key={i}
      onClick={() => {setPreviousElementId(currentElementId); setCurrentElementId(choice.next)}}
    >
      {i}. {choice.text}
    </div>
  ));
  return (
    <div style={{ marginTop: 30 }}>
      {choicesToShow}
      <div style={{ marginTop: 30 }}>
        {currentElementId != 0 && (
          <div>
            <div
              className={styles.extraChoice}
              onClick={() => setCurrentElementId(0)}
            >
              I have another objection (go back to start)
            </div>
            <div
              className={styles.extraChoice}
              onClick={() => setCurrentElementId(previousElementId)}
            >
              Wait, go back to the previous one
            </div>
          </div>
        )}
        <div
          className={styles.extraChoice}
          onClick={() => window.open("https://stampy.ai/wiki/Get_involved")}
        >
          All right, tell me more
        </div>
      </div>
    </div>
  );
}

const extraChoiceStyle = {
  fontSize: 25,
  color: "red",
  marginTop: 30,
};
