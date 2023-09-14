import { Button, ButtonGroup } from "@mui/material";
import type { todoType } from "../../types/types";
import { useEffect, useState } from "react";
import EachTodoDisplay from "./EachTodoDisplay";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const List = () => {
  const selector = useSelector((state: RootState) => state.todo);
  const [displayData, setDisplayData] = useState<todoType[]>([]);

  function filterList(action: "complete" | "onGoing" | "all") {
    switch (action) {
      case "complete":
        setDisplayData(
          selector.filter((item: todoType) => item.completed === true)
        );
        break;
      case "onGoing":
        setDisplayData(
          selector.filter((item: todoType) => item.completed !== true)
        );
        break;

      case "all":
        setDisplayData(selector);
        break;
    }
  }

  useEffect(() => {
    setDisplayData(selector);
  }, [selector]);

  return (
    <div className="flex flex-col gap-4 my-6 relative">
      <EachTodoDisplay displayData={displayData} />
      <ButtonGroup fullWidth className="absolute bottom-0 translate-y-full">
        <Button onClick={() => filterList("all")}>All</Button>
        <Button onClick={() => filterList("complete")}>Complete</Button>
        <Button onClick={() => filterList("onGoing")}>OnGoing</Button>
      </ButtonGroup>
    </div>
  );
};

export default List;
