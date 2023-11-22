import { motion } from "framer-motion";

import { useState } from "react";
import { Todo } from "src/types";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  list: Todo[];
}

const Form = ({ setList, list }: FormProps) => {
  const [value, setValue] = useState<string>("");
  let status = list.length < 1 ? "wide" : "narrow";

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: Todo = {
      title: value,
      isComplete: false,
      id: uuidv4(),
    };

    if (newTodo.title.trim() !== "") {
      setList([newTodo, ...list]);
      setValue("");
    }
  };

  const clearHandler = () => {
    setList([]);
  };

  return (
    <form className="flex w-full gap-3" onSubmit={submitHandler}>
      <motion.input
        initial={{
          transform: "translateX(-100px)",
          opacity: 0,
        }}
        animate={status}
        variants={{
          wide: {
            transform: "translateX(0)",
            opacity: 1,
          },
          narrow: {
            transform: "translateX(0)",
            opacity: 1,
          },
        }}
        transition={{
          delay: 0.5,
        }}
        type="text"
        className="flex-1 rounded border-[1px] border-zinc-800 px-3 py-2 focus-within:outline-none focus:ring-4 focus:ring-blue-300 focus:placeholder:text-transparent"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Input your task here"
      />
      <motion.button
        type="submit"
        initial={{
          transform: "translateX(100px)",
          opacity: 0,
        }}
        animate={{
          transform: "translateX(0)",
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
        className="rounded bg-zinc-800 px-3 py-2 text-white hover:bg-zinc-700 focus:ring-4 focus:ring-blue-300"
      >
        Submit new task
      </motion.button>

      {status === "narrow" && (
        <motion.div
          initial={{
            width: 0,
            backgroundColor: "#fff",
          }}
          animate={status}
          variants={{
            narrow: {
              width: "auto",
            },
          }}
          whileHover={{
            backgroundColor: "#dde2e7",
          }}
          className="overflow-hidden "
        >
          <motion.button
            type="button"
            className="whitespace-nowrap rounded border-[1px] border-zinc-800 px-3 py-2 focus:ring-4 focus:ring-blue-300"
            onClick={clearHandler}
          >
            Clear list
          </motion.button>
        </motion.div>
      )}
    </form>
  );
};
export default Form;
