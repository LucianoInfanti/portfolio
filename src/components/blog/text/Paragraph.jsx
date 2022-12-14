import "./paragraph.css";
import { motion } from "framer-motion";

const Paragraph = (props) => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.6 }}
        viewport={{ once: true }}
        className="article-body"
      >
        {props.text}
      </motion.p>
    </div>
  );
};

export default Paragraph;
