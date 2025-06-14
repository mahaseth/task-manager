import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";
import type {Task} from "../types/task";
import {Link} from "react-router-dom";

interface Props {
  task: Task;
}
const TaskItem = ({task} : Props) => {
  const context = useContext(TaskContext);
  if(!context) return null;
  const {deleteTask} = context;
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', marginBottom: '1rem'}}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <small>status: {task.status ?? 'todo'}</small>
      <br/>
      <Link to={`/edit/${task.id}`} style={{ marginRight: '1rem'}}> Edit</Link>
      <button onClick={() => deleteTask(task.id)} > Delete </button>
    </div>
  ) 
}

export default TaskItem;