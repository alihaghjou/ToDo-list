import { SubmitHandler, useForm } from "react-hook-form";
import type { todoInput } from "../../types/types";
import FormDisplay from "./FormDisplay";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/dataSlice";
import { openMessage } from "../../redux/openSlice";

const Form = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm<todoInput>();
  const onSubmit: SubmitHandler<todoInput> = (input) => {
    dispatch(addTodo(input))
    dispatch(openMessage({open: true, success: true}))
    reset()
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 w-full mb-4 justify-center items-center"
    >
      <FormDisplay register={register} />
    </form>
  );
};

export default Form;
