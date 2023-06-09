import React from "react";
import { motion } from "framer-motion";
export const pageVariants = {
  initial: { with: 0, height:0, opacity: 0 },
  in: { with: "100%", height: "auto", opacity: 1 },
  out: { x: window.innerWidth,height: 0, opacity: 0, transition: {duration: 0.4} },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.1,
};
const Home = () => {
  return (
    <motion.section
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      
    >
      <div className="text-center bg-gray-50 text-gray-800 py-24 px-6">
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
          The best offer on the market <br />
          <span className="text-blue-600">for your business</span>
        </h1>
        <a
          className="inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Get started
        </a>
        <a
          className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          href="#!"
          role="button"
        >
          Learn more
        </a>
      </div>
    </motion.section>
  );
};

export default Home;
