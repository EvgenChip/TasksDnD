import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTasks } from "../../../store/tasksSlice";
export const useColumnsList = () => {
  const dispatch = useDispatch();
  const { resStatus, resError } = useSelector((state) => state.tasks);
  const dataTasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return {
    dispatch,
    dataTasks,
    resStatus,
    resError,
  };
};
