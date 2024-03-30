export const fadeIn = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};
export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1,
      duration: 0.5,
      delay: 0.5,
    },
  },
};

export const fadeLeftAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const fadeRightAnimationVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};
