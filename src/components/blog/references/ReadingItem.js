import "./readingitem.css";

const ReadingItem = ({ link, number, text }) => {
  return (
    <div className="item-wrapper">
   


        <a href={link} target="blank">
          <div className="row">
            {" "}
            <p className="number-indicator">[{number}]</p>
            <p className="reference-text">{text}</p>
          </div>
        </a>
      </div>
 
  );
};

export default ReadingItem;
