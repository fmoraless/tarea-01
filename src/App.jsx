import { useState, useEffect } from 'react';
import './App.css';
import { TaskList } from './components/TaskList/TaskList';
import fakeTasks from './data';


function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const loadTasks = async () => {
      console.log(fakeTasks);
    setTasks(fakeTasks);

    }
    loadTasks();
  }, []);

  const completeTask = taskId => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: true };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }
  return (
    <div>
      <h1 className={"title"}>My Tasks</h1>
      <TaskList
          tasks={tasks}
          onCompleteTask={completeTask} />
    </div>
  );
}

export default App;
