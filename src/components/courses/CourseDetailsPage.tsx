import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { slugify } from '../../../utils/slugify';



export default function CourseDetailsPage() {

  const navigator = useNavigate();
  const courseSlug = useParams();

  const location = useLocation();
  const { course } = location.state;

  const chapterNumber = 0;
  const lessonNumber = 0;


  // TODO: Fech courrse datails using the course Slug

  return (
    <main className=" px-0 flex flex-col justify-center py-1 gap-2">
      <div className=' aspect-video bg-gray-700' >
        <iframe
          className=' h-full w-full'
          src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
          width="100%"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
        </iframe>
      </div>
      <div className='px-2'>
        <h1 className='font-bold text-3xl'>{course.title}</h1>
        <p className='font-normal text-sm'>{course.description}</p>
        <div className='flex  gap-2 items-center mt-4'>
          <span className='rounded-full w-10 h-10 block overflow-hidden'>
            <img src={course.teacher.picture} alt='The Teacher' />
          </span>
          <span className='flex flex-col'>
            <p className='text-[0.8rem] font-[400]'>Course By</p>
            <h5>{course.teacher.firstName} {course.teacher.LastName}</h5>
          </span>
        </div>
      </div>
      <div className='flex justify-center'>
        <button className=' black-button'
          onClick={() => {
            navigator(`/courses/${slugify(course.title)}/${slugify(course.chapters[0].lessons[0].title)}`, { state: { course, chapterNumber, lessonNumber } })
          }}> Enroll To this Course
        </button>
      </div>
      <section className='px-1'>
        more information about the course
      </section>
      <section className='px-1'>
        <h1 className='text-xl'>Course Curriculum</h1>
      </section>
    </main >
  )
}
