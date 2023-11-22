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
      <AnimatePresence>
        {list.length > 0 && (
          <motion.ul
            key={"list"}
            initial={{
              borderColor: "#fff",
              padding: '8px 0px',
              marginTop: 0,
            }}
            animate={{
              borderColor: "#27272a",
              padding: '8px 8px',
              marginTop: 16,
            }}
            transition={{
              duration: 0.25,
            }}
            exit={{ borderColor: "#fff", padding: 0, marginTop: 0, height: 0 }}
            className="flex flex-col gap-2 rounded border-[1px] overflow-hidden"
          >
            {list.map((todo) => (
              <OneTask key={todo.id} setList={setList} list={list} {...todo} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
};
export default List;


