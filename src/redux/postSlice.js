import { createSlice } from '@reduxjs/toolkit';

const loadPostsFromLocalStorage = () => {
  const savedPosts = localStorage.getItem('posts');
  return savedPosts ? JSON.parse(savedPosts) : [];
};

const savePostsToLocalStorage = (posts) => {
  localStorage.setItem('posts', JSON.stringify(posts));
};

const postSlice = createSlice({
  name: 'posts',
  initialState: loadPostsFromLocalStorage(),
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
      savePostsToLocalStorage(state);
    },
    likePost: (state, action) => {
      const post = state.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
        savePostsToLocalStorage(state);
      }
    }
  }
});

export const { addPost, likePost } = postSlice.actions;

export default postSlice.reducer;
