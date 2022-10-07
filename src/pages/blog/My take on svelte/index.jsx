// Data and styles
import "./styles.css";
import articles from "../../../data/Data";

// Layout-related components
import Header from "../../../components/header/Header";
import ReadMore from "../../../components/blog/readmore/ReadMore";

// Text-related components
import Paragraph from "../../../components/blog/text/Paragraph";
import ArticleHeader from "../../../components/blog/articleTitle/ArticleHeader";
import ReadingItem from "../../../components/blog/references/ReadingItem";

export default function ArticleOne() {
  // Update `articleNumber` accordingly. It should match the number in the component's name - 1;
  const articleNumber = 0;

  return (
    <div className="article-container">
      <div className="header">
        <Header />
      </div>
      <div className="article-content-container">
        <ArticleHeader
          title={
            <>
              My take on <em className="title-italic">Svelte</em>
            </>
          }
          subtitle={"Published — 02/09/2022"}
          folder="article1"
          image="main.png"
          description="By Author."
          alt="a"
          speed={0.1}
        />

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
          {articles[articleNumber].references.length > 0 && (
            <div className="section-references">
              <div className="divider"></div>
              <h3>References</h3>
              {articles[articleNumber].references.map((reference, index) => (
                <ReadingItem
                  key={index}
                  number={index + 1}
                  text={reference.text}
                  link={reference.link}
                />
              ))}
            </div>
          )}

          <div className="section-readmore">
            <div className="divider"></div>
            <h3 className="extra-section">Keep reading</h3>
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
