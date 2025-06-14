import {useContext} from "react";
import {TaskContext} from "../context/TaskContext";
import {useNavigate} from "react-router-dom";
import type {Task} from "../types/task";
import {v4 as uuidv4 } from 'uuid';
import TaskForm from "../components/TaskForm";

const AddTask = () => {
  const context = useContext(TaskContext);
  const navigate = useNavigate();
  if(!context) return null;
  const {addTask} = context;
  const handleSubmit = (taskData: Omit<Task, 'id'>) => {
    const newTask: Task = {
      id: uuidv4(),
      ...taskData
    };
    addTask(newTask);
    navigate('/');
  };
  return (
    <div>
      <h2>Add New Task</h2>
      <TaskForm onSubmit={ handleSubmit} />
    </div>
  )
}

export default AddTask;