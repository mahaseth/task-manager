import { createContext, useEffect, useState, ReactNode } from 'react';
import type { Task } from "../types/task";

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (updatedTask: Task) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem('tasks');
    if(stored) {
      return JSON.parse(stored);
    } else {
      return [];
    }
  });
  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: Task) => setTasks(prev => [...prev, task]);
  const updateTask = (updated: Task) =>
    setTasks(prev => prev.map(t => (t.id === updated.id ? updated : t)));
  const deleteTask = (id: string) =>
    setTasks(prev => prev.filter(t => t.id !== id));

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};