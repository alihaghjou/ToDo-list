import { Snackbar, AlertTitle, Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { openMessage } from "../redux/openSlice";

const MessageBar = () => {
  const {open, success} = useSelector((state: RootState) => state.open)
  const dispatch = useDispatch()
  const handleClose = () => dispatch(openMessage({open: false, success: false}));
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      {success ? (
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }} >
          <AlertTitle>Success</AlertTitle>
          Your Todo Successfully Added To List!
        </Alert>
      ) : (
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          <AlertTitle>Error</AlertTitle>
          Enter A New Todo!
        </Alert>
      )}
    </Snackbar>
  );
};

export default MessageBar;
