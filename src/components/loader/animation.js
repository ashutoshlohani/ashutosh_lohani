export const opacity = {
   initial: {
      opacity: 0,
   },
   enter: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.1 },
   },
};

export const slideUp = {
   initial: {
      // top: 0,
      opacity: 1,
   },
   exit: {
      // top: '-100vh',
      // transition: { duration: 0.5 },
      opacity: 0,
   },
};
