import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiLeetcode } from "react-icons/si"; // For DSA (Data Structures and Algorithms)
import { SiPlaywright } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiTerraform } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "framer-motion";


const iconVariants = (duration) =>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }

})

const Technologies = () => {
  return (
    <div className="border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div
      whileInView={{opacity: 1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:0.5}}
  className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-700" />
        </motion.div>
        <motion.div
        variants={iconVariants(8)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiLeetcode className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPlaywright className="text-7xl text-emerald-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiKubernetes className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMicrosoftazure className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(7.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSelenium className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(8.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTerraform className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(3.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-white" />
        </motion.div>
        <motion.div
        variants={iconVariants(4.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandReactNative className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(5.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiJira className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(6.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGithubactions className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(7.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiSupabase className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(8.2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
