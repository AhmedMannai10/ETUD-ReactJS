import { createSlice } from '@reduxjs/toolkit';
import { Course } from '../../types/course';

const courseEnrollSlice = createSlice({
  name: "myCourses",
  initialState: {
    value: Array<Course>,
  },

  reducers: [{
    enroll: (state: { value: Array<Course>; }, action: { payload: Course; }) => {
      state.value.push(action.payload);
    },
  }]
});

export const { enroll } = courseEnrollSlice.actions;
export default courseEnrollSlice.reducer;

