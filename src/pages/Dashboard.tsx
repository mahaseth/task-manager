import {Link} from "react-router-dom";
import TaskList from "../components/TaskList";
import {TaskContext} from "../context/TaskContext";
import {useContext} from "react";

const Dashboard = () => {
  const taskContext = useContext(TaskContext);
  if(!taskContext) return <p>Loading...</p>;
  const {tasks} = taskContext;
  return (
    <div className="container">
      <h1>Task Dashboard</h1>
      <Link to="/add"> + Add Task</Link>
      <TaskList tasks={tasks} />
    </div>
  )
}
export default Dashboard;