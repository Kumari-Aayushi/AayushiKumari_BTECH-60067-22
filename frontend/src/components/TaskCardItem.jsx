export default function TaskCardItem({ task }) {
  // I might move to css later but now keeping this styles inline 
  const cardStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    marginBottom: "8px"
  };
  const dueDate = task?.dueDate || task?.due_date; // backend naming is not consistent

  return (
    <div style={cardStyle}>
      <h4>{task.title}</h4>
    {task.description && (
      <p>{task.description}</p>
    )}
      
      {dueDate && (
      <small>
        Due: {dueDate.toString().slice(0, 10)}
       </small>
      )}
    </div>
  ); }
