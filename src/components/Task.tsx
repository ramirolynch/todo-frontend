import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TaskFace } from "../models/TaskFace";
import { deleteTodo, editTodo } from "../services/api";
import { EditTask } from "./EditTask";

interface Props {
    task: TaskFace;
    onDelete: () => void;

}

export function Task({ task, onDelete }: Props) {
    

    function handleEdit(event: any) {
        event.preventDefault();
        // The serialize function here would be responsible for
        // creating an object of { key: value } pairs from the
        // fields in the form that make up the query.
        let formData = new FormData(event.currentTarget)
        let title: string = formData.get('title') as string;
        let description: string = formData.get('description') as string;
        let due_date: string = formData.get('due_date') as string;
        let completed: boolean = formData.get('completed') === "false" ? false : true;
        editTodo(task.id, title, description, due_date, completed);
        task.title = titleText;
        task.description = descriptionText;
        task.due_date = moment(dateText).format('MM/DD/YYYY')
        task.completed = completed
         
        setTitle('')
        setDescription('')
        setDate('') 

        setEditForm(false)
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

    const [editForm, setEditForm] = useState(false);

    function showHideForm() {
     editForm === false ? setEditForm(true) : setEditForm(false);
    }



    return (
        
        <div>
           <ul>
                <li>Title: {task.title}</li>
                <li>Description: {task.description}</li>
                <li>Due date: {moment(task.due_date).format('MM/DD/YYYY')}</li>
                <li>{task.completed === false ? `Pending`: `Completed`}</li>
            </ul>
            
            
            <button onClick={onDelete}>Delete Task</button>

            
            <button onClick={()=>showHideForm()}>Edit Task</button>

            <form action="" onSubmit={handleEdit} className={ editForm === false ? "hideForm" : "showForm"}>
                <label htmlFor="">Edit title:
                    <input type="text" name='title' value={titleText} onChange={handleTitleChange} placeholder={task.title} />
                </label>
                <label htmlFor="">Edit description:
                    <input type="text" name='description' value={descriptionText} onChange={handleDescriptionChange}  placeholder={task.description} />
                </label>
                <label htmlFor="">Edit Due Date:
                    <input type="date" name='due_date' value={dateText} onChange={handleDateChange} />
                </label>
                <label htmlFor="">Mark Completed:
                    <input type="radio" name='completed' value="true" />
                </label>
                <label htmlFor="">Mark Pending:
                    <input type="radio" name='completed' value="false" />
                </label>
           
                <button>Confirm Edit</button>
            </form>
           
       </div>);
}



