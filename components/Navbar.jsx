"use client";

import { motion } from "framer-motion";

import { navVariants } from "../utils/motion";
import styles from "../styles";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />

    <div
      className={`${styles.interWidth} mx-auto flex justify-between items-center gap-8`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />

      <h2 className="font-extrabold text-[28px] text-white leading-[30px]">
        METAVERSUS
      </h2>

      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
