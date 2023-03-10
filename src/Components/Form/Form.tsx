import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { todoType, todoInput } from "../../types/types";
import FormDisplay from "./FormDisplay";

const Form = ({
  data,
  setData,
  setIsSuccess,
  setOpen,
}: {
  data: todoType[];
  setData: React.Dispatch<React.SetStateAction<todoType[]>>;
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { register, handleSubmit, reset } = useForm<todoInput>();
  const onSubmit: SubmitHandler<todoInput> = (input) => {
    if (!data?.length) {
      setData([
        {
          id: 1,
          title: input.Todo,
          completed: false,
          date: new Date(),
          description: input.description,
        },
      ]);
      setIsSuccess(true);
      setOpen(true);
      reset();
      return;
    }
    data.map((item) => {
      if (item.title.toLowerCase() === input.Todo.toLowerCase()) {
        setIsSuccess(false);
        setOpen(true);
        reset();
        throw new Error("Enter New Title");
      }
    });

    setData([
      {
        id: data[0].id + 1,
        title: input.Todo,
        completed: false,
        date: new Date(),
        description: input.description,
      },
      ...data,
    ]);
    setIsSuccess(true);
    setOpen(true);
    reset();
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
