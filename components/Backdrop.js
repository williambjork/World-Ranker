import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
 
  return (
    <motion.div
      className="bg-slate-500 flex opacity-30 z-100 h-screen w-screen bg-opacity-30"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;


