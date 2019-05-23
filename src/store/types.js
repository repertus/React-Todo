/* eslint-disable no-use-before-define */
import type { Store as ReduxStore } from 'redux';

// @flow
export type Todo = {
  _id: string,
  task: string,
  type: number,
  priority: string,
  complete: boolean,
};

type AddTodo = {
  type: 'ADD_TODO',
  payload: Todo,
};

type DeleteTodo = {
  type: 'DELETE_TODO',
  payload: {
    _id: string,
  },
};

type GetTodos = {
  type: 'GET_TODOS',
  todos: Array<Todo>,
};

type UpdateTodo = {
  type: 'UPDATE_TODO',
  payload: Todo,
};

export type State = {
  todos: Array<Todo>,
};

export type GetState = () => State;

export type Action = AddTodo | DeleteTodo | GetTodos | UpdateTodo;

type PromiseAction = Promise<Action>;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;

export type Store = ReduxStore<State, Action>;
