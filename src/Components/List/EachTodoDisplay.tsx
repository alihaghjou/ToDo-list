import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import EachItemAction from "./EachItemAction";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { todoType } from "../../types/types";

const EachTodoDisplay = ({
  displayData,
}: {
  displayData: todoType[];
}) => {
  return (
    <>
      {[...displayData].reverse().map((EachTODO) => (
        <div
          key={EachTODO.id}
          className="flex flex-col p-4 justify-between border-b-2 border-sky-900 hover:shadow-xl"
        >
          <EachItemAction EachTodo={EachTODO} />
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
      ))}
    </>
  );
};

export default EachTodoDisplay;
