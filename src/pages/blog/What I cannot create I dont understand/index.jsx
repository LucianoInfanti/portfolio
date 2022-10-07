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

export default function ArticleTwo() {
  // Update `articleNumber` accordingly. It should match the number in the component's name - 1;
  const articleNumber = 1;

  return (
    <div className="article-container">
      <div className="header">
        <Header />
      </div>
      <div className="article-content-container">
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
          description="Caltech physicist and Nobel Laureate Richard Feynman in an undated photograph. Credit: Richard Hartt/Caltech Archives"
          alt="a"
          speed={0.1}
        />

        <div>
          <Paragraph
            text={
              <>
                Richard Feynman made this statement. This was one of the final
                ideas his creative mind came up with, and it was discovered
                written on his whiteboard after he passed away. And every now
                and again, I find myself reflecting on its significance. And it
                is the reason why this blog existed in the form it does.
              </>
            }
          />
          <Paragraph
            text={
              <>
                First of all, a well deserved introduction. If you are
                unfamiliar with this very peculiar human being, he was an
                American physicist born in x. Feynman was know for many, many
                achievements. His if, for sure, most famous for winning a Nobel
                Prize back in 1955 for his contributions to the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Quantum_electrodynamics"
                  target="blank"
                  className="article-link"
                >
                  Quantum Eletrodynamics
                </a>{" "}
                — the study of how light and matter and interact.
              </>
            }
          />
          <Paragraph
            text={
              <>
                His brillance was unmatch. But that's not exactly why we are
                here. His sentence is somewhat interesting. When Feynman wrote
                that he was talking about knowing the underlying mathematical
                and physical theorems for things we use everyday. If you are
                using calculus limits but have no idea how those equations are
                derived, then you don't really understand how they work. It's
                just a hammer. And that's the kind of thinking that make me
                wonder about design and what's underneath it.
              </>
            }
          />
          <Paragraph
            text={
              <>
                Behind every pixel there is code. A rendering pipeline. Tokens.
                A huge and complex process that takes places. Do we really
                understand how that works? Not really. We usually go by with our
                lives and that's about it. But I kind of like how Feynman saw
                the world. I also want to be able to create it to fully grasp
                the meaning of what I'm doing. Most designers use 12 column
                grids but have absolutely no idea how they work. They don't
                understand why they even need grids in the frist place. Or why
                12. They simply do it. That's source of huge amounts of errors
                because designers are usually unequiped to deal with subgrids or
                errors.
              </>
            }
          />

          <Paragraph
            text={
              <>
                That's why I study technology. That's why I'm learning to code.
                I want to be able to create things so I can rest assured that I
                fully understand them.
              </>
            }
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
