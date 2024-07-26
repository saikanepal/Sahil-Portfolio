import React, { useState } from 'react';
import Portfolio from './Components/Portfolio/Portfolio';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`App min-h-screen relative ${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300 ease-in-out`}>
      <button
        className={`fixed z-50 top-2 right-2 sm:top-4 sm:right-4 p-2 rounded-full border border-gray-300 shadow-lg transition-colors duration-300 ease-in-out focus:outline-none ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <FaSun className="text-yellow-400 text-md sm:text-xl" /> : <FaMoon className="text-gray-800 text-md sm:text-xl" />}
      </button>

      <AnimatePresence>
        <motion.div
          key={darkMode ? 'dark' : 'light'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="min-h-screen"
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
