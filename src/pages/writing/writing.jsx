import "./styles.css";

import { motion } from "framer-motion";
import Bubble from "../../components/Bubble";

import Article from "../../components/home/ArticleItem";
import Header from "../../components/header/Header";

export default function Writing() {
  const articles = [
    {
      id: 1,
      title: () => (
        <>
          My take on <em className="italic">Svelte</em>
        </>
      ),
      time: "05",
      folder: "article1",
      route: "/writing/my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 2,
      title: () => (
        <>
          <em className="italic">Protopie</em> good practices
        </>
      ),
      time: "09",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 3,
      title: () => (
        <>
          On design <em className="italic">entropy</em>
        </>
      ),
      time: "04",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 4,
      title: () => (
        <>
          What I cannot <em className="italic">create</em> I do not understand
        </>
      ),
      time: "04",
      folder: "article1",
      route: "/writing/what-i-cannot-create",
      image: "image.png",
    },    {
      id: 1,
      title: () => (
        <>
          My take on <em className="italic">Svelte</em>
        </>
      ),
      time: "05",
      folder: "article1",
      route: "/writing/my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 2,
      title: () => (
        <>
          <em className="italic">Protopie</em> good practices
        </>
      ),
      time: "09",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 3,
      title: () => (
        <>
          On design <em className="italic">entropy</em>
        </>
      ),
      time: "04",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 4,
      title: () => (
        <>
          What I cannot <em className="italic">create</em> I do not understand
        </>
      ),
      time: "04",
      folder: "article1",
      route: "/writing/what-i-cannot-create",
      image: "image.png",
    },
  ];
  return (
    <div className="componentWrapper">
      <Header />

      <div className="articleWrapper">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="period"
        >
          2021 — 2022
        </motion.p>

        {articles.map((article, i) => (
          <motion.div
            // key={article.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // initial={{ opacity: 0, translateY: 50 }}
            // animate={{ opacity: 1, translateY: 0 }}
            // transition={{ duration: 0.8, delay: i * 0.1, ease: "easeInOut" }}
            className="insideArticle"
          >
            <Article
              title={article.title()}
              time={article.time}
              folder={article.folder}
              route={article.route}
              image={article.image}
            />
          </motion.div>
        ))}
        {articles.length > 3 && <div className="spacer"></div>}
        <div className="bubble-writting">
          <Bubble />
        </div>
      </div>
    </div>
  );
}
