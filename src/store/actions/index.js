// @flow
import axios from 'axios';
import { Todo, Action, ThunkAction } from '../types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const addTodoSuccess = (todo: Todo): Action => ({
  type: 'ADD_TODO',
  payload: {
    _id: todo._id,
    task: todo.task,
    type: todo.type,
    priority: todo.priority,
    complete: todo.complete,
  },
});

export const deleteTodoSuccess = (todo: Todo): Action => ({
  type: 'DELETE_TODO',
  payload: {
    _id: todo._id,
  },
});

export const getTodosSuccess = (todos: Array<Todo>): Action => ({
  type: 'GET_TODOS',
  todos,
});

export const updateTodoSuccess = (todo: Todo): Action => ({
  type: 'UPDATE_TODO',
  payload: {
    _id: todo._id,
    task: todo.task,
    type: todo.type,
    priority: todo.priority,
    complete: todo.complete,
  },
});

export const addTodo = (todo: Todo): ThunkAction => dispatch => {
  instance
    .post('/todos', todo)
    .then(response => {
      dispatch(addTodoSuccess(response.todo));
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTodo = (todo: Todo): ThunkAction => dispatch => {
  instance
    .delete(`/todos/${todo._id}`)
    .then(() => {
      dispatch(deleteTodoSuccess(todo));
    })
    .catch(error => {
      console.log(error);
    });
};

export const getTodos = (): ThunkAction => dispatch => {
  instance
    .get('/todos')
    .then(response => {
      dispatch(getTodosSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateTodo = (todo: Todo): ThunkAction => dispatch => {
  instance
    .put(`todos/${todo._id}`, todo)
    .then(response => {
      dispatch(updateTodoSuccess(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
