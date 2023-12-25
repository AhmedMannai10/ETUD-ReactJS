import React from 'react'
import { Course, Lesson } from '../../../types/course'
import CourseLength from '../../../types/CourseLength'
import { useNavigate } from 'react-router-dom'
import { slugify } from '../../../utils/slugify';

type PropsType = {
  lesson: Lesson,
  chapterNumber: number,
  lessonNumber: number,
  currentlyPlaying: boolean,
  course: Course,
}

export default function LessonCard(props: PropsType) {

  const { lesson, currentlyPlaying, course, chapterNumber, lessonNumber } = props;
  const navigate = useNavigate();

  return (
    <div
      onClickCapture={() =>
        navigate(`/courses/${slugify(course.title)}/${slugify(course.chapters[0].lessons[0].title)}`, { state: { course, chapterNumber, lessonNumber } })
      }
      className='flex flex-col px-2 w-full dark:bg-[#111] border-2 dark:border-[#333] bg-[#eee] 
      border-[#ccc] cursor-pointer
      rounded-lg overflow-hidden'>
      <div className=' text-sm font-normal'>{lesson.title}</div>
      <div className='text-[.7rem]  font-[300]'>{lesson.length}</div>
      {currentlyPlaying && <span>PLAYING</span>}
    </div>
  )
}
