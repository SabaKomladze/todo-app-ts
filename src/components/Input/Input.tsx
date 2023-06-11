import "./Input.css";
import { ChangeEvent, useState } from "react";
import { ITask } from "../Interface";
function Input(props: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.setInput(e.target.value);
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = { taskName: props.input, checked: props.checked };
    props.setTodos([...props.todos, newTask]);
    props.setInput("");
  };

  return (
    <div className="input-main">
      <header className="header">
        <h1 className="todo">TODO</h1>
        <img src="./assets/icon-moon.svg" alt="moon" className="moon" />
      </header>
      <form
        className="input-div"
        onSubmit={(e) => {
          addTask(e);
        }}
      >
        <input
          type="text"
          className="input-text"
          placeholder="Create a new todo…"
          onChange={handleChange}
          value={props.input}
        />
        <label className="label">
          <input
            type="checkbox"
            className="checkbox"
            onClick={(e: any) => {
              props.setChecked(e.target.checked);
            }}
          />
        </label>
      </form>
    </div>
  );
}

export default Input;
