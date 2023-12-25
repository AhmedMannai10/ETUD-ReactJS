import React from 'react'
import LessonCard from './LessonCard'

export default function LessonsSection() {
  return (

    <section className='flex flex-col gap-3 px-4'>
      <h1>Lessons</h1>
      <LessonCard title={'Learn About User Interface'} description={'Learn  '} videoURL={''} length={0} />
      <LessonCard title={'Learn About Data Management'} description={'Hello '} videoURL={''} length={0} />
      <LessonCard title={'Learn About Testing'} description={'Hello '} videoURL={''} length={0} />
    </section>
  )
}
