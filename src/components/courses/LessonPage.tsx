import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import LessonCard from './LessonCard';
import { Chapter, Lesson } from '../../../types/course';
import { slugify } from '../../../utils/slugify';

export default function LessonPage() {


  let chNum: number = -1;
  let lesNum = -1;

  const navigator = useNavigate();
  const location = useLocation();
  const { course, chapterNumber, lessonNumber } = location.state;
  const currentLesson = course.chapters[chapterNumber].lessons[lessonNumber];

  return (
    <main className=" px-0 flex flex-col justify-center py-1 gap-2">
      <h1>{course.title}</h1>
      <div className=' aspect-video ' >
        <iframe
          className=' h-full w-full '
          src={currentLesson.videoURL}
          width="100%"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; modestbranding=0" allowFullScreen>
        </iframe>
      </div>
      <section className=" px-2 flex flex-col items-start py-1 gap-2">
        <button className='' type="button" onClickCapture={() => navigator(-1)}> &#9664;Back</button>
        <h1>{currentLesson.title}</h1>
        {
          course.chapters.map((chapter: Chapter) => {

            lesNum = -1;
            chNum++
            return (<>
              <h1>{chapter.title}</h1>
              {
                chapter.lessons.map((lesson: Lesson) => {
                  lesNum++
                  return <LessonCard course={course} lesson={lesson} chapterNumber={chNum} lessonNumber={lesNum}
                    currentlyPlaying={chapterNumber === chNum && lessonNumber === lesNum} />
                }
                )
              }
            </>)
          })
        }
      </section>
    </main >
  )
}
