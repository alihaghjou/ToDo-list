import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import MessageBar from "./Components/MessageBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

// make open and success available in other state for more functionality

function App() {
  const data = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="px-4">
      <Form />
      {data?.length ? (
        <List />
      ) : (
        <Typography variant="h4" textAlign="center">
          Your List is Empty!
        </Typography>
      )}

      <MessageBar />
    </div>
  );
}

export default App;
