function CircleReducer(state: any, action: any) {
  let newState = [ ...state ];
  switch (action.type) {
    case 'ADD':
      newState = [...newState, action.payload.circle]
      return newState;
    case 'DELETE':
      newState.pop()
      return newState;
    default:
      throw new Error();
  }
}

export default CircleReducer;
