import "./articleItem.css";

export default function Article(props) {
  return (
    <div className="wrapper">
      <a href={props.route}>
        <div className="article-wrapper">
          <p className="articleTitle">{props.title}</p>
        </div>
      </a>
      <span className="reading-time">{props.time}</span>
    </div>
  );
}
