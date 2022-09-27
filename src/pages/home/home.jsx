import Header from "../../components/header/Header";
import "./styles.css";
import { motion } from "framer-motion";
import AnimatedTextWord from "../../components/AnimatedTextWords";

export default function Home() {
  const articles = [
    {
      id: 1,
      title: () => (
        <>
          My take on <em className="italic">Svelte</em>
        </>
      ),
      time: "05",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 2,
      title: () => (
        <>
          <em className="italic">Protopie</em> good practices
        </>
      ),
      time: "09",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 3,
      title: () => (
        <>
          On design <em className="italic">entropy</em>
        </>
      ),
      time: "04",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
    {
      id: 4,
      title: () => (
        <>
          What I cannot <em className="italic">create</em>, I do not understand
        </>
      ),
      time: "04",
      folder: "article1",
      route: "my-take-on-svelte",
      image: "image.png",
    },
  ];
  return (
    <div className="container">
      <Header />
      <p className="introduction">
        <div className="row-one">
          <AnimatedTextWord text="Designer and code enthuasiast" />
        </div>
        <div className="row-two">
          <AnimatedTextWord text="      based in São Paulo, Brazil" />
        </div>
        <div className="row-three">
          <AnimatedTextWord text={"          currently at Work & Co"} />
        </div>
      </p>

      <motion.div
        className="socialWrapper"
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
        // viewport={{ once: true }}
      >
        <a target="blank" href="https://www.linkedin.com/in/luciano-infanti/">
          LinkedIn
        </a>
        <span>,</span>
        <a target="blank" href="https://github.com/LucianoInfanti/portfolio">
          GitHub
        </a>
        <span>,</span>
        <a target="blank" href="https://savee.it/lucianoinfanti/">
          Savee
        </a>
        <span>,</span>
        <a target="blank" href="https://dribbble.com/LucianoInfanti">
          Dribbble
        </a>
      </motion.div>
    </div>
  );
}

{
  /* <p className="introduction">
        <div className="row-one">
          <AnimatedTextWord text="Designer + code enthuasiast" />
        </div>
        <div className="row-two">
          <AnimatedTextWord text="   based in São Paulo, Brazil" />
        </div>
        <div className="row-three">
          <AnimatedTextWord text={"    currently at Work & Co"} />
        </div>
      </p> */
}

{
  /* <p className="introduction">
        Designer + code enthuasiast based in São Paulo, Brazil currently at
        <a href="https://work.co/" className="italic">
          Work & Co
        </a>
      </p>
      */
}
