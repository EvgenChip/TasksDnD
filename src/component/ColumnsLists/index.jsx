import { SColumns, SContainer } from "./styles";
import { Column } from "../Column";
import { useColumnsList } from "./hooks/useColumnList";

export const ColumnsList = () => {

  const { dispatch, resStatus, resError, dataTasks } = useColumnsList();

  return (
    <div>
      {resStatus === "Loading" && <h2>Loading...</h2>}
      {resError && <h2>Error: {error}</h2>}
      {dataTasks.in_progress ? (
        <SColumns>
          <SContainer>
            <Column
              type={"waiting"}
              title={"Waiting"}
              tasks={dataTasks.waiting}
            />
            <Column
              type={"in_progress"}
              title={"InProgress"}
              tasks={dataTasks.in_progress}
            />
            <Column type={"done"} title={"Done"} tasks={dataTasks.done} />
          </SContainer>
        </SColumns>
      ) : (
        "Loading"
      )}
    </div>
  );
};
