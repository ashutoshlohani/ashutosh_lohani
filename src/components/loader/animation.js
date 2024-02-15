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
      top: 0,
   },
   exit: {
      top: '-100vh',
      transition: { duration: 0.5, ease: [0.75, 0, 0.25, 1], delay: 0.2 },
   },
};
