import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { fetchTasks } from "../../../store/tasksSlice";
export const useColumnsList = () => {
  const dispatch = useDispatch();
  const { resStatus, resError } = useSelector((state) => state.tasks);
  const dataTasks = useSelector((state) => state.tasks.tasks);

  const columns = useMemo(() => {
    const res = Object.keys(dataTasks).map(
      (key) =>
        (key = {
          type: key,
          title: key,
          tasks: dataTasks[key],
        })
    );

    return res;
  }, [dataTasks]);

  useEffect(() => {
    dispatch(fetchTasks());
  }, []);

  return {
    resStatus,
    resError,
    columns,
  };
};
