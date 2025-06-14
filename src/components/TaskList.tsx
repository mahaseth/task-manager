import type {Task} from "../types/task";
import TaskItem from "./TaskItem";
import {TaskContext} from "../context/TaskContext";
import {useContext, useState} from "react";

interface TaskListProps {
  tasks: Task[]
}
type Filter = 'all' | 'done' | 'not_done' ;

const TaskList = ({tasks}: TaskListProps) => {
  const [filter, setFilter] = useState<Filter>('all');
   
   const filteredTasks = tasks.filter((task) => {
     if(filter === 'done') return task.status === 'done';
     if(filter === 'not_done') return task.status === 'todo' || task.status === 'in-progress';
     return true;
   })
  
  return (
    <div>
      <div style={{marginBottom: '1rem'}}> 
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not_done')}>Not Done</button>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ): (
        filteredTasks.map((task) => <TaskItem key={task.id} task = {task}/>)
      )}
    </div>
  );
}
export default TaskList;