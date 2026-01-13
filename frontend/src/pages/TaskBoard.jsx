import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import {useEffect, useState} from "react";
import apiClient from "../services/apiClient";
import TaskCardItem from "../components/TaskCardItem";

// Order matters
const columns = ["pending", "in-progress", "completed"];

export default function  TaskBoard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // no loading state yet
    apiClient
   .get("/tasks")
    .then((res) => {
      setTasks(res.data);
     })
      .catch(() => {
   console.log("Failed to load the tasks")
      });
  }, []);

  const onDragEnd = async (result) => {
    if (!result.destination) return; // A column is dropped outside

    const taskId = result.draggableId;
    const newStatus = result.destination.droppableId;

    try {
      await apiClient.put(/tasks/${taskId},{
        status: newStatus
      });

      // Updating the local state 
      setTasks((prev) => {
   return prev.map((task) => {
     if (task._id === taskId) {
    return {
  ...task,
    status: newStatus
  };          }
  return task;
   });
      });
    }catch (err) {
  console.log("Drag update is failed"); }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div style={{ display: "flex", gap: "20px" }}>
    {columns.map((column) => (
      <Droppable droppableId={column} key={column}>
      {(provided) => (
        <div
      ref={provided.innerRef}
      {...provided.droppableProps}
      style={{ minWidth: "250px" }}
              >
     <h3>{column}</h3>

     {tasks
       .filter((task) => task.status === column)
       .map((task, index) => (
      <Draggable
      key={task._id}
      draggableId={task._id}
       index={index}
        >
        
{(provided) => (
 <div
  ref={provided.innerRef}
{...provided.draggableProps}
  {...provided.dragHandleProps}
 >
   
   <TaskItem task={task} />
 </div>
    )}
 </Draggable>
   ))}

          
   {provided.placeholder}
    </div>
    )}
  </Droppable>
  ))}
 </div>
</DragDropContext>
  );
}
