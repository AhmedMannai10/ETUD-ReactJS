import CourseLength from "../../types/CourseLength";
import { Chapter, Course, Lesson, Teacher } from "../../types/course";

// Sample Teachers
const sampleTeachers: Teacher[] = [
  {
    picture: 'teacher1.jpg',
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    picture: 'teacher2.jpg',
    firstName: 'Jane',
    lastName: 'Smith'
  }
];

// Sample Lessons
const sampleLessons: Lesson[] = [
  {
    title: 'Introduction to JavaScript',
    videoURL: 'https://example.com/intro-to-js',
    length: new CourseLength(0, 15, 30)
  },
  {
    title: 'Intermediate JavaScript',
    videoURL: 'https://example.com/intermediate-js',
    length: new CourseLength(1, 45, 0)
  },
  {
    title: 'Advanced JavaScript',
    videoURL: 'https://example.com/advanced-js',
    length: new CourseLength(1, 30, 0)
  },
  {
    title: 'JavaScript Frameworks',
    videoURL: 'https://example.com/js-frameworks',
    length: new CourseLength(2, 0, 15)
  }
];

// Sample Chapters
const sampleChapters: Chapter[] = [
  {
    title: 'Getting Started with JavaScript',
    lessons: [sampleLessons[0], sampleLessons[1]]
  },
  {
    title: 'Advanced Topics in JavaScript',
    lessons: [sampleLessons[2], sampleLessons[3]]
  }
];

// Sample Courses
const sampleCourses: Course[] = [
  {
    thumbnail: 'https://bstefanski.com/_next/image?url=%2Fstatic%2Fthumbnails%2Fhow-to-resolve-git-fatal-the-remote-end-hung-up-unexpectedly.png&w=640&q=75',
    title: 'JavaScript Mastery',
    description: 'A comprehensive guide to JavaScript',
    category: 'Programming',
    chapters: sampleChapters,
    teacher: sampleTeachers[0],
    courseLength: new CourseLength(5, 0, 0)
  },
  {
    thumbnail: 'https://bstefanski.com/_next/image?url=%2Fstatic%2Fthumbnails%2Fhow-to-resolve-git-fatal-the-remote-end-hung-up-unexpectedly.png&w=640&q=75',
    title: 'React Fundamentals',
    description: 'Master the basics of React',
    category: 'Web Development',
    chapters: sampleChapters,  // For simplicity, using the same chapters for this course
    teacher: sampleTeachers[1],
    courseLength: new CourseLength(4, 30, 0)
  },
  {
    thumbnail: 'https://bstefanski.com/_next/image?url=%2Fstatic%2Fthumbnails%2Fhow-to-resolve-git-fatal-the-remote-end-hung-up-unexpectedly.png&w=640&q=75',
    title: 'Node.js Essentials',
    description: 'Learn the essentials of Node.js',
    category: 'Backend Development',
    chapters: sampleChapters,  // Using the same chapters for this course
    teacher: sampleTeachers[0],
    courseLength: new CourseLength(3, 15, 45)
  }
];

// Export sample data
export const courses: Course[] = sampleCourses;
