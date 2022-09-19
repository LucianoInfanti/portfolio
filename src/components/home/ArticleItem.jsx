import "./articleItem.css";

export default function Article(props) {
  return (
    <div className="wrapper">
      <a href={props.route} className="motionHover">
        <div className="article-wrapper">
          <p className="articleTitle">{props.title}</p>

        </div>
      </a>
      <div className="reading-wrapper">
            <span className="reading-time">{props.time}</span>
          </div>
    </div>
  );
}
