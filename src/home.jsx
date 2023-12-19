import { useEffect, useState } from "react";
import Task from "./Tasks";

const Home = () => {
  // state to manage the text of input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // get the data from local storage

  const initialTasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  // state to hold task on List
  const [tasks, setTasks] = useState(initialTasks); // empty array indicates that starting value is Empty

  // function to add tasks in the List
  function addTask() {
    // console.log({ title, description });

    setTasks([...tasks, { title, description }]);

    // reset the feild
    setTitle("");
    setDescription("");
  }

  // function to delete tasks
  function deleteTasks(index) {
    const fiteredTasks = tasks.filter((val, i) => i !== index);
    setTasks(fiteredTasks);
  }

  function formHandler(e) {
    e.preventDefault();
  }

  useEffect(() => {
    // save tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" onClick={addTask}>
            Add
          </button>
        </form>
        {tasks.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTasks={deleteTasks}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
