import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaHeart, FaDatabase, FaComment, FaShare, FaTimes, FaBookmark } from 'react-icons/fa';
import { FaJs, FaServer,FaHtml5, FaPython, FaCss3Alt, FaJava, FaReact, FaNodeJs, FaJira, FaLinux, FaAws, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa';
import { SiPostgresql, SiNextdotjs, SiBootstrap, SiGraphql, SiMongodb, SiRedis, SiJenkins, SiTailwindcss, SiDevexpress, SiSpringboot } from 'react-icons/si';
import Language from '../../Assets/languages.png';
import devops from '../../Assets/devops.png';
import framework from '../../Assets/framework.png';
import database from '../../Assets/database.png';
import others from '../../Assets/others.png';
import tools from '../../Assets/tools.png';
import { GiAbstract016 } from 'react-icons/gi'; // Placeholder icon

const categories = [
    { title: 'Languages', icon: <FaJs size={60} />, image: Language },
    { title: 'Frameworks', icon: <FaReact size={60} />, image: framework },
    { title: 'Databases', icon: <SiPostgresql size={60} />, image: database },
    { title: 'Other', icon: <FaGitAlt size={60} />, image: others },
    { title: 'DevOps', icon: <FaAws size={60} />, image: devops },
    { title: 'Tools', icon: <FaFigma size={60} />, image: tools },
];

const skills = {
    Languages: [
        {
            name: 'JavaScript',
            icon: <FaJs size={40} />,
            color: '#F7DF1E',
            specialized: true
        },
        {
            name: 'Python',
            icon: <FaPython size={40} />,
            color: '#306998'
        },
        {
            name: 'Java',
            icon: <FaJava size={40} />,
            color: '#007396',
            specialized: true
        },
        {
            name: 'HTML',
            icon: <FaHtml5 size={40} />,
            color: '#E34F26',
        },
        {
            name: 'CSS',
            icon: <FaCss3Alt size={40} />,
            color: '#1572B6',
        },
    ],
    Frameworks: [
        {
            name: 'React',
            icon: <FaReact size={40} />,
            color: '#61DBFB',
            specialized: true
        },
        {
            name: 'Next.js',
            icon: <SiNextdotjs size={40} />,
            color: '#000000',
            specialized: true
        },
        {
            name: 'React Native',
            icon: <FaReact size={40} />,
            color: '#61DBFB',
        },

        {
            name: 'Express.js',
            icon: <SiDevexpress size={40} />,
            color: '#68A063',
            specialized: true
        },
        {
            name: 'Spring Boot',
            icon: <SiSpringboot size={40} />,
            color: '#6DB33F',
            specialized: true
        },
        {
            name: 'Node.js',
            icon: <FaNodeJs size={40} />,
            color: '#68A063',
        },
        {
            name: 'Tailwind CSS',
            icon: <SiTailwindcss size={40} />,
            color: '#06B6D4',
            specialized: true
        },
        {
            name: 'Bootstrap',
            icon: <SiBootstrap size={40} />,
            color: '#7952B3',
        },
   
    ],
    Databases: [
        {
            name: 'MongoDB',
            icon: <SiMongodb size={40} />,
            color: '#47A248',
            specialized: true
        },
        {
            name: 'SQL',
            icon: <FaDatabase size={40} />,
            color: '#336791'
        },
        {
            name: 'Redis',
            icon: <SiRedis size={40} />,
            color: '#DC382D',
            specialized: true
        },
        {
            name: 'PostgreSQL',
            icon: <SiPostgresql size={40} />,
            color: '#336791'
        },
    ],
    Other: [
        {
            name: 'Microservices',
            icon: <GiAbstract016 size={40} />,
            color: '#4F4A45'
        },
        {
            name: 'Agile Methodologies',
            icon: <GiAbstract016 size={40} />,
            color: '#4F4A45'
        },
        {
            name: 'REST APIs',
            icon: <GiAbstract016 size={40} />,
            color: '#4F4A45'
        },
        {
            name: 'GraphQL',
            icon: <SiGraphql size={40} />,
            color: '#E10098'
        },
        {
            name: 'CI/CD',
            icon: <FaServer size={40} />,
            color: '#FF5722'
        },
    ],
    DevOps: [
        {
            name: 'Docker',
            icon: <FaDocker size={40} />,
            color: '#0db7ed',
            specialized: true
        },
        {
            name: 'AWS S3',
            icon: <FaAws size={40} />,
            color: '#FF9900',
            specialized: true
        },
        {
            name: 'AWS EC2',
            icon: <FaAws size={40} />,
            color: '#FF9900',
            specialized: true
        },
        {
            name: 'AWS SNS',
            icon: <FaAws size={40} />,
            color: '#FF9900'
        },
        {
            name: 'AWS SES',
            icon: <FaAws size={40} />,
            color: '#FF9900',
            specialized: true
        },
        {
            name: 'Jenkins',
            icon: <SiJenkins size={40} />,
            color: '#D24939'
        },
    ],
    Tools: [
        {
            name: 'Git',
            icon: <FaGitAlt size={40} />,
            color: '#F05032',
            specialized: true
        },
        {
            name: 'Linux',
            icon: <FaLinux size={40} />,
            color: '#FCC624'
        },
        {
            name: 'Figma',
            icon: <FaFigma size={40} />,
            color: '#A259FF',
            specialized: true
        },
        {
            name: 'Jira',
            icon: <FaJira size={40} />,
            color: '#0052CC'
        },
    ],
};
const SkillsSection = ({ darkMode }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showComments, setShowComments] = useState(false);
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

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: true,
    };

    return (
        <div className={`pb-4  ${darkMode ? 'bg-black text-gray-400' : 'bg-white text-black'}`}>
            {/* <h2 className="text-3xl font-bold  text-center">Skills</h2> */}

            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-3 gap-2 "
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedCategory(category)}
                        className={`relative cursor-pointer group ${darkMode ? 'border-2 rounded-none border-gray-400' : 'border-gray-900'}`}
                        style={{ aspectRatio: '1 / 1' }}
                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{ backgroundImage: `url(${category.image})`, backgroundSize: 'cover', position: 'relative' }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-xl font-bold text-gray-200 opacity-0 group-hover:opacity-100">{category.title}</h2>
                        </motion.div>
                    </motion.div>
                ))}

            </motion.div>

            {selectedCategory && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative`}>
                        <button
                            className={`absolute top-2 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedCategory(null)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-10 h-10 bg-${darkMode ? 'gray-900' : 'gray-300'} rounded-full`}>
                                <motion.div
                                    className="w-full h-full flex items-center rounded-full justify-center"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {selectedCategory.icon}
                                </motion.div>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold">{selectedCategory.title}</h2>
                                <p className="text-xs text-gray-500">5 days ago</p>
                            </div>
                        </div>
                        <Slider {...carouselSettings}>
                            {skills[selectedCategory.title].map((skill, index) => (
                                <div key={index} className="p-4">
                                    <div className="flex flex-col items-center mb-4">
                                        <div className="mb-2 text-center">
                                            {skill.icon ? (
                                                <motion.div
                                                    whileHover={{ scale: 1.2 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {skill.icon}
                                                </motion.div>
                                            ) : (
                                                <div className={`w-20 h-20 flex items-center justify-center bg-${darkMode ? 'gray-900' : 'gray-200'} rounded-full mb-2`}>
                                                    <span className="text-xl">{skill.name}</span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                                        {skill.specialized && (
                                            <div className={`mt-2 bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full`}>Specialized</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaComment className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaShare className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                            </div>
                            <FaBookmark className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                        </div>
                        <p className="text-sm mb-2"><span className="font-semibold">User Name</span> Lorem ipsum dolor sit amet <span className="text-blue-500">#template</span></p>

                        {/* Comments Section */}
                        <div className="mb-4">
                            {showComments ? (
                                <>
                                    <p className="text-sm text-gray-500 mb-4">
                                        {skills[selectedCategory.title].length} {skills[selectedCategory.title].length > 1 ? 'comments' : 'comment'}
                                    </p>
                                    <div className={`custom-scrollbar max-h-80 overflow-y-auto space-y-2 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                                        {skills[selectedCategory.title].map((skill) => (
                                            <div key={skill.name} className={`p-3 rounded-lg flex items-start space-x-3 ${darkMode ? 'bg-black' : 'bg-gray-100'}`}>
                                                <div className={`flex-shrink-0 w-8 h-8 ${darkMode ? 'bg-black' : 'bg-gray-200'} rounded-full flex items-center justify-center text-sm font-semibold`}>
                                                    {skill.icon ? (
                                                        skill.icon
                                                    ) : (
                                                        <span>{skill.name.charAt(0)}</span>
                                                    )}
                                                </div>
                                                <div className="flex-1 flex flex-row">
                                                    <div className="flex items-center space-x-1">
                                                        <span className="font-semibold">{skill.name}</span>
                                                        <span className="text-gray-500">:</span>
                                                    </div>
                                                    <p className="text-xs mt-1 px-2 text-gray-600">{skill.name}</p>
                                                    <div className="flex  right-10 items-center mt-1 space-x-2 text-xs text-gray-500">
                                                        {skill.specialized &&
                                                            <button className="flex items-center space-x-1">
                                                                <span className={`text-${darkMode ? 'gray-400' : 'gray-600'}`}>❤️</span>
                                                                {/* <span>10</span> */}
                                                            </button>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        className="mt-4 text-blue-500"
                                        onClick={() => setShowComments(false)}
                                    >
                                        Hide Comments
                                    </button>
                                </>
                            ) : (
                                <button
                                    className="text-blue-500"
                                    onClick={() => setShowComments(true)}
                                >
                                    View all comments
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsSection;
