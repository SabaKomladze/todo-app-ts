import "./App.css";
import { FC, useState } from "react";
import { ITask } from "./components/Interface";
import Input from "./components/Input/Input";
import AddTodo from "./components/AddTodo/AddTodo";
const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<ITask[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <div className="app">
      <div className="header-input">
        <Input
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          checked={checked}
          setChecked={setChecked}
        />
      </div>
      <div className="list">
        {todos.map((task: ITask, index: number) => {
          return (
            <AddTodo
              key={index}
              task={task}
              todos={todos}
              setTodos={setTodos}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
