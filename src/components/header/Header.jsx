import "./header.css";
import { motion, useScroll } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [Hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((current) => {
      if (current >= 100) {
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
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ ease: "easeInOut", duration: 0.8 }}
      className="headerWrapper"
    >
      <div className="header">
        <a href="/" className="logo">
          Luciano Infanti
        </a>

        <motion.div
          variants={scrollVariants}
          animate={Hidden ? "hidden" : "visible"}
          transition={{ ease: "easeIn", duration: 0.2 }}
        >
          <NavLink
            to="/writing"
            // style={({ isActive }) => ({
            //   textDecoration: isActive ? "line-through" : "none",
            // })}
          >
            Writing
          </NavLink>
        </motion.div>

        <div className="circle-wrapper">
          <button className="circle"></button>
        </div>
      </div>
    </motion.div>
  );
}
