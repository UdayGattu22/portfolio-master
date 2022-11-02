import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = { experience: Experience };

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     md:w-[600px] xl:w-[600px] xl:h-[450px] snap-center bg-[#292929] p-10  hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-16 h-16 mb-0 rounded-full xl:w-[75px] xl:h-[75px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light uppercase">
          {experience?.jobTitle}
        </h4>
        <p className="font-bold text-1xl mt-1 uppercase">
          {experience.company}
        </p>
        <div className="flex space-x-2 my-1 mb-0">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-2 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-0 ml-5 text-m max-w-42 ">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
