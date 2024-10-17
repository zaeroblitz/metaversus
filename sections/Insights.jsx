"use client";

import { motion } from "framer-motion";

import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />

      <div className="flex flex-col mt-[50px] gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
