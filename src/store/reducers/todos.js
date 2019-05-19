// @flow
import { Action, State, Todo } from '../types';

const todos = (state: State = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'DELETE_TODO':
      return state.filter(todo => todo._id !== action.payload._id);
    case 'GET_TODOS':
      return action.todos;
    case 'UPDATE_TODO':
      return state
        .filter((todo: Todo) => todo._id !== action.payload._id)
        .push(action.payload);
    default:
      return state;
  }
};

export default todos;
