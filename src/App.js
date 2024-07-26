import React, { useState } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
import { FaSun, FaMoon, FaMusic, FaPlay, FaVolumeUp, FaPause } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [playing, setPlaying] = useState(false); // Control music playback
  const [volume, setVolume] = useState(0.2); // Control music volume
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
