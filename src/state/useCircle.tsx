import  { useContext, useReducer } from 'react';
import CircleReducer from './CircleReducer';
import { CircleContext } from './CircleContext';

function CircleProvider({ children }:any) {

  const [circleState, circleDispatch] = useReducer(CircleReducer, []);


  const value = { circleState, circleDispatch };

  return <CircleContext.Provider value={value}>{children}</CircleContext.Provider>;
}

function useCircle() {
  const context = useContext(CircleContext);
  if (!context) {
    throw new Error('Context mus be used within a <Wizzard/>');
  }
  return context;
}

export { CircleProvider, useCircle };
