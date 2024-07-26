import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaHeart, FaComment, FaShareSquare, FaBookmark } from 'react-icons/fa';
import { BiBook, BiBrain, BiMedal, BiStar, BiLayer } from 'react-icons/bi';
import { motion } from 'framer-motion';
import e1 from '../../Assets/e1.jpg';
import e2 from '../../Assets/e2.jpg';
import e3 from '../../Assets/e3.jpg';
import e4 from '../../Assets/e4.png';
import emu from '../../Assets/emu.jpg'

const educationData = [
    {
        institution: 'Eastern Michigan University 🏫',
        degree: 'Bachelor of Science in Computer Science 🎓',
        major: 'Computer Science 💻',
        minor: 'Mathematics 📐',
        GPA: '3.87 ⭐',
        startYear: 2022,
        endYear: 2026,
        courses: [
            'Data Structures 📚',
            'Algorithms 🧠',
            'Web Development 📄',
            'Front-End Development (HTML, CSS, JavaScript) 🌐',
            'Back-End Development (Node.js, Express.js) 🔧',
            'API Design and Development 🧩',
            'Cloud Computing (AWS, Azure, Google Cloud) ☁️',
            'Version Control (Git, GitHub) 🔄'
        ]
        ,
        images: [
            emu, e1, e2, e3, e4
        ],
        caption: 'My journey at Eastern Michigan University was enriching and transformative 🌟.',
    },
    // Add more education data if needed
];



const EducationSection = ({ darkMode }) => {
    const [selectedEducation, setSelectedEducation] = useState(null);
    const [showComments, setShowComments] = useState(false);

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
        <div className={`pb-4 ${darkMode ? 'bg-black text-gray-400' : 'bg-white text-black'}`}>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                {educationData.map((education, index) => (
                    <motion.div
                        key={index}
                        className={`relative cursor-pointer group ${darkMode ? 'border-2 rounded-none border-gray-400' : 'border-gray-900'}`}
                        onClick={() => setSelectedEducation(education)}
                        style={{ aspectRatio: '1 / 1' }}
                    >
                        <motion.div
                            className={`w-full h-full flex items-center justify-center ${darkMode ? 'bg-black text-gray-600 border-gray-400' : 'bg-white text-black'} rounded-md`}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            style={{ backgroundImage: `url(${education.images[0]})`, backgroundSize: 'cover', width: '100%' }}
                        >
                            <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center group-hover:bg-opacity-60 transition-opacity rounded-xl"
                        >
                            <h2 className="text-xl font-bold text-gray-200 opacity-0 group-hover:opacity-100 text-center">{education.institution}</h2>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {selectedEducation && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className={`bg-${darkMode ? 'black' : 'white'} p-6 rounded-lg max-w-xl w-full relative`}>
                        <button
                            className={`absolute top-2 right-2 text-${darkMode ? 'gray-300' : 'gray-600'} hover:text-${darkMode ? 'gray-100' : 'gray-900'} transition-colors`}
                            onClick={() => setSelectedEducation(null)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <div className="flex items-center space-x-2 mb-4">
                            <img src={selectedEducation.images[0]} alt="Profile" className="w-10 h-10 rounded-full object-cover" />

                            <div>
                                <h2 className="text-sm font-semibold">{selectedEducation.institution}</h2>
                                <p className="text-xs text-gray-500">{`${selectedEducation.startYear} - ${selectedEducation.endYear}`}</p>
                            </div>
                        </div>
                        <Slider {...carouselSettings}>
                            {selectedEducation.images.map((image, index) => (
                                <div key={index} className="p-4">
                                    <img src={image} alt={`Education ${index}`} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            ))}
                        </Slider>
                        <div className="relative mb-4">
                            <div className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700" />
                        </div>

                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                <FaHeart className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                                <FaComment className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} onClick={() => setShowComments(!showComments)} />
                                <FaShareSquare className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                            </div>
                            <FaBookmark className={`text-${darkMode ? 'gray-400' : 'gray-600'}`} />
                        </div>
                        <div className="mb-4">
                            <p className="text-sm"><strong>{selectedEducation.institution}</strong> {selectedEducation.caption}</p>
                        </div>
                        {showComments ? (
                            <>
                                <div className={`custom-scrollbar max-h-80 overflow-y-auto space-y-2 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                                    <div className="p-4 space-y-2">
                                        <p className="text-sm flex items-start flex-wrap"><BiBook className="mr-2" /> <strong>Degree:</strong> <span className="break-words w-full">{selectedEducation.degree}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiBrain className="mr-2" /> <strong>Major:</strong> <span className="break-words w-full">{selectedEducation.major}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiLayer className="mr-2" /> <strong>Minor:</strong> <span className="break-words w-full">{selectedEducation.minor}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiStar className="mr-2" /> <strong>GPA:</strong> <span className="break-words w-full">{selectedEducation.GPA}</span></p>
                                        <p className="text-sm flex items-start flex-wrap"><BiMedal className="mr-2" /> <strong>Courses:</strong> <span className="break-words w-full">{selectedEducation.courses.join(', ')}</span></p>
                                    </div>
                                    <button
                                        className="mt-4 text-blue-500"
                                        onClick={() => setShowComments(false)}
                                    >
                                        Hide Comments
                                    </button>
                                </div>
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
            )}
        </div>
    );
};

export default EducationSection;
