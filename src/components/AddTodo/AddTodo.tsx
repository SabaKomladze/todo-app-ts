import { useState } from "react";
import { ITask } from "../Interface";
import "./AddTodo.css";

interface Props {
  task: ITask;
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  index: number;
}
const AddTodo = ({ index, task, todos, setTodos }: Props) => {
  const [checked, setChecked] = useState<boolean>(task.checked);
  const deleteTodo = (index: number) => {
    let reduce = [...todos];
    reduce.splice(index, 1);
    setTodos(reduce);
  };
  return (
    <div className="task-main">
      <div className="check-text">
        <label className="label">
          <input
            type="checkbox"
            className="checkbox second"
            checked={checked}
            onClick={(e: any) => {
              setChecked(!checked);
              console.log(e.target.checked);
            }}
          />
        </label>
        <p
          className="text"
          style={
            checked
              ? { textDecorationLine: "line-through", color: "#D1D2DA" }
              : {}
          }
        >
          {task.taskName}
        </p>
      </div>
      <img
        src="./assets/icon-cross.svg"
        alt="cross"
        className="delete"
        onClick={() => deleteTodo(index)}
      />
    </div>
  );
};
export default AddTodo;
