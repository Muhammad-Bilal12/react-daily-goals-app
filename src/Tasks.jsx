const Task = ({ title, description, deleteTasks, index }) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <span>{description}</span>
        <button
          onClick={() => {
            deleteTasks(index);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Task;
