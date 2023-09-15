import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { todoType } from "../../types/types";
import { useDispatch } from "react-redux";
import { editTodo } from "../../redux/dataSlice";

const EditTodo = ({
  EachTodo,
  open,
  setOpen,
}: {
  EachTodo: todoType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch()
  const handleCloseModal = () => setOpen(false);
  const [editTitleValue, setEditTitleValue] = useState(EachTodo.title);
  const [editDescriptionValue, setEditDescriptionValue] = useState(
    EachTodo.description
  );

  function handleTodoEdit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(editTodo({EachTodo, editTitleValue, editDescriptionValue}))
    handleCloseModal();
  }

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded bg-white p-8">
        <Typography className="mb-8 pb-4" variant="h4" color="darkslategrey">
          Edit Your TODO:
        </Typography>
        <form className="flex flex-col gap-8" onSubmit={handleTodoEdit}>
          <TextField
            id="edit-title"
            label="Edit Title"
            variant="standard"
            value={editTitleValue}
            onChange={(e) => setEditTitleValue(e.target.value)}
          />
          <TextField
            id="edit-description"
            label="Edit Description"
            variant="standard"
            value={editDescriptionValue}
            onChange={(e) => setEditDescriptionValue(e.target.value)}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Box>
    </Modal>
  );
};

export default EditTodo;
