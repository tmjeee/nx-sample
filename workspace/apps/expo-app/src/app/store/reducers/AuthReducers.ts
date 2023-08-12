import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {User} from "@init/shared-library";
import {AppContext} from "../../AppContext";
import {useContext} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../Store";
import {changeToAuthNav, changeToUnauthNav} from "./NavStateReducers";

export interface AuthReducerState {
  state: 'pending' | 'fulfilled' | 'rejected' | 'init';
  user: User | null;
}

const initialState: AuthReducerState = {
  state: 'init',
  user: null,
}


export const logon2  = (opt: {email: string, password: string}) => (dispatch: any, getState: any) => {
  return new Promise<boolean>((res, rej) => {
    setTimeout(() => {
      dispatch(changeToAuthNav('string payload'));
      res(true);
    }, 5000);
  })
}

// logon AsyncThunk action
export const logon = createAsyncThunk<User, {email: string, password: string}>(
  'auth/logon',
  async (arg) => {
    return new Promise<User>((res, rej) => {
      setTimeout(() => {
        res({
          id: 1, name: 'user1', email: arg.email,
        })
      }, 2000);
    });
  });

const slice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changAuthState: (state, action) => {
      return state;
    }
  },
  extraReducers: (builder) => {
    // auth
    builder.addCase(logon.pending, (state) => {
      state.state = 'pending';
    });
    builder.addCase(logon.fulfilled , (state, action) => {
      const user = action.payload;
      state.user = user;
      state.state = 'fulfilled';

      // change nav state (through redux)
      // const dispatch = useDispatch<AppDispatch>();
      // dispatch(changeToAuthNav('string payload'));
      // (action as any).asyncDispatch(changeToAuthNav('string payload'));

      // change react context
      // const [appContextState, setAppContextState] = useContext(AppContext);
      // setAppContextState((prevAppContextState) => {
      //   return {
      //     ...prevAppContextState,
      //     state: 'authenticated',
      //   }
      // });
    });
    builder.addCase(logon.rejected, (state, action) => {
      state.state = 'rejected';
      const error = action.error;
    });
  },
});

export const { changAuthState  } = slice.actions;

export default slice.reducer;


