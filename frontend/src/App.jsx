import { useEffect, useState } from "react";
import axios from "axios";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [value, setValue] = useState("");
  const [activity, setActivity] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4080/activitylist`)
      .then((data) => {
        setActivity(data.data);
      })
      .catch((err) => {
        console.error("Error fetching activities:", err);
      });
  }, []);


  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const addActivity = () => {
    axios.post(`http://localhost:4080/addactivity`, { addactivity: value })
      .then((response) => {
        setActivity([...activity, response.data]);
        setValue("");
      })
      .catch((err) => {
        console.error("Error adding activity:", err);
      });
  };

  const deleteActivity = (id) => {
    axios.post(`http://localhost:4080/deleteactivity`, { id })
      .then(() => {
        setActivity((prevActivities) => prevActivities.filter((item) => item._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting activity:", err);
      });
  };

  const editActivity = (id, currentActivity) => {
    setEditingId(id);
    setValue(currentActivity);
  };

  const saveEdit = () => {
    axios.post(`http://localhost:4080/editactivity`, { id: editingId, updatedActivity: value })
      .then(() => {
        setActivity((prevActivities) =>
          prevActivities.map((item) =>
            item._id === editingId ? { ...item, activity: value } : item
          )
        );
        setValue("");
        setEditingId(null);
      })
      .catch((err) => {
        console.error("Error saving edit:", err);
      });
  };

  const toggleComplete = (id, isCompleted) => {
    axios.post(`http://localhost:4080/togglecomplete`, { id, completed: !isCompleted })
      .then(() => {
        setActivity((prevActivities) =>
          prevActivities.map((item) =>
            item._id === id ? { ...item, completed: !isCompleted } : item
          )
        );
      })
      .catch((err) => {
        console.error("Error toggling completion:", err);
      });
  };

  return (
    <div className="px-1 md:px-0 flex justify-center items-center h-screen bg-blue-500">
      <main className="p-5 rounded-xl text-center w-full sm:w-3/4 lg:w-1/2 min-w-fit h-1/2 min-h-fit bg-gray-200 shadow-lg shadow-gray-500/50">

        <AddTodo handleValue={handleValue} value={value} saveEdit={saveEdit} editingId={editingId} addActivity={addActivity} />

        <TodoList activity={activity} toggleComplete={toggleComplete} deleteActivity={deleteActivity} editActivity={editActivity} />

      </main>
    </div >
  );
}

export default App;
