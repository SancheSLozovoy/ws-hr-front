import { configureStore } from '@reduxjs/toolkit'
import taskReducer from '../features/getTasks/model/slices/taskSlice'
import imageReducer from '../widgets/TaskImage/model/slices/imageSlice';

const store = configureStore({
    reducer: {
        task: taskReducer,
        image: imageReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export {store};