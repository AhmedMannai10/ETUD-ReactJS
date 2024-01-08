import { useNavigate } from 'react-router-dom';
import { slugify } from '../../../utils/slugify';
import { Course } from '../../../types/course';

export default function CourseCard(props: { course: Course }) {
  const navigator = useNavigate();

  const { course } = props;
  return (
    <div className="flex flex-col  "
      onClickCapture={() => { navigator(`/courses/${slugify(course.title)}`, { state: { course } }) }}>
      <img className="bg-black h-36 object-cover " src={course.thumbnail} alt="__course__ thumbnail " />
      <span className=' absolute bottom-12 right-1  z-10 bg-primary-light dark:bg-primary-dark rounded-sm px-1  text-xs' >{course.courseLength.toString()}</span>
      <div className="flex flex-col text-md font-normal  leading-tight">
        <div className='m-1'>
          <h4 className=' overflow-ellipsis '>{course.title}</h4>
          <p className=" text-xs font-normal">{course.description}</p>
        </div>
      </div>
    </div>
  )
}
