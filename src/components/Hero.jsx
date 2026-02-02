import { HERO_CONTENT } from '../constants/index';
import { motion } from "framer-motion";
import { useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const profilePicUrl = "https://res.cloudinary.com/ddz3jxlit/image/upload/v1770035946/kevinRushProfile_zof7ez.jpg";

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white"
            >
              Areeb Zakir
            </motion.h1>
            <motion.span
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Engineer
            </motion.span>
            <motion.p
              variants={container(2.0)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-white"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <div className="relative">
              {!imageLoaded && (
                <div className="w-50 h-100 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse p-1">
                  <div className="w-full h-full rounded-full bg-neutral-900"></div>
                </div>
              )}
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                src={profilePicUrl}
                alt="Areeb Zakir"
                onLoad={() => setImageLoaded(true)}
                className={`w-50 h-100 rounded-full border-6 border-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 p-1 shadow-lg ${!imageLoaded ? 'hidden' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
