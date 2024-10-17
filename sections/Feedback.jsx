"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";
import styles from "../styles";

const Feedback = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto relative flex flex-col lg:flex-row gap-[30px]`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.25, 1)}
        className="flex flex-[0.5] flex-col justify-end gradient-05 lg:max-w-[370px] p-[30px] pt-[150px] border border-[#6a6a6a] rounded-[32px]"
      >
        <div className="feedback-gradient" />
        <div className="flex flex-col">
          <h4 className="font-bold text-[26px] sm:text-[32px] leading-[36px] sm:leading-[40px] text-white">
            Zaero
          </h4>
          <p className="mt-2 font-normal text-[12px] sm:text-lg leading-[16px] sm:leading-[22px] text-white">
            Founder | Metaversus
          </p>
          <p className="mt-6 font-normal text-[18px] sm:text-2xl leading-[39px] sm:leading-[45px] text-white">
            “With the development of today's technology, metaverse is very
            useful for today's work, or can be called web 3.0. by using
            metaverse you can use it as anything”
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("left", "tween", 0.25, 1)}
        className="relative flex flex-1 justify-center items-center"
      >
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full h-auto min-h-[210px] lg:h-[610px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="hidden lg:block absolute -left-[11%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
