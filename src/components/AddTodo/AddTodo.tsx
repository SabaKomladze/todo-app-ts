import { useState } from "react";
import { ITask } from "../Interface";
import "./AddTodo.css";

interface Props {
  task: ITask;
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  index: number;
  deleteTodo: any;
}
const AddTodo = ({ index, task, todos, setTodos, deleteTodo }: Props) => {
  const [checked, setChecked] = useState<boolean>(task.checked);

  return (
    <div className="task">
      <div className="task-main">
        <div className="check-text">
          <label className="label">
            <input
              type="checkbox"
              className="checkbox second"
              checked={task.checked}
              onClick={() => {
                setChecked(!task.checked);
                task.checked = !task.checked;
                console.log(task.checked);
                console.log("sad");
              }}
            />
          </label>
          <p
            className="text"
            style={
              task.checked
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
    </div>
  );
};
export default AddTodo;
