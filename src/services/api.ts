import axios from "axios";
import { title } from "process";
export function fetchTodos() {
  return axios
    .get(`http://localhost:3001/todos`, {})
    .then((response) => response.data);
}

export function postTodo(title: string, description: string, due_date: string) {
  return axios
    .post(`http://localhost:3001/todos`, {
      title: title,
      description: description,
      due_date: due_date,
      completed: false,
      user_id: 1,
    })
    .then((response) => response.data);
}

export function deleteTodo(id: number) {
  return axios
    .delete(`http://localhost:3001/todos/${id}`)
    .then((response) => response.data);
}

export function editTodo(
  id: number,
  title: string,
  description: string,
  due_date: string,
  completed: boolean
) {
  return axios
    .put(`http://localhost:3001/todos/${id}`, {
      title: title,
      description: description,
      due_date: due_date,
      completed: completed,
      user_id: 1,
    })
    .then((response) => response.data);
}

export function signUp(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`http://localhost:3001/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function logIn(email: string, password: string) {
  return axios
    .post(`http://localhost:3001/signup`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}
