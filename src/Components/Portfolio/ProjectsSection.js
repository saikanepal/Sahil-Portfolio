import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight, FaGithub, FaUser, FaHeart, FaComment, FaShare, FaTimes, FaBookmark, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiExpress, SiMongodb, SiFigma, SiNextdotjs, SiSpringboot, SiBootstrap, SiSocketdotio, SiTailwindcss, SiNodedotjs } from 'react-icons/si';
import Project1 from '../../Assets/CEO.png';
import Project2 from '../../Assets/CEO.png';
import Project3 from '../../Assets/CEO.png';

//saika nepal
import s0 from '../../Assets/Saika/s0.png';
import s1 from '../../Assets/Saika/s1.png';
import s2 from '../../Assets/Saika/s2.png';
import s3 from '../../Assets/Saika/s3.png';
import s4 from '../../Assets/Saika/s4.png';
import s5 from '../../Assets/Saika/s5.png';
import s6 from '../../Assets/Saika/s6.png';

//shopat banau
import b00 from '../../Assets/Banau/b00.png';
import b0 from '../../Assets/Banau/b0.png';
import b1 from '../../Assets/Banau/b1.png';
import b2 from '../../Assets/Banau/b2.png';
import b3 from '../../Assets/Banau/b3.png';
import b4 from '../../Assets/Banau/b4.png';
import b5 from '../../Assets/Banau/b5.png';
import b6 from '../../Assets/Banau/b6.png';
import b7 from '../../Assets/Banau/b7.png';
import b8 from '../../Assets/Banau/b8.png';
import b9 from '../../Assets/Banau/b9.png';
import b10 from '../../Assets/Banau/b10.png';
import b11 from '../../Assets/Banau/b11.png';

//cs2
import cs2 from '../../Assets/cs2/cs2.jpg'

//valley
import valley from '../../Assets/valley/valley.jpg'

//LIA
import LIA from '../../Assets/LIA/LIA.jpg'

const ProjectSection = ({ darkMode }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const projects = [
        {
            title: 'Shop At Banau',
            date: 'April 2024 - Present',
            location: 'Online',
            description: [
                '🛒 Shop At Banau is a platform where anyone can build their own ecommerce website with ease and for free. It features unlimited customization, analytics, order management, and staff management. This platform has generated $8,000 and served 20k+ customers.',
                'The project involved creating a user-friendly interface for easy website building and management',
                '💼 Created a user-friendly interface using React, ensuring a seamless website building and management experience. Implemented responsive design for compatibility across devices.',
                '📊 Integrated real-time analytics and custom reports to provide users with up-to-date insights into their sales and customer interactions. Utilized WebSocket and visualization libraries for live data updates and interactive charts.',
                '🔐 Implemented secure payment gateways like Stripe and PayPal, ensuring secure transactions through encryption and token-based authentication while maintaining PCI compliance.',
            ],
            link: 'https://shopatbanau.com',
            github: 'https://github.com/saikanepal/epasal_front',
            githubServer: 'Private',
            images: [b00, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11],
            techStack: [<SiReact title="React" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />]
        },
        {
            title: 'Saika Nepal',
            date: 'March 2022 - Present',
            location: 'Online',
            description: [
                '🏢 Saika Nepal has- a corporate-style landing page with an admin dashboard. It was developed to provide a professional online presence with a focus on UI/UX design principles, built using React, Express.js, and MongoDB.',
                '🎨 Designed a visually appealing and user-friendly landing page using Figma for high-fidelity mockups and React for development. Implemented responsive design with CSS-in-JS or Tailwind CSS for consistent styling.',
                '🛠 Developed an admin dashboard with React and integrated it with backend APIs for content, user, and analytics management. Used Express.js and MongoDB for backend operations.',
                '📱 Ensured responsive design across devices and browsers, utilizing media queries and responsive grid systems for cross-browser compatibility.',
            ],
            link: 'https://saikanepal.com',
            github: 'https://github.com/saikanepal/Saika_Nepal_Front_end',
            githubServer: 'Private',
            images: [s0, s1, s2, s3, s4, s5, s6],
            techStack: [<SiReact title="React" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiFigma title="Figma" />]
        },
        {
            title: 'CsTogether',
            date: 'Sep 2023 - Dec 2023',
            location: 'Offline',
            description: [
                '💻 **CsTogether** is a full-stack web application designed for collaborative web projects. It utilizes Agile methodology, custom hooks, and reusable front-end components with Next.js, alongside microservices with Spring Boot for CRUD operations.',
                '🤝 Facilitated collaborative coding and project management using Agile methodology. Developed custom React hooks for state management and reusable components for a modular codebase.',
                '⚡ Integrated Next.js for server-side rendering, improving performance and SEO. Utilized static and dynamic routing along with API routes for server-side logic.',
                '🔄 Utilized Spring Boot for efficient backend development and microservices architecture. Created RESTful APIs for communication between services, focusing on scalability and fault tolerance.',
            ],
            link: 'https://cstogether.netlify.app',
            github: 'https://github.com/skarn03/cstog',
            githubServer: 'https://github.com/skarn03/cstogback',
            images: [cs2, cs2],
            techStack: [<SiNextdotjs title="Next.js" />, <SiSpringboot title="Spring Boot" />, <SiMongodb title="MongoDB" />]
        },
        {
            title: 'Valley',
            date: 'Apr 2023 -  July 2023',
            location: 'Offline',
            description: [
                '🌐 **Valley** is a full-stack social networking site designed to enhance user interaction. Utilizing React.js and Bootstrap for the front-end, it features a scalable backend with Express.js and MongoDB, and real-time communication through Socket.io.',
                '🗨 Developed a social networking platform with features like user profiles, messaging, and posts using React.js. Implemented interactive and dynamic UI elements.',
                '🔔 Implemented real-time notifications and chat functionality using Socket.io, ensuring smooth user interactions with minimal latency.',
                '🔧 Focused on creating a scalable backend infrastructure with Express.js and MongoDB, designed to handle user data and high traffic efficiently.',
            ],
            link: 'https://vall3y.netlify.app',
            github: 'https://github.com/skarn03/Valley_Client-',
            githubServer: 'https://github.com/skarn03/Valley/tree/main/server',
            images: [valley, valley],
            techStack: [<SiReact title="React" />, <SiBootstrap title="Bootstrap" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />, <SiSocketdotio title="Socket.io" />]
        },
        {
            title: 'Learn It All',
            date: 'March 2022 - April 2022',
            location: 'Offline',
            description: [
                '💬 **Learn It All** is a chatroom web application designed for instant topic discussion. With a seamless user interface built using React and Tailwind CSS, it features a robust backend with Node.js and Express.js, coupled with a NoSQL database.',
                '🗣 Created a platform for users to join chatrooms and discuss various topics, implementing a clean and responsive UI with React and Tailwind CSS.',
                '🌟 Implemented a real-time chat system using WebSocket or similar technology, ensuring real-time messaging with a user-friendly interface.',
                '🔒 Developed a robust backend with Node.js and Express.js to handle user authentication, chat functionality, and data storage, integrating MongoDB for database management.',
            ],
            link: 'https://learnitall.netlify.app',
            github: 'https://github.com/skarn03/LIA-MERN-CLIENT',
            githubServer: 'https://github.com/skarn03/LIA-MERN',
            images: [LIA, LIA],
            techStack: [<SiReact title="React" />, <SiTailwindcss title="Tailwind CSS" />, <SiNodedotjs title="Node.js" />, <SiExpress title="Express" />, <SiMongodb title="MongoDB" />]
        },
    ];



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
        appendDots: dots => (
            <div>
                <ul className={darkMode ? 'dark-dots' : 'light-dots'}>{dots}</ul>
            </div>
        ),
    };

    return (
        <div className={`pb-4 ${darkMode ? 'bg-black text-gray-400' : 'bg-white text-black'}`}>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-3 gap-2"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        onClick={() => setSelectedProject(project)}
                        className={`relative cursor-pointer group ${darkMode ? 'border-2 border-gray-400' : 'border-gray-900'}`}
                        style={{
                            aspectRatio: '1 / 1',
                        }}
                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                backgroundImage: `url(${project.images[0]})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                position: 'relative'
                            }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-xl font-bold text-gray-200 opacity-0 group-hover:opacity-100">{project.title}</h2>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative max-h-screen overflow-y-auto`}>
                        <button
                            className={`absolute top-2 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedProject(null)}
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
                                    <img src={selectedProject.images[0]}></img>
                                </motion.div>
                            </div>
                            <div>
                                <h2 className="text-sm font-semibold">{selectedProject.title}</h2>
                                <p className="text-xs text-gray-500">{selectedProject.date}</p>
                                <p className={`text-xs ${selectedProject.location === 'Online' ? 'text-green-500' : 'text-red-500'}`}>
                                    {selectedProject.location}
                                </p>
                            </div>

                        </div>
                        <Carousel {...carouselSettings}>
                            {selectedProject.images.map((image, index) => (
                                <div key={index} className="p-4">
                                    <img src={image} alt={`Project ${index + 1}`} className="w-full h-screen object-contain rounded-lg max-h-96" />
                                </div>
                            ))}
                        </Carousel>
                        {selectedProject.link && selectedProject.location === 'Online' && (
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center mt-4 text-sm text-blue-500 hover:underline"
                            >
                                <FaExternalLinkAlt className="mr-1" /> Visit Website
                            </a>
                        )}
                        <div className=' flex flex-col sm:flex-row justify-between '>
                            {selectedProject.github && (
                                <div className="mt-4 flex justify-between items-center">
                                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center">
                                        <FaGithub size={20} className="mr-1 text-[8px]" /> Client Side Code
                                    </a>
                                </div>
                            )}
                            {selectedProject.githubServer && (
                                <div className="mt-4 flex justify-between items-center">
                                    {selectedProject.githubServer === 'Private' ? (
                                        <span className="text-red-200 dark:text-red-400 flex items-center">
                                            <FaGithub size={20} className="mr-1 text-sm" /> Private Server Repository
                                        </span>
                                    ) : (
                                        <a
                                            href={selectedProject.githubServer}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white flex items-center"
                                        >
                                            <FaGithub size={20} className="mr-1" /> Server Side Code
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaComment className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaShare className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-sm font-semibold mb-2">Tech Stack</h3>
                                <div className="flex space-x-2">
                                    {selectedProject.techStack.map((icon, index) => (
                                        <span key={index} className="text-xl">
                                            {icon}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                        <p className="text-md mb-2"><span className="font-bold">{selectedProject.title}</span></p>

                        {/* Comments Section */}
                        <div className="mb-4">
                            <h3 className="text-sm font-bold mb-2">Project Details:</h3>
                            <ul className="list-disc list-inside">
                                {/* {selectedProject.description.map((desc, index) => (
                                    <li key={index} className="text-sm mb-1">{desc}</li>
                                ))} */}
                                <span className="text-sm mb-1">{selectedProject.description[0]}</span>

                            </ul>
                        </div>


                        <div className="flex justify-between mt-4">
                            <button
                                className="text-sm text-blue-500 hover:underline"
                                onClick={() => setShowComments(!showComments)}
                            >
                                {showComments ? 'Hide Comments' : 'Show Comments'}
                            </button>
                        </div>
                        {showComments && (
                            <div className="mt-4">
                                {/* Comments list */}
                                <div className="space-y-4">
                                    {selectedProject.description.map((comment, index) => (
                                        index > 0 &&
                                        < div key={index} className="flex items-start space-x-4" >
                                            <div className={`w-10 h-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-300'} rounded-full border-2 border-gray-500 flex items-center justify-center`}>
                                                <FaUser className={`text-${darkMode ? 'gray-300' : 'gray-800'} text-xl`} />
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500"> Detail {index}</p>
                                                <p className="text-sm">{comment}</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default ProjectSection;
