import {configureStore} from '@reduxjs/toolkit';
import { menuReducer } from '../redux/reducers/menu/menuReducer';
import { addCountReducer } from '../redux/reducers/menu/menuReducer';

export const store = configureStore({
  reducer: {
    menuReducer,
    addCountReducer
  },
});
