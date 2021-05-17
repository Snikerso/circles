import { createContext } from 'react';

type InitialStateType =  Array<string > 

const initialState: InitialStateType = []

export const CircleContext = createContext<{
  circleState: InitialStateType;
  circleDispatch: React.Dispatch<any>;
}>({
  circleState: initialState,
  circleDispatch: () => null,
});
