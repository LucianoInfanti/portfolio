import Header from "../../../components/header/Header";
import "./styles.css";
import Paragraph from "../../../components/blog/text/Paragraph";
import ArticleHeader from "../../../components/blog/articleTitle/ArticleHeader";

export default function ArticleTwo() {
  return (
    <div className="article-container">
      <div className="header">
        <Header />
      </div>
      <div className="article-content-container">
        <div className="title-position">
          {/* <ArticleTitle
            title={
              <>
                My take on <em className="title-italic">Svelte</em>
              </>
            }
            subtitle="Published — 02/09/2022"
          /> */}
        </div>

        <ArticleHeader
          title={
            <>
              What I cannot <em className="title-italic">create</em> I do{" "}
              <br></br> not understand
            </>
          }
          subtitle={"Published — 02/09/2022"}
          folder="article2"
          image="main.png"
          description="Richard Phillips Feynman."
          alt="a"
          speed={0.1}
        />

        {/* <Image
          folder="article1"
          image="main.png"
          alt="a"
          description="[1] All rights to Caltech."
        /> */}
        <div>
          <Paragraph
            text={
              <>
                This sentence was said by Richard Feynman. It was found written
                on his whiteboard after he died — this was one of the last
                things his brilliant mind conceived. And I find myself thinking
                about its meaning every now and then. Its because of it I
                decided to create this website (blog?). I wanted to code it
                myself so I could study technology and programming a bit. It is
                my opinion that understanding code is important for designers.
                How can I claim to know design.
                <a
                  href="https://www.reddit.com/r/sveltejs/"
                  className="article-link"
                  target="blank"
                >
                  /r/Svelte
                </a>{" "}
                community on Reddit is incredible newbie-friendly. I wasn't
                expecting to be so well received. That was a nice surprise for
                sure.
              </>
            }
          />
          <Paragraph
            text={
              <>
                First of all, a well deserved introduction. If you are
                unfamiliar with this very peculiar human being, he was an
                American physicist born in x.
              </>
            }
          />
          <Paragraph
            text={
              <>
                First of all, a well deserved introduction. If you are
                unfamiliar with this very peculiar human being, he was an
                American physicist born in x.
              </>
            }
          />
          <Paragraph
            text={
              <>
                First of all, a well deserved introduction. If you are
                unfamiliar with this very peculiar human being, he was an
                American physicist born in x.
              </>
            }
          />
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}
