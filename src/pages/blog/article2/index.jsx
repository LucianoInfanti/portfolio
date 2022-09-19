import Header from "../../../components/header/Header";
import ArticleTitle from "../../../components/blog/articleTitle/ArticleTitle";
import Code from "../../../components/blog/code/Code";

import "./styles.css";

const ArticleTwo = () => {
  return (
      <div className="article-container">
        <div className="header">
          <Header />
        </div>
        <div className="article-content-container">
          <ArticleTitle
            title={
              <>
                Not every ideia is a{" "}
                <em className="title-italic">hypothesis</em>
              </>
            }
            subtitle="Published · 02/09/2022"
          />
          <p className="article-section-title">This is midly infuriating </p>
          <p className="article-body">
            I tried Svelte for the first time this year. And honestly, it was
            great. I was able to understand it much more easily than React. It
            feels like Svelte is super simple to get — what I definitely
            appreciate as someone who is not a programmer per se. You see, I
            like to learn code in my free time so learning very difficult
            concepts takes longer for me. That's why I feel like Svelte is
            great. Oh, another thing to mention, the{" "}
            <a
              href="https://www.reddit.com/r/sveltejs/"
              className="article-link"
            >
              /r/Svelte
            </a>{" "}
            community on Reddit is incredible newbie-friendly. I wasn't
            expecting to be so well received. That was a nice surprise for sure.
          </p>

          <div className="spacer"></div>
        </div>
      </div>
  );
};

export default ArticleTwo;
