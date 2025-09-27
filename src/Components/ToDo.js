import React, { useState, useEffect } from 'react';

const ToDo = () => {
  const [taskInput, setTaskInput] = useState('');
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedPending = JSON.parse(localStorage.getItem('pendingTasks')) || [];
    const savedCompleted = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setPendingTasks(savedPending);
    setCompletedTasks(savedCompleted);
  }, []);

  // Save to localStorage on updates
  useEffect(() => {
    localStorage.setItem('pendingTasks', JSON.stringify(pendingTasks));
  }, [pendingTasks]);

  useEffect(() => {
    localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  const handleAddTask = () => {
    const trimmedTask = taskInput.trim();
    if (trimmedTask !== '') {
      setPendingTasks([...pendingTasks, trimmedTask]);
      setTaskInput('');
    }
  };

  const handleCompleteTask = (index) => {
    const completed = pendingTasks[index];
    setCompletedTasks([...completedTasks, completed]);
    setPendingTasks(pendingTasks.filter((_, i) => i !== index));
  };

  const handleDeletePending = (index) => {
    setPendingTasks(pendingTasks.filter((_, i) => i !== index));
  };

  const handleDeleteCompleted = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>📝 To-Do List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.button}>Add</button>
      </div>

      <div style={styles.section}>
        <h3>Pending Tasks</h3>
        {pendingTasks.length === 0 ? (
          <p>No pending tasks</p>
        ) : (
          <ul>
            {pendingTasks.map((task, index) => (
              <li key={index} style={styles.taskItem}>
                <input
                  type="checkbox"
                  onChange={() => handleCompleteTask(index)}
                />
                <span style={styles.taskText}>{task}</span>
                <button
                  onClick={() => handleDeletePending(index)}
                  style={styles.deleteButton}
                  title="Delete Task"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div style={styles.section}>
        <h3> Completed Tasks</h3>
        {completedTasks.length === 0 ? (
          <p>No completed tasks</p>
        ) : (
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index} style={styles.completedTask}>
                {task}
                <button
                  onClick={() => handleDeleteCompleted(index)}
                  style={styles.deleteButton}
                  title="Delete Task"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  section: {
    marginTop: '20px',
  },
  taskItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  taskText: {
    marginLeft: '10px',
    flex: 1,
  },
  completedTask: {
    textDecoration: 'line-through',
    color: 'gray',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default ToDo;
