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
    "font-poppins font-normal text-black text-3xl laptop:text-5xl dark:text-white";

  const descVariants =
    "font-poppins font-normal text-black text-md laptop:text-xl dark:text-white";
  return (
    <div className="flex flex-col justify-between w-full mt-32 overflow-hidden laptop:flex-row">
      <motion.div
        variants={fadeLeftAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pr-3 laptop:w-1/2 laptop:pr-20"
      >
        <motion.div variants={fadeLeftAnimationVariants}>
          <Typography
            variant="h1"
            className="text-3xl font-normal font-poppins tablet:text-4xl laptop:text-6xl"
          >
            My way of getting things done
          </Typography>
        </motion.div>
        <motion.div variants={fadeLeftAnimationVariants}>
          <Typography
            variant="paragraph"
            className="pt-10 font-normal text-md font-poppins laptop:pr-10 laptop:text-xl"
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
        className="mt-10 laptop:mt-0 laptop:w-1/2 "
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
              Wireframing is a practice used by UX designers to define and plan
              information hierarchies in the design of a website, application,
              or product. This process focuses on how the designer or client
              wants users to process information on the site, based on user
              research that has been conducted by the UX design team
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
              UI prototyping is the process of creating an experimental model
              that is used before finally being released to the public. In the
              context of user interface (UI) design, prototyping helps in
              testing ideas or concepts, as well as understanding the
              acceptability, impact, or real value of those ideas or concepts
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
              Development is a broad term that encompasses various aspects of
              creating software, applications, websites, or other digital
              products.
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
              Deployment is a process that involves using or placing something,
              whether in a software, military, or general use context. In
              software development, deployment involves releasing software
              applications to production servers or end users.
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
              Maintenance refers to the ongoing process of upkeep, inspection,
              and repair to ensure that something remains in good working
              condition.
            </AccordionBody>
          </Accordion>
        </motion.div>
      </motion.div>
    </div>
  );
}
