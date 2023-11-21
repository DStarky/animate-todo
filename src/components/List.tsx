import { Todo } from "src/types";
import OneTask from "./OneTask";

interface ListProps {
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
  list: Todo[];
}

const List = ({ list, setList }: ListProps) => {
  return (
    <>
      {list.length > 0 && (
        <ul className="mt-4 space-y-2 rounded border-[1px] border-zinc-800 px-2 py-2  ">
          {list.map((todo) => (
            <OneTask
              key={todo.id}

              setList={setList}
              list={list}
              {...todo}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default List;
