import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { deleteTodo, editTodo, fetchTodos, postTodo } from './services/api';
import { listenerCount } from 'process';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Task } from './components/Task';

function App() {

  const [todos, setTodos] = useState<any[]>([])

    useEffect(()=>{
        fetchTodos().then(data => setTodos(data));

    }, []);

    function handleSubmit(event:any) {
      event.preventDefault();
      // The serialize function here would be responsible for
      // creating an object of { key: value } pairs from the
      // fields in the form that make up the query.
      let formData = new FormData(event.currentTarget)
      let title :string = formData.get('title') as string;
      let description: string = formData.get('description') as string;
      let due_date :string = formData.get('due_date') as string;
      postTodo(title, description, due_date).then(todo => setTodos([...todos, todo]));
      setTitle('')
      setDescription('')
      setDate('')
    }
  
  const [titleText, setTitle] = useState('');
  const [descriptionText, setDescription] = useState('');
  const [dateText, setDate] = useState('');

  function handleTitleChange(e:any) {
    setTitle(e.target.value);
  }
  function handleDescriptionChange(e: any) {
    setDescription(e.target.value);
  }
  function handleDateChange(e:any) {
    setDate(e.target.value);
  }
  
  function handleDelete(id: number) {
    
    deleteTodo(id).then(()=>fetchTodos()).then((data)=>{setTodos(data)})

  }



  

  return (
    <div className="App">

      <h1>To-dos</h1>

    
        
      {todos.map((task, i) => <Task onDelete={()=>handleDelete(task.id)} key={i} task={task}/>)}
      
  
      <form onSubmit={handleSubmit}>
      <h3>New To-do</h3>
        <label htmlFor="">Title:
          <input type="text" name="title" id="title" value={titleText} onChange={handleTitleChange}/>
        </label>
        <label htmlFor="">Description:
        <textarea rows={3} name="description" id="description" value={descriptionText} onChange={handleDescriptionChange} ></textarea>
        </label>
        <label htmlFor="due_date">Due date:
          <input type="date" id="due_date" name="due_date" value={dateText} onChange={handleDateChange}/>
        </label>
        <button type='submit'>New task</button>
      </form>
  
      
    </div>
  );
}

export default App;
