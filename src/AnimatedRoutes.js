import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import WhatSwerri from "./pages/Swerri/What";
import SwerriCircle from "./pages/Swerri/Circles";
import SwerriMaster from "./pages/Swerri/Master";
import About from "./pages/About";
import Loader from "./components/Loader";
import SwerriToken from './pages/SwerriToken/SwerriToken';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.3, ease: "easeIn" } },
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer); 
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/home"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about-us"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/swerri/what"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <WhatSwerri />
                </motion.div>
              }
            />
            <Route
              path="/swerri/circles"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <SwerriCircle />
                </motion.div>
              }
            />
            <Route
              path="/swerri/master"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <SwerriMaster />
                </motion.div>
              }
            />
            <Route
              path="/swet-token"
              element={
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <SwerriToken />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

export default AnimatedRoutes;
