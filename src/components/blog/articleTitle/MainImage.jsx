import "./mainimage.css";

const mainImage = (props) => {
  return (
    <div className="image-container">
      <img
        src={`/images/${props.folder}/${props.image}`}
        alt={props.alt}
        className="mainImage"
      />
      <p className="image-description">{props.description}</p>
    </div>
  );
};

export default mainImage;
