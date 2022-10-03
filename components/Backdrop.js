import motion from "framer-motion"

function Backdrop({children, onClick}) {
  return (
    <motion.div className="bg-slate-500 opacity-30 absolute top-0 h-screen w-screen"
                onClick={onClick}
                initial={{ opacity: 0 }}
                animation={{ opacity:1 }}
                exit={{ opacity :0 }}>
        Backdrop</motion.div>
  )
}

export default Backdrop