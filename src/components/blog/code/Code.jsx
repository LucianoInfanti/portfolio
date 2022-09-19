import "./code.css";

const Code = (props) => {
  return (
    <>
      <em className="highlight">{props.content}</em>
    </>
  );
};

export default Code;