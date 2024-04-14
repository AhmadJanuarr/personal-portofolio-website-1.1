import { Typography, Button } from "@material-tailwind/react";
import { ComplexNavbar } from "../component/Navbar";
import { Template } from "../component/Template";
import { AccordionIcon } from "../component/Accordion.jsx";
import { motion } from "framer-motion";
import { DarkModeContext } from "../DarkModeContext.jsx";
import {
  fadeInAnimationVariants,
  fadeIn,
  fadeRightAnimationVariants,
} from "../Variants";
import { useContext } from "react";
import PROJECT_LIST from "../projectData.js";
import Card from "../component/card.jsx";
import ComplexFooter from "../component/footer.jsx";

function TextHeading() {
  const heading =
    "font-semibold font-poppins uppercase  text-[3rem] md:text-[3rem] xl:text-[9rem] ";
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="w-full mt-32 leading-10 lg:mt-10 xl:leading-none "
    >
      <motion.div variants={fadeIn}>
        <Typography variant="h1" className={` ${heading}`}>
          ✳Ahmad Januar Amri
        </Typography>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Typography variant="h1" className={`xl:text-right pr-20  ${heading}`}>
          Front End Developer
        </Typography>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Typography variant="h1" className={`xl:text-center ${heading}`}>
          Web Designer
        </Typography>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Typography
          variant="h2"
          className="pt-10 text-xl font-medium uppercase font-inter xl:text-2xl xl:w-1/2"
        >
          ❝Through strategic art direction and webdesign I help companies around
          the world grow their business.❞
        </Typography>
      </motion.div>
    </motion.div>
  );
}

function TextEmail() {
  return (
    <motion.div
      variants={fadeRightAnimationVariants}
      initial="initial"
      animate="animate"
      className="hidden pt-10 overflow-hidden text-right xl:block"
    >
      <Button
        className="rounded-full group relative inline-flex items-center justify-center overflow-hidden w-[21rem] h-[3.5rem] border-2 border-gray-700 "
        variant="filled"
        ripple={false}
        color="white"
      >
        <div className="absolute z-10 flex items-center justify-center w-full h-full text-xl text-white lowercase transition duration-1000 translate-y-full bg-black font-poppins ease group-hover:translate-y-0">
          Let{"'"}s Talk
        </div>
        <Typography
          variant="paragraph"
          className="absolute flex items-center justify-center w-full h-full font-semibold text-black lowercase cursor-pointer font-poppins gruop-hover:invisible "
        >
          ahmadjanuaramri2015@gmail.com
        </Typography>
      </Button>
    </motion.div>
  );
}
function ProjectList() {
  return (
    <div className="w-full mt-36">
      <div className="flex justify-between pb-5">
        <Typography className="text-xl font-normal font-poppins xl:text-2xl">
          Selected Work
        </Typography>
        <Typography
          variant="h5"
          className="text-xl font-normal font-poppins xl:text-2xl"
        >
          Discover↓
        </Typography>
      </div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
      >
        {PROJECT_LIST.slice(0, 2).map((item) => (
          <Card
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            year={item.year}
            link={item.link}
          />
        ))}
      </motion.div>
    </div>
  );
}

const WrapperHomePage = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Template darkMode={darkMode}>
        <ComplexNavbar />
        <hr className="border-1 border-[#524F4F] " />
        <TextHeading />
        <TextEmail />
        <ProjectList />
        <AccordionIcon />
        <hr className="border-1 border-[#524F4F] mt-20 lg:hidden " />
        <ComplexFooter />
      </Template>
    </>
  );
};

const HomePage = WrapperHomePage;
export default HomePage;
