import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl justify-evenly sm:py-0 md:py-0">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] justify-evenly sm:space-y-1"
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className="space-y-10 px-0 md:px-10 sm:space-y-1">
        <h4 className="text-2xl font-semibold justify-evenly sm:text-1xl">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base justify-evenly py-0">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
