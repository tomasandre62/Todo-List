import React, { useState } from 'react';

function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);

  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);

  };

  return (
    <div className="content d-flex justify-content-center">
      <div class="card text-center">
        <div class="card-header">
          <h2>ToDo List - Tomas Ramirez</h2>
        </div>
        <div class="card-body paper">
          <input class="form-control" type="text"
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Agregar tarea..." />
          <ul>
            {tasks.length === 0 ? (
              <li className='vacio'>No hay tareas, añadir tareas</li>
            ) : (
              tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <span className="delete-icon" onClick={() => handleDeleteTask(index)}>
                    x
                  </span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ToDo;