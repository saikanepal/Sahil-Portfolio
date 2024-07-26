import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaTimes, FaPause, FaHeart, FaPaperPlane } from 'react-icons/fa';

const highlightsData = [
    {
        title: 'Highlight 1',
        username: 'user1',
        stories: [
            'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiJDQRH0UXtImG1GC3RHaFyFMopRD4jAIALA&s',
        ],
    },
    {
        title: 'Highlight 2',
        username: 'user2',
        stories: [
            'https://i.pinimg.com/474x/b2/60/2a/b2602abcc595143c9227610be430cfb6.jpg',
            'https://e0.pxfuel.com/wallpapers/429/144/desktop-wallpaper-aesthetic-amazing-iphone-phone-dark-amazing-iphone-ae-dark-phone-dark-aesthetic-dark-dark-scenery.jpg',
        ],
    },
];

const Highlight = ({ highlight, onClose }) => {
    const [isPaused, setIsPaused] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        autoplay: !isPaused,
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto p-4">
                <button
                    className="absolute top-4 right-4 text-white text-2xl"
                    onClick={onClose}
                >
                    <FaTimes />
                </button>
                <button
                    className="absolute top-4 right-16 text-white text-2xl"
                    onClick={() => setIsPaused(!isPaused)}
                >
                    <FaPause />
                </button>
                <div className="absolute top-4 left-4 text-white text-lg">
                    {highlight.username}
                </div>
                <Slider {...settings}>
                    {highlight.stories.map((story, index) => (
                        <div key={index} className="w-full h-full">
                            <img
                                src={story}
                                alt={`story-${index}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </Slider>
                <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder={`Reply to ${highlight.username}`}
                        className="flex-1 px-4 py-2 rounded-full bg-gray-800 text-white outline-none"
                    />
                    <FaHeart className="text-white text-2xl" />
                    <FaPaperPlane className="text-white text-2xl" />
                </div>
            </div>
        </div>
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
        <div className="flex space-x-4 p-4 overflow-x-auto">
            {highlightsData.map((highlight, index) => (
                <div
                    key={index}
                    onClick={() => handleHighlightClick(highlight)}
                    className="cursor-pointer text-center"
                >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-pink-500 overflow-hidden relative">
                        <img
                            src={highlight.stories[0]}
                            alt={highlight.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
                    </div>
                    <p className="text-white text-xs sm:text-sm mt-2">
                        {highlight.title}
                    </p>
                </div>
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
