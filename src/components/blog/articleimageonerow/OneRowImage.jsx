import "./onerowimage.css";

export default function OneRowImage(props) {
  return (
    <div className="component-wrapper">
      <div className="image-wrapper">
        <img
          src={`images/${props.folder}/${props.image}`}
          alt={props.alt}
          className="img"
        />
      </div>
      <div className="alt-wrapper">
        <span>{props.alt}</span>
      </div>
    </div>
  );
}
