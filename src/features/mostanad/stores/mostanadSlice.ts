import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { TMostanadStateStore} from '../consts/types'
//import Axios from '@/libs/axiosConfig';
import { API_URL } from '@/libs/config';

// state
const initialState: TMostanadStateStore = {
  mostanads: [],
  status: '',
  error: '',
};

// async actions
export const fetchMostanads = createAsyncThunk('mostanads/fetchMostanads', async () => {
  try {
    const promise = fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json;odata.metadata=full',
      }
    });
  
    const response = await promise;
    console.log(response)

    if (!response.ok) throw new Error('fetch mostanads failed!');

    const data = await response.json();
    return data;

  } catch(err:any) {
    console.log(err?.message || err);
    console.log(err);
  }
})

// slice (reducer)
const mostanadsSlice = createSlice({
  name: 'mostanadsSlice',
  initialState,

  reducers: {
    

    // fetch mostanads
  },

  // fetch lives
  extraReducers: (builder:any) => {
    builder
      .addCase(fetchMostanads.pending, (state:any) => {
        state.status = 'loading';
        console.log('pending..');
      })
      .addCase(fetchMostanads.fulfilled, (state:any, action:any) => {
        state.status = 'success';
        // add fetched data to state
        console.log(action.payload)
        state.mostanads = action.payload.mostanads;
      })
      .addCase(fetchMostanads.rejected, (state:any, action:any) => {
        state.status = 'failed',
        state.error = action.error.message || 'some error happened!';
        console.log('failed..');

      })
  }
})

//export const { addPost, removePost } = postsSlice.actions;
//export default postsSlice.reducer;

export default mostanadsSlice.reducer;