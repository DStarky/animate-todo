import { AnimatePresence, motion } from "framer-motion";

import { Todo } from "src/types";
import OneTask from "./OneTask";

interface ListProps {
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  list: Todo[];
}

const List = ({ list, setList }: ListProps) => {
  return (
    <>
      <motion.ul
        key={"list"}
        initial={{ borderColor: "#fff" }}
        animate={{ borderColor: "#27272a" }}
        transition={{
          duration: 0.25,
        }}
        layout
        className="mt-4 flex flex-col gap-2 rounded border-[1px]  px-2 py-2"
      >
        {list.map((todo) => (
          <OneTask key={todo.id} setList={setList} list={list} {...todo} />
        ))}
      </motion.ul>
    </>
  );
};
export default List;
