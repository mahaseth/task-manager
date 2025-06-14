export interface Task {
  id: string;
  title: string;
  description: string;
  tag?: string;
  status?: 'todo' | 'in-progress' | 'done' ;
}