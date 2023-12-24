import { Course } from '../../../types/course'
import { useNavigate } from 'react-router-dom';

export default function CourseCard(props: { course: Course }) {
  const navigator = useNavigate();

  const { course } = props;
  return (
    <div className="flex flex-col"
      onClickCapture={() => { navigator(`/courses/${course.title}`) }}>
      <img className="bg-black min-h-[200px] rounded-sm" src={course.thumbnail} alt="__course__ thumbnail " />
      <div className=''>
        <div>
          <h4 className=' text-sm'>{course.title}</h4>
          <p className=" text-xs font-normal">{course.description}</p>
        </div>
      </div>
    </div>
  )
}
