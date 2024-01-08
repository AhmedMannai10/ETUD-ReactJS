import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { slugify } from '../../../utils/slugify';
import LessonsPage from './LessonsSection';



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
      <img className="bg-black h-52 rounded-sm  object-cover" src={course.thumbnail} alt="__course__ thumbnail " />
      <div className='px-2'>
        <h1 className='font-bold text-3xl'>{course.title}</h1>
        <p className='font-normal text-sm'>{course.description}</p>
        <div className='flex  gap-2 items-center mt-4'>
          <span className='rounded-full w-10 h-10 block overflow-hidden'>
            <img src={course.teacher.picture && "https://pbs.twimg.com/profile_images/1733574115271884800/5EZortY6_400x400.jpg"} alt='The Teacher' />
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
        <h1 className='text-xl'>Course Curriculum</h1>
        {/* setting up the chapterNum and the lessonNum to -1 because here (course page) there is not lesson is playing*/}
        <LessonsPage course={course} chapterNumber={-1} lessonNumber={-1} />
      </section>
    </main >
  )
}
