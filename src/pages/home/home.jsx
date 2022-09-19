import React from "react";
import Header from "../../components/header/Header";
import Article from "../../components/home/ArticleItem";
import "./styles.css";
import { motion } from "framer-motion";
// import { trailingCursor } from "cursor-effects";

// new trailingCursor({particles: 3});

export default function Home() {
  const articles = [
    {
      id: 1,
      title: () => (
        <>
          My title <em className="italic">Svelte</em>
        </>
      ),
      time: "05",
      folder: "article1",
      route: "my-take-on-svelte",
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
  ];

  return (
    <div className="container">
      <div className="header">
        <Header
          info={
            <>
              Designer + code enthuasiast based in São Paulo, Brazil currently
              at
              <a href="https://work.co/" className="italicLink motionHover">
                Work & Co
              </a>
            </>
          }
        />
      </div>

      <div className="content">
        <p className="sectionTitle">Writing</p>
        <div className="articleWrapper">
          <p>2021 — 2022</p>
          {articles.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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
        </div>
      </div>
    </div>
  );
}
