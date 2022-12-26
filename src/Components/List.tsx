import { Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { data } from "../App";

const List = ({
  data,
  setData,
}: {
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
}) => {
  function handle(selected: data, action: string) {
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
    <div className="flex flex-col gap-4 my-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-row py-4 justify-between pr-4 border-b-2 border-sky-900 hover:shadow-xl"
        >
          <div>
            <Typography fontSize="20px">{item.title}</Typography>
            <Typography fontSize="12px" fontStyle="italic" color="lightgray">
              {typeof item.date !== "string"
                ? item.date.toDateString()
                : item.date}
            </Typography>
          </div>
          <div className="flex flex-row justify-center items-center gap-2">
            {item.completed ? (
              <CheckCircleOutlineIcon />
            ) : (
              <Button color="warning" onClick={() => handle(item, "complete")}>
                Complete
              </Button>
            )}
            <Button color="error" onClick={() => handle(item, "delete")}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
