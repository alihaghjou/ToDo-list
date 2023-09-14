import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import MessageBar from "./Components/MessageBar";
import type { todoType } from "./types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addTodo } from "./dataSlice";

//TODO: add filter button
// change site font based on screen size

function App() {
  const selector = useSelector((state: RootState) => state.todo)
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<todoType[]>([]);
  const render = useRef(0);

  console.log(selector)

  useEffect(() => {
    console.log(selector)
  }, [selector])

  useEffect(() => {
    if (render.current === 0) {
      if (localStorage.getItem("data")) {
        setData(JSON.parse(localStorage.getItem("data") as string));
      }
      render.current = 1;
    }
  }, []);

  useEffect(() => {
    localStorage.removeItem("data");
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="px-4">
      <button onClick={() => {dispatch(addTodo({Todo:"test r", description:"test r"}))}}>Add</button>
      <Form
        data={data}
        setData={setData}
        setOpen={setOpen}
        setIsSuccess={setIsSuccess}
      />
      {data?.length ? (
        <List data={data} setData={setData} />
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
