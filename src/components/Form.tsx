import { useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  list: Todo[];
}

const Form = ({ setList, list }: FormProps) => {
  const [value, setValue] = useState<string>("");

  const submitHandler = (e: React.FormEvent) => {
    
    e.preventDefault();

    const newTodo: Todo = {
      title: value,
      isComplete: false,
      id: uuidv4(),
    };

    setList([...list, newTodo]);
    setValue('');
  };

  return (
    <form className="flex w-full gap-3" onSubmit={submitHandler}>
      <input
        type="text"
        className="flex-1 rounded border-[1px] border-zinc-800 px-3 py-2 focus-within:outline-none focus:ring-4 focus:ring-blue-300 focus:placeholder:text-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input your task here"
      />
      <button className="rounded bg-zinc-800 px-3 py-2 text-white focus:ring-4 focus:ring-blue-300">
        Submit new task
      </button>
    </form>
  );
};
export default Form;
