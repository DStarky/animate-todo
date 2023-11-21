import { MotionConfig, motion } from "framer-motion";
import Todo from "./Todo";

type OneTaskProps = Todo &
  React.HTMLAttributes<HTMLLIElement> & {
    setList: React.Dispatch<React.SetStateAction<Todo[]>>;
    list: Todo[];
  };

const OneTask = ({
  id,
  title,
  isComplete,

  setList,
  list,
}: OneTaskProps) => {
  const clickHandler = () => {
    // Инвертируем статус isComplete
    const updatedList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    // Обновляем состояние списка
    setList(updatedList);
  };

  return (
    <MotionConfig transition={{ duration: 0.25 }}>
      <motion.div
        onClick={clickHandler}
        className="flex cursor-pointer items-center gap-2 rounded px-2 py-1"
        initial={false}
        animate={{
          backgroundColor: isComplete ? "#dde2e7" : "#fff",
        }}
      >
        <div className="relative h-5 w-5 rounded-full border-[1px] border-zinc-800 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute inset-0 left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.path
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: isComplete ? 1 : 0,
                opacity: isComplete ? 1 : 0,
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <p className="relative">
          {title}
          <motion.span
            initial={false}
            animate={{ width: isComplete ? "100%" : "0%" }}
            className="absolute left-0 top-[55%] h-[1px] bg-zinc-800"
          />
        </p>
      </motion.div>
    </MotionConfig>
  );
};
export default OneTask;
