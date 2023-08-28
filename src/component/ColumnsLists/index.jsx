import { SColumns, SContainer } from "./styles";
import { Column } from "../Column";
import { useColumnsList } from "./hooks/useColumnList";


export const ColumnsList = () => {
  const { resStatus, resError, columns } = useColumnsList();

  if (resError) {
    return <h2>Error: {error}</h2>;
  }

  if (resStatus === "Loading" || !columns[0]) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <SColumns>
        <SContainer>
          {columns.map((column) => (
            <Column
              key={column.type}
              type={column.type}
              title={column.title.toUpperCase()}
              tasks={column.tasks}
            />
          ))}
        </SContainer>
      </SColumns>
    </div>
  );
};
