# Todo List Application

This is a **Todo List Application** built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to add, edit, delete, mark tasks as completed, and manage their todo items efficiently.

---

## Features

- **Add Todo**: Users can add new tasks to the todo list.
- **Edit Todo**: Edit existing tasks to make changes.
- **Delete Todo**: Remove tasks that are no longer needed.
- **Toggle Completion**: Mark tasks as completed or incomplete.
- **Responsive Design**: Works on all device sizes.
- **Persisted Data**: Data is stored in MongoDB for persistence.

---

## Project Structure

### Frontend
The frontend is built using React and Tailwind CSS. It includes the following components:

- `App.jsx`: Manages the state and contains the main logic of the application.
- `AddTodo.jsx`: Handles the input for adding or editing tasks.
- `TodoList.jsx`: Displays the list of tasks and their respective actions.

### Backend
The backend is built using Node.js, Express, and MongoDB. It includes the following APIs:
- `GET /activitylist`: Fetch all todo items.
- `POST /addactivity`: Add a new todo item.
- `POST /deleteactivity`: Delete a specific todo item.
- `POST /editactivity`: Edit the content of a todo item.
- `POST /togglecomplete`: Toggle the completion status of a todo item.

---

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/M-Muthu-Pandi/Todo-List_MERN.git
   cd Todo-List_MERN/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB:
   ```bash
   mongod
   ```
4. Run the server:
   ```bash
   node index.js
   ```
   The server will run on `http://localhost:4080`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Add a new task using the input field and the **Add** button.
3. Edit tasks by clicking the **Edit** button.
4. Delete tasks using the **Delete** button.
5. Mark tasks as complete/incomplete by toggling the checkbox.

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **HTTP Client**: Axios

---

## License

This project is licensed under the MIT License.

---

## Author

[Muthupandi M](https://github.com/M-Muthu-Pandi)  
Feel free to contribute, raise issues, or fork the repository for your own use.
