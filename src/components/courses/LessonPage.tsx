import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import LessonsSection from './LessonsSection';

export default function LessonPage() {

  const location = useLocation();
  const { course } = location.state;

  const { lessonSlug } = useParams();
  return (
    <main className=" px-0 flex flex-col justify-center py-1 gap-2">
      <h1>{course}</h1>
      <div className=' aspect-video ' >
        <iframe
          className=' h-full w-full '
          src="https://www.youtube.com/embed/8F7Q-4PZCjA?si=TfvpHErVNfrXIwrL"
          width="100%"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>

      <LessonsSection />
    </main>
  )
}
