import CourseLength from './CourseLength'

type Course = {
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  chapters: Chapter[];
  teacher: Teacher;
  courseLength: CourseLength;
}
type Chapter = {
  title: string;
  lessons: Lesson[];
}
type Lesson = {
  title: string;
  videoURL: string;
  length: CourseLength;
}
type Teacher = {
  picture: string;
  firstName: string;
  lastName: string;
}
export type { Lesson, Course, Teacher, Chapter };


