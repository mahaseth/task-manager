import type {Task} from "../types/task";
import {FormEvent, useState} from "react";

interface Props {
  initialData?: Omit<Task, 'id'>;
  onSubmit: (data: Omit<Task, 'id'>) => void;
}
const TaskForm = ({initialData, onSubmit}: Props) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(initialData?.description ?? "");
  const [status, setStatus] = useState<'todo' | 'in-progress' | 'done' | undefined>(initialData?.status);
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit({title, description, status});
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} required/> 
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={e => setDescription(e.target.value)} required/>
      </div>
      <div>
        <label>Status:</label>
        <select value={status} onChange={e => setStatus(e.target.value as any)}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm;