import React from 'react'
import { useParams } from 'react-router-dom'
import LectureCard from './LectureCard'

export default function LecturePage() {

  const { lectureSlug } = useParams();
  return (
    <main className=" px-0 flex flex-col justify-center py-1 gap-2">
      <div className=' aspect-video ' >
        <iframe
          className=' h-full w-full'
          src="https://www.youtube.com/embed/8F7Q-4PZCjA?si=TfvpHErVNfrXIwrL"
          width="100%"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      <h1 > Course: {lectureSlug}</h1>
      <section className='flex flex-col gap-3 px-4'>
        <LectureCard title={'Learn About User Interface'} description={'Hello '} videoURL={''} length={0} />
        <LectureCard title={'Learn About Data Management'} description={'Hello '} videoURL={''} length={0} />
        <LectureCard title={'Learn About Testing'} description={'Hello '} videoURL={''} length={0} />

      </section>
    </main>
  )
}
