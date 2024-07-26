import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaEnvelope, FaTools } from 'react-icons/fa';

const HomeSection = ({ setActiveSection, darkMode }) => {
    const sections = [
        // { title: 'About', icon: <FaUser /> },
        { title: 'Skills', icon: <FaTools /> },
        { title: 'Employment', icon: <FaBriefcase /> },
        { title: 'Education', icon: <FaGraduationCap /> },
        { title: 'Projects', icon: <FaProjectDiagram /> },
        { title: 'Contact', icon: <FaEnvelope /> },
    ];

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, duration: 0.4 }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 50, damping: 10 }
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className={`grid grid-cols-3 gap-4   ${darkMode ? 'bg-black' : 'bg-white'}`}
        >
            {sections.map((section, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    onClick={() => setActiveSection(section.title)}
                    className={`relative group border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg flex items-center justify-center overflow-hidden`}
                    style={{ aspectRatio: '1 / 1' }} // Ensures the divs are square
                >
                    <div className="flex flex-col items-center">
                        <div className="text-4xl mb-2">{section.icon}</div>
                        <h3 className=' text-sm sm:text-lg'>{section.title}</h3>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <h2 className="text-lg font-bold text-white">{section.title}</h2>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default HomeSection;
