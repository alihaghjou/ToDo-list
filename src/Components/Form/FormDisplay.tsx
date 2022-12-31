import { TextField, Button } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { todoInput } from "./Form";

const FormDisplay = ({
  register,
}: {
  register: UseFormRegister<todoInput>;
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        <TextField
          {...register("Todo", { required: true, maxLength: 50 })}
          fullWidth
          id="standard"
          label="Add Your ToDo"
          variant="standard"
          sx={{
            input: { color: "aliceblue", fontSize: "22px" },
            label: { color: "blueviolet" },
          }}
        />
        <TextField
          {...register("description")}
          id="standard"
          sx={{
            label: { color: "blueviolet" },
            textArea: { color: "aliceblue", fontSize: "22px" },
          }}
          label="description"
          variant="standard"
          fullWidth
          multiline
        />
      </div>
      <Button type="submit" className="px-6 py-2" size="large">
        Submit
      </Button>
    </>
  );
};

export default FormDisplay;
