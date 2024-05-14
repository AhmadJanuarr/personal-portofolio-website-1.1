import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
export default function ComponentService({ no, title, description }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      exit={"exit"}
      className="flex flex-wrap w-full py-20 border-t-2 border-gray-700"
    >
      <motion.div variants={fadeIn} className="w-1/6 mt-10 ">
        <Typography
          variant="paragraph"
          className="text-2xl font-medium font-poppins"
        >
          {no}
        </Typography>
      </motion.div>

      <motion.div variants={fadeIn} className=" tablet:w-1/3 tablet:ml-20">
        <Typography variant="h1" className="font-medium font-poppins">
          {title}
        </Typography>
      </motion.div>

      <motion.div variants={fadeIn} className="ml-16 tablet:w-1/3 laptop:ml-20">
        <Typography className="font-normal font-poppins">
          {description}
        </Typography>
      </motion.div>
    </motion.div>
  );
}
