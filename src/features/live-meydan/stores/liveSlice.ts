import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { TLiveStoreState } from '../consts/types'
//import Axios from '@/libs/axiosConfig';
import { API_URL } from '@/libs/config';

// state
const initialState: TLiveStoreState = {
  lives: [],
  status: '',
  error: '',
};

// async actions
export const fetchLives = createAsyncThunk('lives/fetchLives', async () => {
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

    if (!response.ok) throw new Error('fetch lives failed!');

    const data = await response.json();
    return data;

  } catch(err:any) {
    console.log(err?.message || err);
    console.log(err);
  }
})

// slice (reducer)
const livesSlice = createSlice({
  name: 'livesSlice',
  initialState,

  reducers: {
    

    // fetch mostanads
  },

  // fetch lives
  extraReducers: (builder:any) => {
    builder
      .addCase(fetchLives.pending, (state:any) => {
        state.status = 'loading';
        console.log('pending..');
      })
      .addCase(fetchLives.fulfilled, (state:any, action:any) => {
        state.status = 'success';
        // add fetched data to state
        console.log(action.payload)
        state.lives = action.payload.lives;
      })
      .addCase(fetchLives.rejected, (state:any, action:any) => {
        state.status = 'failed',
        state.error = action.error.message || 'some error happened!';
        console.log('failed..');

      })
  }
})

//export const { addPost, removePost } = postsSlice.actions;
//export default postsSlice.reducer;

export default livesSlice.reducer;