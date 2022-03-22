import moment from "moment";
import { Link } from "react-router-dom";
import { TaskFace } from "../models/TaskFace";
import { deleteTodo } from "../services/api";

interface Props {
    task: TaskFace;
    onDelete: () => void;
}

export function EditTask(task:TaskFace) {


    return (
        
        <div>
            <form action="">
                <label htmlFor="">Edit title:
                    <input type="text" name='title' placeholder={task.title} />
                </label>
                <label htmlFor="">Edit description:
                    <input type="text" name='description' placeholder={task.description} />
                </label>
                <label htmlFor="">Edit Due Date:
                    <input type="date" name='due_date'/>
                </label>
                <label htmlFor="">Edit Completed:
                    <input type="radio" name='completed' />
                </label>

                <button>Confirm Edit</button>
            </form>
       </div>);
}

