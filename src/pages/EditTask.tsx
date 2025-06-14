import {useNavigate, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {TaskContext} from "../context/TaskContext";
import type {Task} from "../types/task";
import TaskForm from "../components/TaskForm";

const EditTask = () => {
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const context = useContext(TaskContext);
  const [task, setTask] = useState<Task | null>(null);

  useEffect(() => {
    if(context && id) {
       const found = context.tasks.find(t => t.id === id);
       if(found) {
         setTask(found)
       } else {
         navigate('/');
       }
    }
  }, [context, id, navigate]);
  
  if(!task) return <p>Loading...</p>;
  
  const handleSubmit = (updatedData: Omit<Task, 'id'>) => {
    if(context) {
      const updatedTask: Task = {...task, ...updatedData};
      context.updateTask(updatedTask);
      navigate('/');
    }
  }
  
  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm initialData={task} onSubmit={handleSubmit}/>
    </div>
  )
}

export default EditTask;