import React, { useState } from 'react';

export default function MyCustomWidget() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List Widget</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks added yet</p>
      )}
    </div>
  );
}
