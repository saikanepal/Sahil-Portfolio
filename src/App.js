import React, { useState } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
import { FaSun, FaMoon, FaMusic, FaPlay, FaVolumeUp, FaPause } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [playing, setPlaying] = useState(false); // Control music playback
  const [volume, setVolume] = useState(0.1); // Control music volume
  const [showControls, setShowControls] = useState(false); // Toggle music controls

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const togglePlay = () => {
    setPlaying(prev => !prev);
  };

  const increaseVolume = () => {
    setVolume(prev => Math.min(prev + 0.1, 1));
  };

  const decreaseVolume = () => {
    setVolume(prev => Math.max(prev - 0.1, 0));
  };

  const toggleControls = () => {
    setShowControls(prev => !prev);
  };

  return (
    <div className="App min-h-screen relative">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=OCPhoF1ZFfU" // Replace with your audio file URL
        playing={playing}
        loop
        volume={volume}
        className="fixed hidden top-1 left-1 z-[-1] w-[0px] h-[0px]" // Keep it hidden
      />
      <div className="fixed top-[4px] left-[2px] sm:top-4 sm:left-4 flex flex-col items-start space-y-2">
        <div
          className={`p-2 flex flex-row justify-center items-center rounded-full border border-gray-300 shadow-lg transition-opacity duration-300 ease-in-out ${showControls ? 'opacity-100' : 'opacity-50'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <button
            className="p-1 sm:p-2 rounded-full focus:outline-none"
            onClick={toggleControls}
          >
            <FaMusic className="text-sm sm:text-xl" />
          </button>
          {showControls && (
            <div className="flex flex-row justify-center pb-2 pl-2 items-center space-x-2 mt-2">
              <button
                className="p-2 rounded-full bg-blue-500 text-white transition-colors duration-300 ease-in-out focus:outline-none"
                onClick={togglePlay}
              >
                {playing ? <FaPause className="text-[8px] sm:text-xl" /> : <FaPlay className="text-sm sm:text-xl" />}
              </button>

              <button
                className="p-2 rounded-full bg-blue-500 text-white transition-colors duration-300 ease-in-out focus:outline-none"
                onClick={decreaseVolume}
              >
                <FaVolumeUp className="text-[8px] sm:text-xl transform rotate-180" />
              </button>
              <button
                className="p-2 rounded-full bg-blue-500 text-white transition-colors duration-300 ease-in-out focus:outline-none"
                onClick={increaseVolume}
              >
                <FaVolumeUp className="text-[8px] sm:text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        className={`fixed top-[4px] right-[2px] sm:top-4 sm:right-4 p-2 rounded-full border border-gray-300 shadow-lg transition-colors duration-300 ease-in-out focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun className="text-yellow-400 text-xl sm:text-2xl" /> : <FaMoon className="text-gray-800 text-2xl" />}
      </button>

      <AnimatePresence>
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300 ease-in-out`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <Portfolio darkMode={darkMode} />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
