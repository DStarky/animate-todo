import { useState } from "react";
import { Todo } from "src/types";
import Form from "./Form";
import List from "./List";

const Todo = () => {
  const [list, setList] = useState<Todo[]>([]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
      <div className="w-full max-w-3xl rounded-xl bg-white p-6">
        <Form setList={setList} list={list} />
        <List list={list} setList={setList} />
      </div>
    </div>
  );
};
export default Todo;
