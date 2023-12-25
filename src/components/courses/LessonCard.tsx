import React from 'react'
import { Lesson } from '../../../types/course'


export default function LessonCard(lesson: Lesson) {
  return (
    <div className='flex flex-col px-2 w-full dark:bg-[#111] border-2 dark:border-[#333] bg-[#eee] 
      border-[#ccc] 
      rounded-lg overflow-hidden'>
      <div className=' text-sm font-normal'>{lesson.title}</div>
      <div className=' text-[0.7rem] font-[300]'>{lesson.length.toString()} min</div>
    </div>
  )
}
