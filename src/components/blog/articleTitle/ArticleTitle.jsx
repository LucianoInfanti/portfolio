import "./articletitle.css";
import Image from "./Image";
import { motion } from "framer-motion";

export default function ArticleTitle(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.6 }}
      className="title-wapper"
    >
      <h1 className="title">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>
      {props.folder !== undefined && (
        <Image
          folder={props.folder}
          image={props.image}
          alt={props.alt}
          description={props.description}
        />
      )}
    </motion.div>
  );
}
