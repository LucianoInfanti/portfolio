import React from "react";
import Header from "../../components/header/Header";
import Article from "../../components/articleItem/ArticleItem";
import "./styles.css";
import ScrollContainer from "../../ScrollContainer";

// import { trailingCursor } from "cursor-effects";

// new trailingCursor({particles: 3});

export default function Home() {
  return (
    <ScrollContainer>
    <div className="container">
      <div className="header">
        <Header info={<> Designer + code enthuasiast based in São Paulo, Brazil currently at
          <a href="https://work.co/" className="italicLink">
            Work & Co
          </a></>}/>
      </div>

      <div className="content">
        <p className="sectionTitle">Writing</p>
        <div className="articleWrapper">
          <p>2021 — 2022</p>

      {/* <div className="circle"></div> */}
          <Article
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
                Not every idea is a <em className="italic">hypothesis</em>
              </>
            }
            folder="article4"
            route="protopie-page-scroll-position"
            image="main.png"
            time="12"
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

          />
          <div className="spacer"></div>
        </div>
      </div>
    </div>
    </ScrollContainer>
  );
}
