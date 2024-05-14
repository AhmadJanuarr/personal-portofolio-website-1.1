import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import { DarkModeContext } from "../DarkModeContext";

const navLinks = [
  {
    label: "Home",
    link: "/",
    onclick: "toggleMenu",
  },
  {
    label: "About",
    link: "/about",
    onclick: "toggleMenu",
  },
  {
    label: "Projects",
    link: "/project",
    onclick: "toggleMenu",
  },
];

export function ComplexNavbar() {
  const [open, setOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // pembungkus animation=========================>

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0.0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  // pembungkus animation pada text container=========================>
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div className="fixed top-0 left-0 z-50 w-full md:static ">
      <div className="items-center justify-between bg-white dark:bg-black md:flex py-7 px-7 font-poppins">
        {/* logo section */}
        <div className="flex items-center gap-1 text-2xl font-medium uppercase cursor-pointer laptop:text-4xl ">
          <span>Ahmad Januar.</span>
        </div>

        {/* Menu icon */}
        <div
          onClick={toggleMenu}
          className="absolute flex-col items-center justify-between w-10 h-10 text-2xl cursor-pointer right-14 top-6 laptop:hidden"
        >
          Menu
        </div>

        {/* linke items */}
        <ul className="absolute left-0 hidden w-full pb-12 bg-white pl-9 dark:bg-black laptop:flex laptop:items-center laptop:pb-0 laptop:static laptop:w-auto laptop:pl-0 ">
          {navLinks.map((item, index) => (
            <li
              className="text-4xl font-medium uppercase my-7 laptop:ml-8 laptop:my-0"
              key={index}
            >
              <Link to={item.link} className="relative duration-500 ">
                {item.label}
              </Link>
            </li>
          ))}
          <li className="text-4xl font-medium my-7 laptop:ml-8 laptop:my-0 ">
            <button
              className="uppercase cursor-pointer"
              onClick={toggleDarkMode}
            >
              {darkMode ? "LIGHT" : "DARK"}
            </button>
          </li>
        </ul>

        {/* Responsive Mobile Navbar */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 z-50 w-full h-screen p-5 text-white origin-top bg-black"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between">
                  <h1 className="text-xl text-white font-poppins">
                    Ahmad Januar Amri
                  </h1>
                  <p
                    className="text-xl text-white cursor-pointer"
                    onClick={toggleMenu}
                  >
                    Close
                  </p>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col justify-center h-full gap-5 text-center text-white"
                >
                  {navLinks.map((item) => (
                    <div className="overflow-hidden" key={item.label}>
                      <motion.div
                        variants={mobileLinkVars}
                        className="text-6xl uppercase font-poppins"
                      >
                        <Link to={item.link} className="relative duration-500 ">
                          <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="exit"
                            onClick={toggleMenu}
                          >
                            {item.label}
                          </motion.div>
                        </Link>
                      </motion.div>
                    </div>
                  ))}{" "}
                  <div className="overflow-hidden">
                    <motion.div variants={mobileLinkVars}>
                      <motion.button
                        variants={containerVars}
                        initial="initial"
                        animate="open"
                        exit="exit"
                        className="text-6xl uppercase cursor-pointer font-poppins"
                        onClick={toggleDarkMode}
                      >
                        {darkMode ? "LIGHT" : "DARK"}
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
