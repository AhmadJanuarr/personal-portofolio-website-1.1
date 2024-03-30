import { Typography, Button } from "@material-tailwind/react";
import { ComplexNavbar } from "../component/Navbar";
import { Template } from "../component/Template";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInAnimationVariants,
  fadeLeftAnimationVariants,
  fadeRightAnimationVariants,
} from "../Variants";
import { DarkModeContext } from "../DarkModeContext.jsx";
import { useContext } from "react";
import Picture from "../../public/img/picture.jpeg";
import ComponentButton from "../component/Button";
import ComponentService from "../component/Service";
import ComplexFooter from "../component/footer";
import { Link } from "react-router-dom";

const SosialMediaList = [
  {
    id: 1,
    name: "Instagram",
    link: "https://www.instagram.com/_ahmadjanuarr/",
  },
  {
    id: 2,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ahmad-januar-a96515221/",
  },
  {
    id: 3,
    name: "Github",
    link: "https://github.com/AhmadJanuar1",
  },
];

function Icon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C5.505 2 2 6.637 2 11c0 2.129 1.009 3.979 3 5.508V21h3v-3h2v3h4v-3h2v3h3v-4.493c1.991-1.528 3-3.379 3-5.507 0-4.363-3.505-9-10-9zM8 13c-1.121 0-2-1.098-2-2.5S6.879 8 8 8s2 1.098 2 2.5S9.121 13 8 13zm8 0c-1.121 0-2-1.098-2-2.5S14.879 8 16 8s2 1.098 2 2.5-.879 2.5-2 2.5z" />
    </svg>
  );
}

function HeaderAbout() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="flex flex-col mt-64 "
    >
      <motion.div className="flex items-center justify-center">
        <Icon className=" w-28 h-28" />
      </motion.div>
      <motion.div variants={fadeIn}>
        <Typography
          variant="h1"
          className=" font-semibold font-poppins uppercase text-center text-[3rem] xl:text-[11rem]"
        >
          hello there✳
        </Typography>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Typography
          variant="h2"
          className="w-full text-xl font-semibold tracking-normal text-center text-black uppercase dark:text-white font-poppins xl:text-4xl"
        >
          my name is ahmad januar amri usually called ahmad I live in Lampung -
          indonesia
        </Typography>
      </motion.div>

      <motion.div variants={fadeIn}>
        <Typography
          variant="h2"
          className="w-full text-xl font-normal tracking-normal text-center text-black uppercase dark:text-white font-poppins xl:text-4xl"
        >
          I graduated from Technocratic University of Indonesia majoring in
          informatics with an ipk of 3.18 located in bandar lampung
        </Typography>
      </motion.div>

      <hr className="border-1 border-[#524F4F] my-10  " />

      <motion.div
        variants={fadeIn}
        className="flex flex-col justify-between w-full gap-3 mb-20 md:flex-row"
      >
        <Typography
          variant="small"
          className="font-medium text-center text-gray-600 font-poppins md:text-left xl:w-1/3 xl:text-lg"
        >
          I have skills in creating graphic designs and 3D animations using
          Microsoft Office, Blender, and Corel Draw. I also have knowledge basic
          knowledge of web development using JavaScript programming language.
        </Typography>
        <Typography
          variant="small"
          className="hidden font-medium text-gray-600 font-poppins md:block xl:w-1/3 xl:text-lg "
        >
          I have created an expert system website as the final project of the
          lecture with the title Application of forward chaining method on an
          expert system for diagnosing chicken diseases. I am interested in
          working in the Front End Dev field, because I want to learn the latest
          web technologies and create interactive and responsive create
          interactive and responsive websites.
        </Typography>
        <Typography
          variant="small"
          className="hidden font-medium text-gray-600 font-poppins md:block xl:w-1/3 xl:text-lg "
        >
          say hello to me on my email address or on my social media account{" "}
          <span className="text-black underline decoration-solid">
            ahmadjanuaramri2015@gmail.com
          </span>
        </Typography>
      </motion.div>
      <div className="flex flex-col w-full gap-5 px-4 mb-32 md:flex-row">
        {SosialMediaList &&
          SosialMediaList.map((item) => (
            <ComponentButton key={item.id}>
              <Link to={item.link} target="_blank">
                {item.name}
              </Link>
            </ComponentButton>
          ))}
      </div>
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: true }}
        className="mx-auto"
      >
        <img
          src={Picture}
          alt="My Picture"
          className="h-[800px] w-[1300px] object-cover object rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
}
function ContentAbout() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mt-20 md:mt-72">
        <motion.div
          variants={fadeLeftAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Typography
            variant="h1"
            className="font-semibold font-poppins md:text-9xl"
          >
            services
          </Typography>
        </motion.div>
        <motion.div
          variants={fadeRightAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Button
            className="rounded-full group relative inline-flex items-center justify-center overflow-hidden w-[21rem] h-[3.5rem] border-2 border-gray-700 hidden xl:block"
            variant="filled"
            ripple={false}
            color="white"
          >
            <Typography
              variant="paragraph"
              className="flex items-center justify-center w-full h-full font-semibold text-black lowercase cursor-pointer font-poppins gruop-hover:invisible "
            >
              ahmadjanuaramri2015@gmail.com
            </Typography>
          </Button>
        </motion.div>
      </div>
      <div className="w-full mt-20">
        <ComponentService
          no={"01."}
          title={"Creative "}
          description={
            "We’ll have a look at what content should be on the site, which shouldn’t and what goes on which page. By thinking about the structure in user funnels we’ll define a path for the user towards conversion."
          }
        />
        <ComponentService
          no={"02."}
          title={"Web design"}
          description={
            "If you already have a visual identity in place we’ll continue into the visual design. If not yet defined I’ll go into art direction when the homepage is designed. Websites always get designed for desktop and mobile. "
          }
        />
        <ComponentService
          no={"03."}
          title={"Animation"}
          description={
            "Here we define how things will move and interact. Think page transitions, pageload animations, button hovers, scroll animations and so on. This is all done with the strategic direction of your brand in mind. "
          }
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:mt-36">
        <Typography
          variant="h2"
          className="text-2xl font-semibold text-center font-poppins md:text-9xl"
        >
          Get in touch with me and I will get back to you as soon as possible
        </Typography>

        <Button
          className="rounded-full group relative inline-flex items-center justify-center overflow-hidden w-[21rem] h-[3.5rem] border-2 border-gray-700 my-20"
          variant="filled"
          ripple={false}
          color="white"
        >
          <Typography
            variant="paragraph"
            className="absolute flex items-center justify-center w-full h-full text-xl font-semibold text-black cursor-pointer font-poppins gruop-hover:invisible md:text-3xl"
          >
            {" "}
            <a href="https://wa.me/089630507889" target="_blank">
              Contact me{" "}
            </a>
          </Typography>
        </Button>
      </div>
    </div>
  );
}

const WrapperAboutPage = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Template darkMode={darkMode}>
      <ComplexNavbar />
      <hr className="border-1 border-[#524F4F] " />
      <HeaderAbout />
      <ContentAbout />
      <hr className="border-1 border-[#524F4F] lg:hidden" />
      <ComplexFooter />
    </Template>
  );
};
const AboutPage = WrapperAboutPage;
export default AboutPage;
