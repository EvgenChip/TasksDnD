import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const dataTasks = (await api.read()).tasks;
      if (!dataTasks) {
        throw new Error("Server Error");
      }
      return dataTasks.reduce(
        (acc, item) => ({
          ...acc,
          [item.status]: [...(acc[item.status] || []), item],
        }),
        {}
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const backUpdateTasks = createAsyncThunk(
  "tasks/backUpdateTasks",
  async (task, { rejectWithValue, dispatch }) => {
    try {
      dispatch(updateTasks(task));
      const response = await api.update(task.dropItem);
      console.log(response);
    } catch (error) {}
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    status: null,
    error: null,
  },
  reducers: {
    updateTasks(state, action) {
      const item = action.payload.dropItem;
      const type = action.payload.type;
      console.log("action", item);
      if (item.status !== type) {
        if (item.status == "waiting" && type == "done") {
          return;
        } else {
          (state.tasks[type] = [
            ...state.tasks[type],
            { ...item, status: type },
          ]),
            (state.tasks[item.status] = [
              ...state.tasks[item.status].filter((el) => el.id !== item.id),
            ]);
        }
      }
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state) => {
      (state.status = "Welcome Piano..."), (state.error = null);
    },
    [fetchTasks.fulfilled]: (state, action) => {
      (state.status = "resolved"), (state.tasks = action.payload);
    },
    [fetchTasks.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { getTasks, updateTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
