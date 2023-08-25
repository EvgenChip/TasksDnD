import { useDrag } from "react-dnd";
import { STask } from "./styles";

export const Task = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: "task",
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <STask ref={dragRef} key={task.id}>
      {task.name}
    </STask>
  );
};
