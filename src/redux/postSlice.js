import { createSlice } from '@reduxjs/toolkit';
import postsData from '../assets/posts.json';

const postSlice = createSlice({
  name: 'posts',
  initialState: postsData,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    likePost: (state, action) => {
      const post = state.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    }
  }
});

export const { addPost, likePost } = postSlice.actions;

export default postSlice.reducer;
