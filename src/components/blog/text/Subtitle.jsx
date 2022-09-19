import "./subtitle.css";
import { motion } from "framer-motion";

const Subtitle = (props) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      viewport={{ once: true }}
      className="article-section-title"
    >
      {props.text}
    </motion.p>
  );
};

export default Subtitle;
