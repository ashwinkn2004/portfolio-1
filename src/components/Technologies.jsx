import React from "react";
import {
    RiReactjsLine,
    RiFlutterFill,
    RiHtml5Line,
    RiCss3Line,
    RiGitBranchLine,
} from "react-icons/ri";
import {
    SiPython,
    SiC,
    SiDart,
    SiFirebase,
    SiMysql,
    SiFigma,
    SiAndroidstudio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <section id="technologies" className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-5xl tracking-tight">
                Technologies
            </motion.h2>

            {/* Core Technologies */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="mb-20">
                <h3 className="mb-10 text-center text-xl text-stone-400 tracking-wide">
                    Core Technologies
                </h3>

                <div className="flex flex-wrap justify-center gap-10 text-5xl">
                    <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
                        <SiPython className="text-[#3776AB] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
                        <SiC className="text-[#00599C] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate">
                        <FaJava className="text-[#E76F00] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
                        <RiFlutterFill className="text-[#02569B] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(6)} initial="initial" animate="animate">
                        <SiDart className="text-[#0175C2] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(4)} initial="initial" animate="animate">
                        <SiFirebase className="text-[#FFCA28] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
                        <SiMysql className="text-[#00758F] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
                        <RiReactjsLine className="text-[#61DAFB] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate">
                        <RiHtml5Line className="text-[#E34F26] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
                        <RiCss3Line className="text-[#1572B6] text-7xl" />
                    </motion.div>
                </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}>
                <h3 className="mb-10 text-center text-xl text-stone-400 tracking-wide">
                    Development Tools
                </h3>

                <div className="flex flex-wrap justify-center gap-10 text-5xl">
                    <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate">
                        <RiGitBranchLine className="text-[#F05032] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(3)} initial="initial" animate="animate">
                        <VscVscode className="text-[#007ACC] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(5)} initial="initial" animate="animate">
                        <SiAndroidstudio className="text-[#3DDC84] text-7xl" />
                    </motion.div>

                    <motion.div variants={iconVariants(2)} initial="initial" animate="animate">
                        <SiFigma className="text-[#A259FF] text-7xl" />
                    </motion.div>
                </div>
            </motion.div>
        </section>

    );
};

export default Technologies;
