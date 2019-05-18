import {
  ADD_TODO,
  DELETE_TODO,
  GET_TODOS,
  UPDATE_TODO,
} from '../actions/types';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo._id !== action.payload._id);
    case GET_TODOS:
      return action.todos;
    case UPDATE_TODO:
      return state
        .filter(todo => todo._id !== action.payload._id)
        .push(action.payload);
    default:
      return state;
  }
};

export default todos;
