import { useDrop } from "react-dnd";
import { Task } from "../Task";
import { SColumn, SColumnHeader, SColumnItem, SColumnItems } from "./styles";
import { useDispatch } from "react-redux";
import { backUpdateTasks, updateTasks } from "../../store/tasksSlice";

export const Column = ({ type, title, tasks }) => {
  const dispatch = useDispatch();
  const [{ isOver }, dropRef] = useDrop({
    accept: "task",
    drop: (dropItem) => {
      dispatch(backUpdateTasks({ dropItem, type }));
    },
    collect: (monitor) => ({
      isOver: !monitor.isOver(),
    }),
  });

  return (
    <div ref={dropRef}>
      <SColumn>
        <SColumnHeader>
          <h1>{title}</h1>
        </SColumnHeader>
        <SColumnItems>
          {tasks.length
            ? tasks.map((task) => <Task task={task} />)
            : "NO Tasks"}
        </SColumnItems>
      </SColumn>
    </div>
  );
};
