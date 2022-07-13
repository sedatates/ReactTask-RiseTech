import { configureStore } from "@reduxjs/toolkit";
import serviceSlice  from "./features/serviceSlice";
import categorySlice from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    category: categorySlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch