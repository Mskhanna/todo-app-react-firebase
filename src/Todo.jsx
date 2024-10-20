import React, { useState } from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoId, setEditingTodoId] = useState(null); // Track the ID of the editing todo
  const [newText, setNewText] = useState(''); // Separate newText for each todo

  // Handle editing start
  const handleEditStart = (todo) => {
    setIsEditing(true);
    setEditingTodoId(todo.id); // Set the editingTodoId to the current todo's ID
    setNewText(todo.text); // Initialize newText with the current todo's text
  };

  // Handle editing submission
  const handleEditSubmit = (id) => {
    editTodo(id, { text: newText });
    setIsEditing(false);
    setEditingTodoId(null); // Reset editing state
  };

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? 'checked' : ''}
        />
        {isEditing && editingTodoId === todo.id ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={() => handleEditSubmit(todo.id)} // Save on losing focus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEditSubmit(todo.id); // Save on Enter key
            }}
            autoFocus
          />
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        )}
      </div>
      <div>
        <button
          onClick={() => handleEditStart(todo)} // Start editing the specific todo
        >
          <FaEdit />
        </button>
        <button
          style={{ marginLeft: '10px' }}
          onClick={() => deleteTodo(todo.id)}
          className={style.deleteIcon}
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default Todo;
