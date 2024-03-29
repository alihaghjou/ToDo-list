import { Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import type { todoType } from "../../types/types";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import EditTodo from "./EditTodo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { completeTodo, deleteTodo } from "../../redux/dataSlice";

const EachItemAction = ({
  EachTodo,
}: {
  EachTodo: todoType;
}) => {
  const selector = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => setOpen(true);

  function handleActions(selected: todoType, action: string) {
    if (!selector) return;
    switch (action) {
      case "delete":
        dispatch(deleteTodo(selected))
        break;
      case "complete":
        dispatch(completeTodo(selected))
        break;
    }
  }
  return (
    <div className="flex flex-row justify-between">
      <div>
        <section className="flex">
          <Typography fontSize="20px" marginRight="10px" className="capitalize">
            {EachTodo.title}
          </Typography>
          <IconButton onClick={handleOpenModal} size="small">
            <EditIcon fontSize="small" color="info" />
          </IconButton>
        </section>
        <EditTodo
          EachTodo={EachTodo}
          open={open}
          setOpen={setOpen}
        />
        <Typography fontSize="12px" fontStyle="italic" color="lightgray">
          {EachTodo.date}
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
