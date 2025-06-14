import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import useFetchData from "../hooks/useFetchData";

const Dashboard = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) return <p>Loading tasks...</p>;

  const { tasks } = taskContext;
  const { data, loading, error } = useFetchData(
    "https://www.anapioficeandfire.com/api/books"
  );

  return (
    <>
      <div>
        {loading && <p>Loading data...</p>}
        {error && <p>Error loading data</p>}
        {data && <p>Data loaded</p>}
      </div>

      <div className="container">
        <h1>Task Dashboard</h1>
        <Link to="/add">+ Add Task</Link>
        <TaskList tasks={tasks} />
      </div>
    </>
  );
};

export default Dashboard;
