import { TaskFace, User } from "../models/TaskFace";
import { createContext} from 'react';


export interface TodoContextModel {

    todos: TaskFace[];
    users: User[];
    loggedusersarr: User[];
    addTodo: (task: TaskFace) => void;
    addUser: (user: User) => void;
    logUser: (user: User) => void;
}

const defaultValue:TodoContextModel = {
   
    todos: [],
    users: [],
    loggedusersarr:[],
    addTodo: () => { },
    addUser: () => { },
    logUser:()=> {},
}

export const TodoContext = createContext<TodoContextModel>(defaultValue);