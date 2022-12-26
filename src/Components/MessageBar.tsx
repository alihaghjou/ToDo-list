import { Snackbar, AlertTitle, Alert } from "@mui/material";
import React from "react";

const MessageBar = ({
  open,
  setOpen,
  isSuccess,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccess: boolean;
}) => {
  const handleClose = () => setOpen(false);
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      {isSuccess ? (
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
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
