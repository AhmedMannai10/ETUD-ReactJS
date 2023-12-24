import React from 'react'
import image from '../assets/images/thumbnail.jpg';
import { Course, Lecture } from "../../types/course.ts"
import CourseCard from './comman/CourseCard.tsx';

export default function LandingPage() {

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
    <main className=" flex flex-col justify-center py-2 gap-2">
      <h3>Welcom back, Ahmed!</h3>
      {
        courses.map((course) => {
          return (
            <CourseCard course={course} />
          );
        })
      }

    </main>
  )
}
