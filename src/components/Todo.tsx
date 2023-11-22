import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";

import { Todo } from "src/types";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [progress, setProgress] = useState<string>("50%");
  const [ref, bounds] = useMeasure();

  useEffect(() => {
    const total = list.length;
    const completed = list.reduce((acc, task) => {
      const count = task.isComplete === true ? 1 : 0;
      return acc + count;
    }, 0);

    const percentage = (completed / total) * 100;

    setProgress(`${percentage}%`);
  }, [list]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white p-6"
      >
        <motion.div
          className="from-red absolute left-0 top-0 h-[10px] rounded bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ width: 0 }}
          animate={{ width: progress }}
        ></motion.div>
        <Form setList={setList} list={list} />
        <AnimatePresence>
          {list.length > 0 && (
            <motion.div
              key={"my list"}
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "300px",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="overflow-hidden"
            >
              <List list={list} setList={setList} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
export default Todo;
