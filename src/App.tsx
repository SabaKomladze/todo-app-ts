import "./App.css";
import { FC, useState } from "react";
import { ITask } from "./components/Interface";
import Input from "./components/Input/Input";
import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./Filter/Filter";
import { DragDropContext } from "react-beautiful-dnd";

const App: FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<ITask[]>([]);
  const [checked, setChecked] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const activeTodos = todos.filter((task: ITask) => task.checked === false);
  const CompletedTodos = todos.filter((task: ITask) => task.checked === true);
  const deleteTodo = (index: number) => {
    let reduce = [...todos];
    reduce.splice(index, 1);
    setTodos(reduce);
  };
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
        {(active ? activeTodos : completed ? CompletedTodos : todos).map(
          (task, index) => (
            <AddTodo
              key={index}
              task={task}
              todos={todos}
              setTodos={setTodos}
              index={index}
              deleteTodo={deleteTodo}
            />
          )
        )}
        {todos.length > 0 && (
          <Filter
            todos={todos}
            setTodos={setTodos}
            active={active}
            setActive={setActive}
            activeTodos={activeTodos}
            CompletedTodos={CompletedTodos}
            completed={completed}
            setCompleted={setCompleted}
            deleteTodo={deleteTodo}
          />
        )}
      </div>
      <div></div>
    </div>
  );
};

export default App;
