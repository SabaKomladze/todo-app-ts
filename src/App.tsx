import "./App.css";
import { FC, useState } from "react";
import { ITask } from "./components/Interface";
import Input from "./components/Input/Input";
import AddTodo from "./components/AddTodo/AddTodo";
const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<ITask[]>([]);

  return (
    <div className="app">
      <div className="header-input">
        <Input
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
      <div className="list">
        {todos.map((task: ITask, key: number) => {
          return <AddTodo key={key} task={task} />;
        })}
      </div>
    </div>
  );
};

export default App;
