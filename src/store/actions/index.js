import axios from 'axios';
import { ADD_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const addTodoSuccess = todo => ({
  type: ADD_TODO,
  payload: {
    _id: todo._id,
    task: todo.task,
    type: todo.type,
    priority: todo.priority,
    complete: todo.complete,
  },
});

export const deleteTodoSuccess = todo => ({
  type: DELETE_TODO,
  payload: {
    _id: todo._id,
  },
});

export const getTodosSuccess = todos => ({
  type: GET_TODOS,
  todos,
});

export const updateTodoSuccess = todo => ({
  type: UPDATE_TODO,
  payload: {
    _id: todo._id,
    task: todo.task,
    type: todo.type,
    priority: todo.priority,
    complete: todo.complete,
  },
});

export const addTodo = todo => dispatch => {
  instance
    .post('/todos', todo)
    .then(response => {
      dispatch(addTodoSuccess(response.todo));
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTodo = todo => dispatch => {
  instance
    .delete(`/todos/${todo._id}`)
    .then(() => {
      dispatch(deleteTodoSuccess(todo));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getTodos = () => dispatch => {
  debugger;
  instance
    .get('/todos')
    .then(response => {
      dispatch(getTodosSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateTodo = todo => dispatch => {
  instance
    .put(`todos/${todo._id}`, todo)
    .then(response => {
      dispatch(updateTodoSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
