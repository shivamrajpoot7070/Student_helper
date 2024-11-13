import React, { useState } from 'react';
import { FaTrash, FaCheckCircle, FaRegCircle } from 'react-icons/fa';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const getColor = (index) => {
    const colors = ['#ff7f50', '#6a5acd', '#20b2aa', '#ff6347', '#ffd700'];
    return colors[index % colors.length];
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>Todo List</h1>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', width: '70%' }}
      />
      <button 
        onClick={addTask} 
        style={{ padding: '10px', borderRadius: '4px', border: 'none', background: '#28a745', color: '#fff', cursor: 'pointer', marginLeft: '10px' }}
      >
        Add
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {tasks.map((task, index) => (
          <li key={index} style={{ margin: '10px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: getColor(index), padding: '10px', borderRadius: '4px', color: '#fff' }}>
            <span
              onClick={() => toggleTaskCompletion(index)}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                flexGrow: 1,
                marginRight: '10px',
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {task.completed ? <FaCheckCircle style={{ color: '#fff', marginRight: '5px' }} /> : <FaRegCircle style={{ color: '#fff', marginRight: '5px' }} />} 
              {task.text}
            </span>
            <button 
              onClick={() => deleteTask(index)} 
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#fff' }}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
