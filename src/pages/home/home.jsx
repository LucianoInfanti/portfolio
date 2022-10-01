import Header from "../../components/header/Header";
import "./styles.css";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../components/AnimatedTextWords";
import Article from "../../components/home/ArticleItem";
import articles from "../../data/Data";

export default function Home() {
  return (
    <div className="container">
      <Header introduction={<> Designer + code enthuasiast based in São Paulo, Brazil currently at
          <a href="https://work.co/" className="italic"> Work & Co </a></>}/>

      <div className="writing">Writing</div>
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
            key={article.id}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, translateY: 50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeInOut" }}
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

        <motion.div
          className="socialWrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <a target="blank" href="https://www.linkedin.com/in/luciano-infanti/">
            — LinkedIn
          </a>
          <a target="blank" href="https://github.com/LucianoInfanti/portfolio">
            — GitHub
          </a>
          <a target="blank" href="https://savee.it/lucianoinfanti/">
            — Savee
          </a>
        </motion.div>
      </div>
    </div>
  );
}
