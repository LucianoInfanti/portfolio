import "./articletitle.css";

import { motion, useScroll } from "framer-motion";

import { useEffect, useState } from "react";

export default function ArticleTitle(props) {
  const [Hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current >= 200) {
        setHidden(true);
      } else setHidden(false);
    });
  }, []);

  const scrollVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
      className="title-wapper"
    >
      <h1 className="title">{props.title}</h1>
      <motion.p
        variants={scrollVariants}
        animate={Hidden ? "hidden" : "visible"}
        transition={{ ease: "easeIn", duration: 0.2 }}
        className="subtitle"
      >
        {props.subtitle}
      </motion.p>
      {/* {props.folder !== undefined && (
        <Image
          folder={props.folder}
          image={props.image}
          alt={props.alt}
          description={props.description}
        />
      )} */}
    </motion.div>
  );
}
