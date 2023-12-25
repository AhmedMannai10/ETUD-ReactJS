class CourseLength {
  hh: number;
  mm: number;
  ss: number;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hh = Math.floor(hours);
    this.mm = Math.min(Math.max(0, Math.floor(minutes)), 59);
    this.ss = Math.min(Math.max(0, Math.floor(seconds)), 59);
  }

  toString(): string {
    return `${String(this.hh).padStart(2, '0')}:${String(this.mm).padStart(2, '0')}:${String(this.ss).padStart(2, '0')}`;
  }
}

export default CourseLength;
