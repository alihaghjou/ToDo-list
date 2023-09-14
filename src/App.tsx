import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import MessageBar from "./Components/MessageBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

//TODO: add filter button
// add complete and delete slice
// add success and open slice

function App() {
  const data = useSelector((state: RootState) => state.todo);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

      <MessageBar open={open} setOpen={setOpen} isSuccess={isSuccess} />
    </div>
  );
}

export default App;
