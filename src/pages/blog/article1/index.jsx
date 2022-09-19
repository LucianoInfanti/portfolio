import Header from "../../../components/header/Header";
import ArticleTitle from "../../../components/blog/articleTitle/ArticleTitle";

import "./styles.css";
import Code from "../../../components/blog/code/Code";
import Paragraph from "../../../components/blog/text/Paragraph";

export default function ArticleOne() {
  return (
    <div className="article-container">
      <div className="header">
        <Header />
      </div>
      <div className="article-content-container">
        <ArticleTitle
          title={
            <>
              My take on <em className="title-italic">Svelte</em>
            </>
          }
          folder="article1"
          subtitle="Published · 02/09/2022"
          image="main.png"
          description="[1] All rights to Caltech."
        />

        <Paragraph
          text={
            <>
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
        <Paragraph text="But there is a caveat." />
        <Paragraph
          text={
            <>
              Even though it's simpler than React to pick up and get started
              (yep, I'm talking about you <Code content="useEffect" />
              ), Svelte lacks guides and content — which is something I
              definitely need a lot as I can barely do fine on my own as I lack
              the skills of an experienced programmer. Even worse, SvelteKit has
              just now released breaking changes and because of that most of the
              content one could find around the internet is now outdated and is
              largely useless. That's not a huge problem if you have time to
              wait because people are not gonna hurry and create a lot of
              tutorials for SvelteKit before the stable version 1.0. Until then,
              there is little to no content that is useful for noobs like me. So
              we just wait.
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

        <div className="spacer"></div>
      </div>
    </div>
  );
}
