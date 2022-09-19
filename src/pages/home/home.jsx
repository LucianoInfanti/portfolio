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
      title: () => (<> My take on <em className="italic">Svelte</em></> ),
      time: "05",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
      position: 3,
    },
    {
      id: 2,
      title: () => (<> My take on <em className="italic">Svelte</em></> ),
      time: "09",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
      position: 0,
    },
    {
      id: 3,
      title: () => (<> My take on <em className="italic">Svelte</em></> ),
      time: "04",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
      position: 2,
    },
  ];

  // const processedTitle = () => {
  //   for (let i = 0; i < articles.length; i++) {
  //     const titleSplitted = articles[0].title.split(" ");
  //     for (let i = 0; i < titleSplitted.length; i++) {
  //       const position = articles[i].position;
  //       const whichWord = titleSplitted[position];
  //       const applyItalic = "" + <em className="italic">{whichWord}</em>;
  //     }
  //   }
  // };

  // var processedTitle = 'Titulo <em className"italic">' + article.title + '</em>'

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
          {/* <Article
              title={
                <>
                  My take on <em className="italic">Svelte</em>
                </>
              }
              time="05"
              folder="article1"
              route="my-take-on-svelte"
              image="main.png"
            />
            <Article
              title={
                <>
                  <em className="italic">Protopie</em> good practices
                </>
              }
              folder="article4"
              route="protopie-page-scroll-position"
              image="main.png"
              time="04"
            />
            <Article
              title={
                <>
                  My take on <em className="italic">Svelte</em> as a{" "}
                  <em className="italic">designer</em>
                </>
              }
              folder="article4"
              route="protopie-page-scroll-position"
              image="main.png"
              time="09"
            />
            <Article
              title="Try subtracting before adding"
              folder="article4"
              route="protopie-page-scroll-position"
              image="main.png"
              time="04"
            />
            <Article
              title="Design Entropy"
              folder="article4"
              route="protopie-page-scroll-position"
              image="main.png"
              time="21"
            /> */}
          {articles.length > 3 && <div className="spacer"></div>}
        </div>
      </div>
    </div>
  );
}
