import Header from "../../../components/header/Header";
import ArticleTitle from "../../../components/blog/articleTitle/ArticleTitle";
import ScrollContainer from "../../../ScrollContainer";

import "./styles.css";

export default function ArticleOne() {
  return (
    <ScrollContainer>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <ArticleTitle
          title={
            <>
              My take on <em className="title-italic">Svelte</em>
            </>
          }
          folder="article1"
          subtitle={
            <>
              Svelte is <a href="https://survey.stackoverflow.co/2022/" className="article-link">Stackoverflow's second favorite framework</a> and is getting more
              and more attention by the day. But a few things until make me
              unease.
            </>
          }
          image="main.png"
          description="[1] All rights to Caltech."
        />

        <p className="blogBody">
          I tried Svelte for the first time this year. And honestly, it was
          great. I was able to understand it much more easily than React. It
          feels like Svelte is super simple to get — what I definitely
          appreciate as someone who is not a programmer per se. You see, I like
          to learn code in my free time so learning very difficult concepts
          takes longer for me. That's why I feel like Svelte is great. Oh,
          another thing to mention, the /r/Svelte community on Reddit is
          incredible newbie-friendly. I wasn't expecting to be so well received.
          That was a nice surprise for sure.
        </p>
        <p className="blogBody">But there is a caveat.</p>
        <p className="blogBody">
          Even though it's simpler than React to pick up and get started, Svelte
          lacks guides and content — which is something I definitely need a lot
          as I can barely do fine on my own as I lack the skills of an
          experienced programmer. Even worse, SvelteKit has just now released
          breaking changes and because of that most of the content one could
          find around the internet is now outdated and is largely useless.
          That's not a huge problem if you have time to wait because people are
          not gonna hurry and create a lot of tutorials for SvelteKit before the
          stable version 1.0. Until then, there is little to no content that is
          useful for noobs like me. So we just wait.
        </p>
        <p className="blogBody">
          I won't be using Svelte as much as I wanted but I'll keep an eye and
          wait for the stable versions to come. It has some great potential and
          apparently the project is moving forward at a considerable speed. I'll
          wait a little longer for the final stable 1.0 version and the guides
          to come. For now, I'll stick to React.
        </p>
        <div className="spacer"></div>
      </div>
    </ScrollContainer>
  );
}
