"use client";

import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col md:flex-row gap-4"
  >
    <img
      src={imgUrl}
      alt={`insight-${index}`}
      className="w-[250px] h-[250px] md:w-[270px] md:h-[270px] rounded-[32px] object-cover"
    />

    <div className="w-full flex justify-between items-center gap-8">
      <div className="flex-1 flex flex-col max-w-[650px] md:ml-[62px]">
        <h4 className="font-normal text-[26px] lg:text-[42px] text-white">
          {title}
        </h4>
        <p className="mt-4 font-normal text-sm lg:text-base text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div className="hidden lg:flex justify-center items-center w-[100px] h-[100px] bg-transparent border border-white rounded-full">
        <img
          src="/arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
