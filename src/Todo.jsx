import React, { useState } from 'react';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
};

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  // Handle editing submission
  const handleEditSubmit = () => {
    editTodo(todo.id, { text: newText });
    setIsEditing(false);
  };

  return (
    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? 'checked' : ''}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEditSubmit} // Save on losing focus
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleEditSubmit(); // Save on Enter key
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
          onClick={() => {
            setIsEditing(!isEditing); // Toggle the editing state
          }}
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
