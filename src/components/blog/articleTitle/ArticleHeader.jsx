import Image from "./Image";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import ArticleTitle from "./ArticleTitle";

const Title = (props) => {
  const { speed } = props;
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <>
      <motion.div
        initial="intial"
        style={{ y: transform }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ArticleTitle title={props.title} subtitle={props.subtitle} />
      </motion.div>
    </>
  );
};

const FinalImage = (props) => {
  const { speed } = props;
  const { scrollYProgress } = useScroll();
  const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);


  return (
    <>
      <motion.div
        initial="intial"
        style={{ y: transform }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          folder={props.folder}
          image={props.image}
          alt={props.alt}
          description={props.description}
        />
      </motion.div>
    </>
  );
};

export default function ArticleHeader(props) {
  return (
    <>
      <Title speed={10} title={props.title} subtitle={props.subtitle} />
      <FinalImage
        speed={-0.4}
        folder={props.folder}
        image={props.image}
        alt={props.alt}
        description={props.description}
      />
    </>
  );
}
