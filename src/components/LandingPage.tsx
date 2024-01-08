import { courses } from '../__tests__/fakeData.ts';
import CourseCard from './comman/CourseCard.tsx';

export default function LandingPage() {


  return (
    <main className=" flex flex-col justify-center py-2 gap-2">
      <h3 className='px-2'>Welcom back, Ahmed!</h3>
      {
        courses.map((course) => {
          return (
            <CourseCard course={course} />
          );
        })
      }

    </main>
  )
}
