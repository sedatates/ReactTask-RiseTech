import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./features/todosSlice";

export const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
