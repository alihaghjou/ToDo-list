import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import EachItemAction from "./EachItemAction";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { todoType } from "../../types/types";

const EachTodoDisplay = ({
  EachTODO,
  data,
  setData,
}: {
  EachTODO: todoType;
  data: todoType[];
  setData: React.Dispatch<React.SetStateAction<todoType[]>>;
}) => {
  return (
    <div className="flex flex-col py-4 justify-between pr-4 border-b-2 border-sky-900 hover:shadow-xl">
      <EachItemAction item={EachTODO} data={data} setData={setData} />
      {EachTODO.description && (
        <Accordion
          sx={{
            background: "none",
            color: "white",
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon color="info" />}>
            <Typography fontSize="14px">See Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{EachTODO.description}</Typography>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
};

export default EachTodoDisplay;
