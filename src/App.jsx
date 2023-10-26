import React, { useState, useEffect } from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Header from "./components/Header";
import TaskNew from "./components/TaskNew";


export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  
  const deleteTask = (taskName) => {
    const updatedTasks = tasks.filter((task) => task.name !== taskName);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };


  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div>
      <Header />
      <p>Es hora de revisar las tareas que tenemos</p>
      <TaskList tareas={tasks} onDeleteTask={deleteTask}/>
      <TaskNew onAddTask={addTask} />
    </div>
  );
}
