import { useNavigate } from 'react-router-dom';
import { slugify } from '../../../utils/slugify';
import { Course } from '../../../types/course';

export default function CourseCard(props: { course: Course }) {
  const navigator = useNavigate();

  const { course } = props;
  return (
    <div className="flex flex-col dark:bg-[#111] dark:border-[#333] border-2 m-1 bg-[#eee] border-[#ccc]"
      onClickCapture={() => { navigator(`/courses/${slugify(course.title)}`, { state: { course } }) }}>
      <img className="bg-black h-52 rounded-sm  object-cover" src={course.thumbnail} alt="__course__ thumbnail " />
      <div className='px-1 py-1'>
        <div>
          <h4 className=' text-sm'>{course.title}</h4>
          <p className=" text-xs font-normal">{course.description}</p>
        </div>
      </div>
    </div>
  )
}
