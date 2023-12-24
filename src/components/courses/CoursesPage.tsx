import React, { useState } from 'react'
import image from '../../assets/images/thumbnail.jpg';
import { Course } from '../../../types/course';
import CourseCard from '../comman/CourseCard';
import { Outlet } from 'react-router-dom';


export default function CoursesPage() {
  //TODO: fetch user data
  const [userName, setUserName] = useState("Ahmed");

  const courses: Course[] = [
    {
      thumbnail: image,
      title: "Equations",
      description: "Learn Algebra",
      category: "Math",
      lectures: []
    },
    {
      thumbnail: image,
      title: "Newton Laws",
      description: "Master the law of gravity",
      category: "Physics",
      lectures: [],
    }
  ]

  return (
    <main className="flex flex-col justify-center px-4 py-2 gap-2">
      {
        courses.map((course) => {
          return (
            <CourseCard course={course} />
          );
        })

      }
      <Outlet />
    </main>
  )
} 
