import { Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import type { todoType } from "../../types/types";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import EditTodo from "./EditTodo";

const EachItemAction = ({
  EachTodo,
  data,
  setData,
}: {
  EachTodo: todoType;
  data: todoType[];
  setData: React.Dispatch<React.SetStateAction<todoType[]>>;
}) => {
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);

  function handleActions(selected: todoType, action: string) {
    if (!data) return;
    switch (action) {
      case "delete":
        const deleteItem = data?.filter((item) => item.id !== selected.id);
        setData(deleteItem);
        localStorage.setItem("data", JSON.stringify(deleteItem));
        break;
      case "complete":
        const completeItem = data?.filter((item) => item.id === selected.id);
        const restItem = data?.filter((item) => item.id !== selected.id);
        const place = data.findIndex((item) => item.id === selected.id);
        completeItem[0].completed = true;
        restItem.splice(place, 0, completeItem[0]);
        setData(restItem);
        localStorage.setItem("data", JSON.stringify(restItem));
        break;
    }
  }
  return (
    <div className="flex flex-row justify-between">
      <div>
        <section className="flex">
          <Typography fontSize="20px" marginRight="10px">
            {EachTodo.title}
          </Typography>
          <IconButton onClick={handleOpenModal} size="small">
            <EditIcon fontSize="small" color="info" />
          </IconButton>
        </section>
        <EditTodo
          EachTodo={EachTodo}
          data={data}
          setData={setData}
          open={open}
          setOpen={setOpen}
        />
        <Typography fontSize="12px" fontStyle="italic" color="lightgray">
          {typeof EachTodo.date !== "string"
            ? EachTodo.date.toDateString()
            : EachTodo.date}
        </Typography>
      </div>
      <div className="flex flex-row justify-center items-center gap-2">
        {EachTodo.completed ? (
          <CheckCircleOutlineIcon />
        ) : (
          <Button
            color="warning"
            onClick={() => handleActions(EachTodo, "complete")}
          >
            Complete
          </Button>
        )}
        <Button color="error" onClick={() => handleActions(EachTodo, "delete")}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EachItemAction;
