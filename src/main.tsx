import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CourseDetailsPage from './components/courses/CourseDetailsPage.tsx';
import CoursesPage from './components/courses/CoursesPage.tsx';
import LessonPage from './components/courses/LessonPage.tsx';
import './index.css';
import ProfilePage from './components/ProfilePage.tsx';
import App from './App.tsx';
import LandingPage from './components/LandingPage.tsx';

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseSlug" element={<CourseDetailsPage />} />
        <Route path="/courses/:courseSlug/:lessonSlug" element={<LessonPage />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
