export default function AnswerBox({ currentMessages }) {
  const messagesToShow = currentMessages.map((message, i) => (
    <div style={messageStyle} key={i}>
      {message}
    </div>
  ));
  return <div>{messagesToShow}</div>;
}

const messageStyle = {
  fontSize: 30,
  color: "#f8f8f2",
};
