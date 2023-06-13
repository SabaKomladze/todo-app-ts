import "./App.css";
import { FC, useState } from "react";
import { ITask } from "./components/Interface";
import Input from "./components/Input/Input";
import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./Filter/Filter";
const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<ITask[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const filteredTodos = active
    ? todos.filter((task: ITask) => task.checked === false)
    : todos;
  console.log(filteredTodos);

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
        {filteredTodos.map((task: ITask, index: number) => (
          <AddTodo
            key={index}
            task={task}
            todos={todos}
            setTodos={setTodos}
            index={index}
          />
        ))}
        {todos.length > 0 && (
          <Filter
            todos={todos}
            setTodos={setTodos}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default App;
