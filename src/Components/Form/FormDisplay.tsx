import { TextField, Button } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import type { todoInput } from "../../types/types";

const FormDisplay = ({
  register,
}: {
  register: UseFormRegister<todoInput>;
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 px-4">
        <TextField
          {...register("Todo", { required: true, maxLength: 50 })}
          label="Add ToDo"
          id="add todo"
          variant="standard"
          fullWidth
          autoFocus={true}
          sx={{
            label: { color: "lightgray" },
            input: { color: "aliceblue", padding: "5px", fontSize: "24px" },
          }}
        />
        <TextField
          {...register("description")}
          id="description"
          variant="standard"
          label="description"
          color="primary"
          multiline
          fullWidth
          minRows="2"
          sx={{
            label: { color: "lightgray" },
            textArea: { color: "aliceblue", padding: "5px" },
          }}
        />
      </div>
      <Button
        variant="outlined"
        type="submit"
        className="px-6 py-2 text-white"
        size="large"
      >
        Submit
      </Button>
    </>
  );
};

export default FormDisplay;
