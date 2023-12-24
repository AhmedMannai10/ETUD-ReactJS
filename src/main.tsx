import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CoursesPage from './components/courses/CoursesPage.tsx'
import LecturePage from './components/courses/LecturePage.tsx'
import ProfilePage from './components/ProfilePage.tsx'
import LandingPage from './components/LandingPage.tsx'
import CourseDetailsPage from './components/courses/CourseDetailsPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="*" element={<div>404 not found</div>} />
        <Route path="/" element={<LandingPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:courseSlug" element={<CourseDetailsPage />} />
        <Route path="courses/:courseSlug/:lectureSlug" element={<LecturePage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
