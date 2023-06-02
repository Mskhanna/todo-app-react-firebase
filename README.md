## Todo App

This is a Todo App built using ReactJS, Tailwind CSS and Firebase. The app allows users to create, read, update, and delete todo items. It utilizes Firebase Firestore for storing and retrieving data.

### Key Functionalities:

- **Create Todo**: Users can enter a todo item in the input field and click the "+" button to add it to the list of todos.
- **Read Todo**: The app retrieves todos from Firebase Firestore and displays them as a list.
- **Update Todo**: Users can mark a todo as completed or incomplete by clicking on the checkbox next to the todo item. The app updates the status of the todo in Firebase Firestore accordingly.
- **Delete Todo**: Users can delete a todo by clicking on the trash can icon next to the todo item. The app removes the todo from Firebase Firestore.

### Technologies Used:

- **React**: The app is built using React, a popular JavaScript library for building user interfaces.
- **Firebase**: The app uses Firebase Firestore, a cloud-based NoSQL database, for storing and retrieving todo data.
- **Firebase Authentication** (not included in the code): The app doesn't include authentication, but Firebase Authentication can be integrated to add user authentication and secure access to the app.
- **React Icons**: The app uses React Icons library to display icons for the add todo button and delete todo button.
- **Tailwind CSS**: The app utilizes Tailwind CSS for styling the components. It includes utility classes for layout, typography, and colors.
- **React Hooks**: The app uses React Hooks, specifically useState and useEffect, for managing state and performing side effects like fetching data from Firebase Firestore.
