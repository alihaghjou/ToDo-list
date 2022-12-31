import { Typography } from "@mui/material";
import { useEffect, useRef, useState, useContext } from "react";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import MessageBar from "./Components/MessageBar";

export interface data {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
  description: string;
}

function App() {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<data[]>([]);
  const render = useRef(0);

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
      <Form
        data={data}
        setData={setData}
        setOpen={setOpen}
        setIsSuccess={setIsSuccess}
      />
      {data?.length ? (
        <List data={data} setData={setData} />
      ) : (
        <Typography textAlign="center" fontSize="28px">
          Your List is Empty!
        </Typography>
      )}
      <MessageBar open={open} setOpen={setOpen} isSuccess={isSuccess} />
    </div>
  );
}

export default App;
