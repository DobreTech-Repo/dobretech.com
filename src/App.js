import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Landing from "./pages/Landing";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Apply from "./pages/Apply";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Community from "./pages/Community";
import Certificate from "./pages/Certificate";
import EventDetail from "./pages/EventDetail";
import Modal from "./components/Modal";

// Dummy component for missing routes
import Dummy from "./pages/Dummy";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import Courses from "./pages/Courses";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='bg-white'>
      <Router>
        <ScrollToTop />
        <Header openModal={openModal} />
        {/* <GoogleAdsTracker /> */}
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/registration' element={<Apply />} />
          <Route exact path='/news' element={<News />} />
          <Route exact path='/news/:id' element={<NewsDetail />} />
          <Route exact path='/community' element={<Community />} />
          <Route exact path='/community/events/:id' element={<EventDetail />} />
          <Route exact path='/courses/:course_type' element={<Courses />} />
          <Route
            exact
            path='/certificate-verification'
            element={<Certificate />}
          />
          <Route exact path='*' element={<Dummy />} />
          {/* <Route exact path='/training' element={<Dummy />} />
          <Route exact path='/faqs' element={<Dummy />} />
          <Route exact path='/intro' element={<Dummy />} />
          <Route exact path='/privacypolicy' element={<Dummy />} />
          <Route exact path='/termsandconditions' element={<Dummy />} /> */}
        </Routes>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
        <Footer />
      </Router>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
