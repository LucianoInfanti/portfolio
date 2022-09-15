import "./articletitle.css";
import MainImage from "./MainImage";

export default function ArticleTitle(props) {
  return (
    <div className="title-wapper">
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
      {props.folder !== undefined && (
        <MainImage
          folder={props.folder}
          image={props.image}
          alt={props.alt}
          description={props.description}
        />
      )}
    </div>
  );
}
