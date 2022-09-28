import "./articleItem.css";
import { motion } from "framer-motion";

export default function Article(props) {
  return (
    <motion.div
      className="wrapper"
      whileHover={{
        scale: 0.98,

        transition: { duration: 0.3 },
      }}
    >
      <a href={props.route}>
        <div className="article-wrapper">
          <p className="articleTitle">{props.title}</p>
        </div>
      </a>
      <span className="reading-time">{props.time}</span>
    </motion.div>
  );
}
