import { Typography } from "@material-tailwind/react";
import { fadeIn } from "../Variants";
import { motion } from "framer-motion";
export default function ComplexFooter() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className="flex flex-col w-full mt-16 font-poppins laptop:mt-64 "
    >
      <motion.div variants={fadeIn}>
        <Typography
          variant="h1"
          className="text-3xl font-semibold text-center text-black uppercase dark:text-white font-poppins laptop:text-left tablet:text-4xl laptop:w-1/2 laptop:text-7xl"
        >
          Let&apos;s talk about a project, collaboration or an idea you may have
        </Typography>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="flex flex-col justify-between w-full mt-5 laptop:flex-row laptop:my-10 laptop:mt-20"
      >
        <Typography
          variant="h5"
          className="mt-10 mb-2 text-xl font-medium text-center laptop:hidden "
        >
          FOLLOW ALL MY ACCOUNTS :{" "}
        </Typography>
        <div className="flex justify-center gap-5 text-xl font-medium text-center uppercase laptop:flex-row laptop:gap-10">
          <motion.a
            variants={fadeIn}
            href="https://www.instagram.com/_ahmadjanuarr/"
            target="_blank"
          >
            Instagram
          </motion.a>
          <motion.a
            variants={fadeIn}
            href="https://www.facebook.com/ahmad.januar.942/"
            target="_blank"
          >
            Facebook
          </motion.a>
          <motion.a
            variants={fadeIn}
            href="https://github.com/AhmadJanuar1"
            target="_blank"
          >
            Github
          </motion.a>
        </div>
        <motion.div variants={fadeIn}>
          <Typography
            variant="h5"
            className="mt-10 text-xl font-medium text-center laptop:mt-0"
          >
            Back to top ↑
          </Typography>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Typography
            variant="h5"
            className="my-4 text-xl font-medium text-center laptop:my-0"
          >
            Copyright©2023. AhmadJanuarAmri
          </Typography>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
