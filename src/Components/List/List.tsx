import { Button, ButtonGroup } from "@mui/material";
import type { todoType } from "../../types/types";
import { useEffect, useState } from "react";
import EachTodoDisplay from "./EachTodoDisplay";

const List = ({
  data,
  setData,
}: {
  data: todoType[];
  setData: React.Dispatch<React.SetStateAction<todoType[]>>;
}) => {
  const [displayData, setDisplayData] = useState<todoType[]>([]);

  function filterList(action: "complete" | "onGoing" | "all") {
    switch (action) {
      case "complete":
        setDisplayData(data.filter((item) => item.completed === true));
        break;
      case "onGoing":
        setDisplayData(data.filter((item) => item.completed !== true));
        break;

      case "all":
        setDisplayData(data);
        break;
    }
  }

  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  return (
    <div className="flex flex-col gap-4 my-6 relative">
      {displayData.map((EachTODO) => (
        <EachTodoDisplay
          key={EachTODO.id}
          EachTODO={EachTODO}
          data={data}
          setData={setData}
        />
      ))}
      <ButtonGroup fullWidth className="fixed bottom-0 left-0 mb-4 px-20">
        <Button onClick={() => filterList("all")}>All</Button>
        <Button onClick={() => filterList("complete")}>Complete</Button>
        <Button onClick={() => filterList("onGoing")}>OnGoing</Button>
      </ButtonGroup>
    </div>
  );
};

export default List;
