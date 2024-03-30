import {
  Typography,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeRightAnimationVariants,
  fadeLeftAnimationVariants,
} from "../Variants";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
export function AccordionIcon() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const titleVariants =
    "font-poppins font-normal text-black text-3xl xl:text-5xl dark:text-white";

  const descVariants =
    "font-poppins font-normal text-black text-md xl:text-xl dark:text-white";
  return (
    <div className="flex flex-col justify-between w-full mt-32 xl:flex-row">
      <motion.div
        variants={fadeLeftAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pr-3 xl:w-1/2 xl:pr-20"
      >
        <motion.div variants={fadeLeftAnimationVariants}>
          <Typography
            variant="h1"
            className="text-3xl font-normal font-poppins xl:text-6xl"
          >
            My way of getting things done
          </Typography>
        </motion.div>
        <motion.div variants={fadeLeftAnimationVariants}>
          <Typography
            variant="paragraph"
            className="pt-10 font-normal text-md font-poppins xl:pr-10 xl:text-xl"
          >
            First, understand the problem well. Identify the part of the code
            that causes the problem and focus on the solution. Look for
            references on the internet, such as Stack Overflow, GitHub, and
            community forums.
          </Typography>
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeRightAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mt-10 xl:mt-0 xl:w-1/2 "
      >
        <motion.div variants={fadeRightAnimationVariants}>
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={titleVariants}
            >
              01. UX / Wireframing
            </AccordionHeader>
            <AccordionBody className={descVariants}>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </motion.div>

        <motion.div variants={fadeRightAnimationVariants}>
          <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={titleVariants}
            >
              02. UI / Prototyping
            </AccordionHeader>
            <AccordionBody className={descVariants}>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </motion.div>

        <motion.div variants={fadeRightAnimationVariants}>
          <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={titleVariants}
            >
              03. Development
            </AccordionHeader>
            <AccordionBody className={descVariants}>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </motion.div>

        <motion.div variants={fadeRightAnimationVariants}>
          <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={titleVariants}
            >
              04. Deployment
            </AccordionHeader>
            <AccordionBody className={descVariants}>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </motion.div>

        <motion.div variants={fadeRightAnimationVariants}>
          <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={titleVariants}
            >
              05. Maintenance
            </AccordionHeader>
            <AccordionBody className={descVariants}>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  );
}
