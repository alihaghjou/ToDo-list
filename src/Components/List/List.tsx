import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { data } from "../../App";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EachItemAction from "./EachItemAction";

const List = ({
  data,
  setData,
}: {
  data: data[];
  setData: React.Dispatch<React.SetStateAction<data[]>>;
}) => {
  return (
    <div className="flex flex-col gap-4 my-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex flex-col py-4 justify-between pr-4 border-b-2 border-sky-900 hover:shadow-xl"
        >
          <EachItemAction item={item} data={data} setData={setData} />
          <Accordion
            sx={{
              background: "none",
              color: "white",
              boxShadow: "none",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon color="info" />}>
              <Typography fontSize="14px">Detail</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default List;
