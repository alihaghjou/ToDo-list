import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { todoType, todoInput } from "../../types/types";
import FormDisplay from "./FormDisplay";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/dataSlice";

const Form = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm<todoInput>();
  const onSubmit: SubmitHandler<todoInput> = (input) => {
    dispatch(addTodo(input))
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
