
type Course = {
  thumbnail: string;
  title: string;
  description: string;
  category: string;
  lectures: Lecture[];
  teacher: Teacher
}
type Lecture = {
  title: string;
  description: string;
  videoURL: string;
  length: number;
}
type Teacher = {
  picture: string;
  firstName: string;
  LastName: string;
}
export { Lecture, Course, Teacher };


