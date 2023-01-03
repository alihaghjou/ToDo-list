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
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("Todo", { required: true, maxLength: 50 })}
            type="text"
            name="add todo"
            id="add todo"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="add todo"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Add ToDo
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            {...register("description")}
            name="description"
            id="description"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
      </div>

      <Button type="submit" className="px-6 py-2" size="large">
        Submit
      </Button>
    </>
  );
};

export default FormDisplay;
