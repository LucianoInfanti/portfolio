import "./image.css";
import { motion } from "framer-motion";

const image = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1, ease: "easeOut", duration: 0.6 }}
      className="image-container"
    >
      <div className="crop">
        <motion.img
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          src={`/images/${props.folder}/${props.image}`}
          alt={props.alt}
          className="image"
        />
      </div>
      <p className="image-description">{props.description}</p>
    </motion.div>
  );
};

export default image;
