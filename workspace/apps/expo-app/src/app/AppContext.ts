import React, {createContext, SetStateAction} from "react";

export interface AppContextState {
  state: 'login' | 'authenticated';
}

export const InitialAppContextState: AppContextState = {
  state: 'login'
};

export const AppContext =
    createContext<[AppContextState, React.Dispatch<SetStateAction<AppContextState>>]>([] as any);
