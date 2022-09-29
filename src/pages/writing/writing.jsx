import "./styles.css";

import { motion } from "framer-motion";
import Bubble from "../../components/Bubble";

import Article from "../../components/home/ArticleItem";
import Header from "../../components/header/Header";
import articles from "../../data/Data";

export default function Writing() {
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
        {articles.length > 10 && <div className="spacer"></div>}
        <div className="bubble-writting">
          <Bubble />
        </div>
      </div>
    </div>
  );
}
