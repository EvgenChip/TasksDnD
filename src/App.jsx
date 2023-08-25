import React, { useEffect, useState } from "react";
import api from "../api/api";
import { ColumnsList } from "./component/ColumnsLists";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store } from "./store";

export function App() {
  return (
    <div>
      <Provider store={store}>
        {" "}
        <DndProvider backend={HTML5Backend}>
          <ColumnsList />
        </DndProvider>
      </Provider>
    </div>
  );
}
