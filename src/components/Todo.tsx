import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Todo } from "src/types";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [list, setList] = useState<Todo[]>([]);
  const [progress, setProgress] = useState<string>("50%");

  useEffect(() => {
    const total = list.length;
    const completed = list.reduce( (acc, task) => {
      const count = task.isComplete === true ? 1 : 0;
      return acc + count;
    }, 0)

    const percentage = (completed / total) * 100;

    setProgress(`${percentage}%`);

  }, [list]);
  

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-white p-6">
        <motion.div
          className="from-red absolute left-0 top-0 h-[10px] rounded bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{width: 0}}
          animate={{width: progress}}
        ></motion.div>
        <Form setList={setList} list={list} />
        <List list={list} setList={setList} />
      </div>
    </div>
  );
};
export default Todo;
