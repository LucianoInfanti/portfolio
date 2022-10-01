import Header from "../../../components/header/Header";

import "./styles.css";
import Paragraph from "../../../components/blog/text/Paragraph";
import ArticleHeader from "../../../components/blog/articleTitle/ArticleHeader";
import ReadingItem from "../../../components/blog/references/ReadingItem";
import ReadMore from "../../../components/blog/readmore/ReadMore";
import articles from "../../../data/Data";

export default function ArticleOne() {
  console.log(articles[0].references[0].text);

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
              My take on <em className="title-italic">Svelte</em>
            </>
          }
          subtitle={"Published — 02/09/2022"}
          folder="article1"
          image="main.png"
          description="[1] All rights to Caltech."
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
                I tried Svelte for the first time this year. And honestly, it
                was great. I was able to understand it much more easily than
                React. It feels like Svelte is super simple to get — what I
                definitely appreciate as someone who is not a programmer per se.
                You see, I like to learn code in my free time so learning very
                difficult concepts takes longer for me. That's why I feel like
                Svelte is great. Oh, another thing to mention, the{" "}
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
                Even though it's simpler than React to pick up (yeah, I'm
                talking about you <em className="highlight">useEffect</em>),
                Svelte lacks guides and content — which is something I
                definitely need a lot as I can barely do fine on my own because
                I lack the skills of an experienced programmer. Guidance is
                important to me at this moment. Even worse, SvelteKit has just
                now released breaking changes and because of that most of the
                content one could find around the internet is now outdated and
                is largely useless. That's not a huge problem if you have time
                to wait because people are not gonna hurry and create a lot of
                tutorials for SvelteKit before the stable version 1.0. Until
                then, there is little to no content that is useful for noobs
                like me. So we just wait.
              </>
            }
          />
          <Paragraph
            text="I won't be using Svelte as much as I wanted but I'll keep an eye and
            wait for the stable versions to come. It has some great potential
            and apparently the project is moving forward at a considerable
            speed. I'll wait a little longer for the final stable 1.0 version
            and the guides to come. For now, I'll stick to React."
          />
        </div>

        <div className="section-outro">
          <div className="section-references">
            <div className="divider"></div>
            <h3>References</h3>
            {/* 
            {articles.map((article, i) => (
              <ReadingItem
                key={article.id}
                number={i}
                text={article[i].references[i].text}
                link={article[i].references[i].link}
              />
            ))} */}
            <ReadingItem
              number="1"
              text="How people usually work together by Luciano, I."
              link="google.com"
            />
            <ReadingItem
              number="2"
              text="Famous articles by you."
              link="google.com"
            />
          </div>
          <div className="section-readmore">
            <div className="divider"></div>
            <h3>Keep reading</h3>
            <ReadMore
              link="google.com"
              articleTitle="Protopie good practices"
            />
            <ReadMore
              link="google.com"
              articleTitle="What I cannot create I don't understand"
            />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </div>
  );
}
