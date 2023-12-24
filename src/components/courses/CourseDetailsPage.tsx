import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Course, Teacher, Lecture } from '../../../types/course';
import { slugify } from '../../../utils/slugify';



export default function CourseDetailsPage() {

  const navigator = useNavigate();
  const courseSlug = useParams();

  const lecture1: Lecture = {
    title: "Learn About Widgets",
    videoURL: "https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528",
    description: 'What is a Widget? ',
    length: 2
  }

  const course: Course = {
    title: 'Learn Flutter',
    thumbnail: 'https://ahmedmannai.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fahmed-mannai.appspot.com%2Fo%2Fuploads%252F1698682666753.png%3Falt%3Dmedia%26token%3D2bdb3605-818e-4ecc-ba66-4f5dbe4b8382&w=1920&q=75',
    description: 'Learning Flutter, and how to build Android and IOS apps',
    category: '',

    lectures: [lecture1],
    teacher: {
      picture: 'https://ahmedmannai.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAhmed_image_w.7dbc8512.png&w=1920&q=75',
      firstName: 'Ahmed',
      LastName: 'Mannai'
    }
  };
  const lectureSlug = slugify(course.lectures[0].title);

  // TODO: Fech courrse datails using the course Slug

  return (
    <main className=" px-0 flex flex-col justify-center py-1 gap-2">
      <div className=' aspect-video bg-gray-700' >
        <iframe
          className=' h-full w-full'
          src="https://www.youtube.com/embed/4WiH9pf2ULQ?si=2TzjHgKzRDOgi528"
          width="100%"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
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
          onClick={() => { navigator(`/courses/${slugify(course.title)}/${lectureSlug}`) }}> Enroll To this Course</button>
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
