import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

export const FadeInUp = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={className}
    >
        {children}
    </motion.div>
);

export const FadeIn = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const ScaleIn = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerContainer = ({ children, className = "", delayChildren = 0.1, staggerChildren = 0.1 }) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
            hidden: { opacity: 0 },
            show: {
                opacity: 1,
                transition: {
                    delayChildren,
                    staggerChildren
                }
            }
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
        }}
        className={className}
    >
        {children}
    </motion.div>
);

export const HoverCard = ({ children, className = "" }) => (
    <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={className}
    >
        {children}
    </motion.div>
);

// 3D Tilt Effect Card
export const TiltCard = ({ children, className = "" }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        // Calculate center relative to element
        const xPct = (clientX - left) - width / 2;
        const yPct = (clientY - top) - height / 2;

        x.set(xPct);
        y.set(yPct);
    }

    // Map mouse position to rotation
    const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
    const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className={`transition-shadow duration-300 ${className}`}
        >
            <div style={{ transform: "translateZ(20px)" }} className="h-full">
                {children}
            </div>
        </motion.div>
    );
};

// Parallax Image Wrapper
export const Parallax = ({ children, className = "", offset = 50 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`}>
            <motion.div style={{ y }} className="w-full h-full absolute inset-0">
                {children}
            </motion.div>
        </div>
    );
};
