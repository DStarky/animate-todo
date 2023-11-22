import { AnimatePresence, motion } from "framer-motion";

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
    <form className="flex w-full max-sm:flex-col" onSubmit={submitHandler}>
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
        className="flex-1 rounded border-[1px] border-zinc-800 px-3 py-2 focus-within:outline-none focus:ring-4 focus:ring-blue-300 focus:placeholder:text-transparent max-sm:mb-3 sm:mr-3"
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
        className="flex-shrink-0 rounded bg-zinc-800 px-3 py-2 text-white hover:bg-zinc-700"
      >
        Submit new task
      </motion.button>
      <AnimatePresence>
        {status === "narrow" && (
          <motion.div
            key={"reset"}
            initial={{
              width: 0,
              opacity: 0,
              height: 0,
            }}
            animate={status}
            variants={{
              narrow: {
                width: "auto",
                height: "auto",
                opacity: 1,
              },
            }}
            exit={{
              width: 0,
              opacity: 0,
              height: 0,
            }}
            className="overflow-hidden "
          >
            <motion.button
              type="button"
              className="whitespace-nowrap rounded border-[1px] border-zinc-800 px-3 py-2 hover:bg-zinc-200  max-sm:mt-3 max-sm:w-full sm:ml-3"
              onClick={clearHandler}
            >
              Clear list
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
};
export default Form;
