import React, { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Todo from "./Todo";
import { db } from "./firebase";
import {
  query,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const style = {
  bg: `min-h-screen w-screen p-4 bg-gradient-to-b from-gray-400 to-gray-900`, // Gray to dark gradient
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 overflow-y-auto`, // Added overflow-y-auto
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-gray-800 text-white`, // Dark button with white text
  count: `text-center p-2`,
};

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //Clear todos every 2 hours
  const MINUTE_MS = 7200000;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Logs every minute");
      deleteAllTodos();
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  });

  const deleteAllTodos = async () => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ id: doc.id });
      });
      setTodos(todosArr);
      console.log(todosArr);
      console.log(todosArr.length);
      if (todosArr.length > 0) {
        //todosArr.forEach(myFunction);
        for (let i = 0; i < todosArr.length; i++) {
          const idValue = todosArr[i].id;
          deleteTodo(idValue);
        }
      }
      //{todosArr.length > 0 ? (todosArr.forEach(deleteTodo)) : null};
    });
    return () => unsubscribe();
  };

  // Edit todo
  const editTodo = async (id, updatedData) => {
    const todoRef = doc(db, "todos", id); // Reference to the specific document

    try {
      // Update the document with new data
      await updateDoc(todoRef, updatedData);
      console.log(`Todo with ID: ${id} successfully updated`);
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

// Create todo
const createTodo = async (e) => {
  e.preventDefault();
  if (input === "") {
    alert("Please enter a valid todo");
    return;
  }
  await addDoc(collection(db, "todos"), {
    text: input,
    completed: false,
    createdAt: serverTimestamp(), // Add timestamp when creating a todo
  });
  setInput("");
};

  // Read todo from firebase
  useEffect(() => {
    // const q = query(collection(db, "todos"));
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //   let todosArr = [];
    //   querySnapshot.forEach((doc) => {
    //     todosArr.push({ ...doc.data(), id: doc.id });
    //   });
    //   setTodos(todosArr);
    // });
    // return () => unsubscribe();

    const q = query(collection(db, "todos"), orderBy("createdAt", "asc")); // Order by createdAt field
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const todosArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosArray); // Set your todos state here
    });
    return unsubscribe;
  }, []);

  // Update todo in firebase
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  // Delete todo
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add Todo"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} todos`}</p>
        )}
      </div>
    </div>
  );
}

export default App;
