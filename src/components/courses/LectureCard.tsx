import React from 'react'
import { Lecture } from '../../../types/course'


export default function LectureCard(lecture: Lecture) {
  return (
    <div className='w-full dark:bg-[#111] border-2 dark:border-[#333] bg-[#eee]
      border-[#ccc]
      rounded-lg px-2'>
      {lecture.title}
    </div>
  )
}
