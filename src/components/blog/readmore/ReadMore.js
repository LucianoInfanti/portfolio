import "./readmore.css";

const ReadMore = ({ link, articleTitle }) => {
  return (
    <div className="readmore-wrapper">
      <a href={link} className="readmore-link">
        {articleTitle}
      </a>
    </div>
  );
};

export default ReadMore;
