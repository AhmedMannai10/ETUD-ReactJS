import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LessonCard from './LessonCard';
import { Chapter, Course, Lesson } from '../../../types/course';

type PropsType = {
  course: Course,
  chapterNumber: number,
  lessonNumber: number,
}

export default function LessonsSection({ course, chapterNumber, lessonNumber }: PropsType) {


  let chNum = -1;
  let lesNum = -1;


  return (

    <section className=" px-2 flex flex-col items-start py-1 gap-2">
      {course.chapters.map((chapter: Chapter) => {

        lesNum = -1;
        chNum++;
        return (<>
          <h1>{chapter.title}</h1>
          {chapter.lessons.map((lesson: Lesson) => {
            lesNum++;
            return <LessonCard course={course} lesson={lesson} chapterNumber={chNum} lessonNumber={lesNum}
              currentlyPlaying={chapterNumber === chNum && lessonNumber === lesNum} />;
          }
          )}
        </>);
      })}
    </section>
  );
}

