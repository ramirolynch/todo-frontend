import {  ReactNode, useEffect, useState } from "react";
import { TaskFace, User } from "../models/TaskFace";
import { TodoContext } from "../context/TodoContext";


interface Props {children:ReactNode;}

export function TodoContextProvider({children}:Props) {


//localStorage implementation
const [todos, setTodos] = useState<TaskFace[]>(()=> {
    const saved = localStorage.getItem('todosStorage') || '[]';
    const initialValue = JSON.parse(saved);
    return initialValue || [];
})
    
    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('userStorage') || '[]';
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    })
    
    const [loggedusersarr, setLoggedUser] = useState<User[]>(() => {
        const saved = localStorage.getItem('logStorage') || '[]';
        const initialValue = JSON.parse(saved);
        return initialValue || [];
})


useEffect(()=> {
    localStorage.setItem('todosStorage', JSON.stringify(todos));
    localStorage.setItem('userStorage', JSON.stringify(users));
    localStorage.setItem('logStorage', JSON.stringify(loggedusersarr))
   
    }, [todos, users, loggedusersarr])


function addTodo(task:TaskFace) {
    setTodos([...todos,task]);
}

    function addUser(user: User) {
    setUsers([...users,user])
    }
    
    function logUser(user: User) {
        setLoggedUser([...loggedusersarr,user])
    }


    return (

        <TodoContext.Provider value={{ todos, users, addTodo, addUser, loggedusersarr, logUser}}>
            {children}
        </TodoContext.Provider>  
    );
}
