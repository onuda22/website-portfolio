export const leftContentVariants =  (delay = 0.2) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      duration: 0.8,
      delay: delay,
    },
  },
});

export const rightContentVariants = (delay = 0.2) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      duration: 0.8,
      delay: delay,
    },
  },
});
export const bottomContentVariants = (delay = 0.2) => ({
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      duration: 0.8,
      delay: delay,
    },
  },
});