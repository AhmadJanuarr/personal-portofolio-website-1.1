import { ComplexNavbar } from "../component/Navbar";
import { Template } from "../component/Template";
import { Typography, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import { DarkModeContext } from "../DarkModeContext.jsx";
import { useContext } from "react";
import Card from "../component/card";
import ComplexFooter from "../component/footer";
import PROJECT_LIST from "../projectData.js";

function HeaderProject() {
  return (
    <div className="w-full mt-10">
      <motion.div variants={fadeIn} initial="hidden" animate="show">
        <motion.div variants={fadeIn}>
          <Typography
            variant="h1"
            className=" font-semibold font-inter uppercase leading-none mt-28 tablet:mt-0 laptop:w-[70%] tablet:text-[7rem]  "
          >
            <span className="text-6xl tablet:text-9xl">FEATURED PROJECTS</span>{" "}
            (2018 — 2024)
          </Typography>
        </motion.div>
        <motion.div variants={fadeIn}>
          <Typography
            variant="h2"
            className="pt-10 text-2xl font-medium font-inter tablet:text-4xl laptop:w-2/5"
          >
            Have a look at some of the projects I’ve worked on. Clients vary
            from lifestyle to tech and design companies.
          </Typography>{" "}
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        className="flex flex-wrap justify-center w-full mt-20 "
      >
        {PROJECT_LIST.map((item) => (
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true }}
            key={item.id}
          >
            <Card
              image={item.image}
              title={item.title}
              description={item.description}
              year={item.year}
              link={item.link}
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="flex items-center justify-center mt-10">
        <Button
          className="rounded-full group relative flex items-center justify-center overflow-hidden w-[13rem]  h-[3.5rem] border-2 border-black transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-black before:duration-500 before:ease-out hover:before:h-52 before:z-1 hover:before:w-full tablet:w-[21rem]"
          variant="filled"
          ripple={false}
          color="white"
        >
          <Typography
            variant="paragraph"
            className="absolute z-20 flex items-center justify-center w-full h-full text-3xl font-semibold text-black capitalize transition-all duration-500 cursor-pointer font-poppins group-hover:text-white"
          >
            <a href="https://github.com/AhmadJanuar1" target="_blank">
              See More
            </a>
          </Typography>
        </Button>
      </div>
    </div>
  );
}

const WrapperProjectPage = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Template darkMode={darkMode}>
      <ComplexNavbar />
      <hr className="border-1 border-[#524F4F] " />
      <HeaderProject />
      <hr className="border-1 border-[#524F4F] mt-20 lg:mt-0 tablet:hidden" />
      <ComplexFooter />
    </Template>
  );
};

const ProjectPage = WrapperProjectPage;
export default ProjectPage;
