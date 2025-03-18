import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// تابع برای بازیابی داده‌ها از localStorage
const loadFromLocalStorage = () => {
  try {
    const data = localStorage.getItem('formData');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading data from localStorage:', error);
    return [];
  }
};

// تابع برای ذخیره داده‌ها در localStorage
const saveToLocalStorage = (data) => {
  try {
    localStorage.setItem('formData', JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to localStorage:', error);
  }
};

// استیت اولیه
const initialState = loadFromLocalStorage();

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addDataEntry: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() };
      state.push(newData); // چون استیت آرایه است
      saveToLocalStorage(state);
      console.log('Updated state:', JSON.stringify(state, null, 2));
    },
    // setData:(state,action)=>{
    //   console.log('jj')
    //   const newData = state.data.filter((item) => item.action.payload !== action.payload)
    //   state.data = newData
    // }

    setData: (state, action) => {
      // const updatedState = state.filter((item) => item.id !== action.payload);
      saveToLocalStorage(action.payload);
      console.log(action.payload)
      return action.payload;
    },

    
  },
});

export const { addDataEntry , setData } = dataSlice.actions;
export default dataSlice.reducer;
