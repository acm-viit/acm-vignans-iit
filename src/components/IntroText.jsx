import React from 'react'
import { motion } from "framer-motion"

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        }
    }
}

const singleWord = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8
        }
    }
}

const IntroText = ({ text, className = "" }) => {
    return (
        <div className=' overflow-hidden sm:py-0'>
            <motion.h1
                className={`text-dark font-bold capitalize text-8xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-2xl xs:text-[16px]  dark:text-light ${className}`}
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(" ").map((word, index) =>
                    <motion.span key={word + '-' + index} className='inline-block px-0' variants={singleWord}>
                        {word}&nbsp;
                    </motion.span>
                )}
            </motion.h1>
        </div>
    )
}

export default IntroText