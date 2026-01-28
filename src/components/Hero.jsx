import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ashwin.jpg";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <section id="home" className="pt-28 pb-4 lg:mb-36">
            <div className="flex flex-col items-center justify-center lg:flex-row-reverse">

                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.img
                            src={profilePic}
                            alt="Ashwin K N portrait"
                            className="h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px] 
                         rounded-3xl object-cover border border-stone-900 shadow-lg"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                    <div className="mt-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                        <motion.h2
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-2 text-4xl font-semibold tracking-tight lg:text-5xl">
                            Ashwin K N
                        </motion.h2>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl lg:text-3xl font-medium tracking-tight text-transparent">
                            Flutter Developer · React Beginner
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex gap-4 justify-center lg:justify-start mb-8 text-2xl">
                            <a href="https://github.com/ashwinkn2004/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-100">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/ashwin-kn/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-100">
                                <FaLinkedin />
                            </a>
                            <a href="https://www.instagram.com/ashwin.k.n_/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-100">
                                <FaInstagram />
                            </a>
                        </motion.div>
                        <motion.a
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                            Download Resume
                        </motion.a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
