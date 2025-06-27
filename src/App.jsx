import React, {useState} from "react"; 
import { BrowserRouter as  Router,Routes, Route } from "react-router-dom";

//Pages

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AdmissionPage from"./pages/AdmissionPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header/Header";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponent";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

function App(){
  
  const [showPopup, setShowPopup] =useState(true);
  const handleClosePopup = () => {
     setShowPopup(false);
  };


  return (
    <>
    <div>
        {/* Yousr main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Snehal Dhanaji Lagare"
          studentPhotoUrl="/images/snehal lagare.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    <div>
      <Router>
      
      <Routes>
        <Route path="/"element={<HomePage/>}/>
        <Route path="/about"element={<AboutPage/>}/>
        <Route path="/apply"element={<AdmissionPage/>}/>
        <Route path="/courses"element={<CoursesPage/>}/>
        <Route path="/contact"element={<ContactPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <ChatbotComponent/>  
      </Router>

    </div>
    </>
  );
};

export default App;
