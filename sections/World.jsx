"use client";

import { motion } from "framer-motion";

import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer } from "../utils/motion";
import styles from "../styles";

const World = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        className="mt-[68px] flex w-full h-[150px] md:h-[300px] lg:h-[526px] relative"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-[150px] md:h-[300px] lg:h-full object-cover"
        />

        <div className="absolute bottom-[25%] right-[10%] p-[3px] lg:p-[6px] w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people-1"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-[5%] left-[10%] p-[3px] lg:p-[6px] w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people-1"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] -translate-y-1/2 p-[3px] lg:p-[6px] w-[30px] h-[30px] lg:w-[100px] lg:h-[100px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people-1"
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
