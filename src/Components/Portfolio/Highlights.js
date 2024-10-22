import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaPause, FaPlay, FaHeart, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const highlightsData = [
    {
        title: 'Event',
        username: 'sahil_karn',
        stories: [
            'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L2pvYjE4NzItYmFja2dyb3VuZC1pY2VlLTAwMWIuanBn.jpg',
            'https://marketplace.canva.com/EAFq4LF-YJg/1/0/900w/canva-pink-watercolor-instagram-story-background-uS8QA4tnBqU.jpg',
        ],
    },
    {
        title: 'Meme 2',
        username: 'user2',
        stories: [
            'https://i.redd.it/ig5u8ke5qo421.png',
            'https://i.pinimg.com/736x/3d/8d/d8/3d8dd8fb5efdfd2ecedae9d47e1a1737.jpg',
        ],
    },
];

const Highlight = ({ highlight, onClose }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderKey, setSliderKey] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: !isPaused,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    const handleOverlayClick = (e) => {
        if (e.target.id === 'overlay') {
            onClose();
        }
    };

    const togglePause = () => {
        setIsPaused(!isPaused);
        setSliderKey(sliderKey + 1);  // Force re-render to reset autoplay
    };

    return (
        <motion.div
            id="overlay"
            className="fixed inset-0   bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={handleOverlayClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div 
                className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className="absolute top-4 left-4 text-white text-lg z-50">
                    {highlight.username}
                </div>
                <div className="absolute top-2 left-0 right-0 flex justify-center items-center z-50 px-2">
                    <div className="flex justify-between items-center w-full max-w-md md:max-w-lg">
                        {highlight.stories.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1 flex-1 mx-1 bg-white rounded-full ${index <= currentSlide ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="absolute top-4 right-4 text-white text-3xl z-50"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <button
                    className="absolute top-4 right-16 text-white text-3xl z-50"
                    onClick={togglePause}
                >
                    {isPaused ? <FaPlay /> : <FaPause />}
                </button>
                <Slider key={sliderKey} {...settings}>
                    {highlight.stories.map((story, index) => (
                        <div key={index} className="flex justify-center items-center h-full relative">
                            <motion.img
                                src={story}
                                alt={`story-${index}`}
                                className="w-full h-[calc(100vh-12rem)] object-cover max-w-md md:max-w-lg rounded-lg shadow-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-4 px-4 py-2 bg-black bg-opacity-50 rounded-full z-50">
                    <input
                        type="text"
                        placeholder={`Reply to ${highlight.username}`}
                        className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white outline-none"
                    />
                    <FaHeart className="text-white text-2xl" />
                    <FaPaperPlane className="text-white text-2xl" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const Highlights = () => {
    const [selectedHighlight, setSelectedHighlight] = useState(null);

    const handleHighlightClick = (highlight) => {
        setSelectedHighlight(highlight);
    };

    const handleClose = () => {
        setSelectedHighlight(null);
    };

    return (
        <div className="flex justify-center items-center mt-2 overflow-x-auto space-x-4 p-4">
            {highlightsData.map((highlight, index) => (
                <motion.div
                    key={index}
                    onClick={() => handleHighlightClick(highlight)}
                    className="cursor-pointer text-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-4 border-gray-500 overflow-hidden relative">
                        <img
                            src={highlight.stories[0]}
                            alt={highlight.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-4 border-black rounded-full"></div>
                    </div>
                    <p className="text-white text-xs sm:text-sm mt-2">
                        {highlight.title}
                    </p>
                </motion.div>
            ))}
            {selectedHighlight && (
                <Highlight
                    highlight={selectedHighlight}
                    onClose={handleClose}
                />
            )}
        </div>
    );
};

export default Highlights;
