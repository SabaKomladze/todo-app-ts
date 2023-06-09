import { ITask } from "../Interface";
import "./AddTodo.css";

interface Props {
  task: ITask;
}
const AddTodo = ({ task }: Props) => {
  return (
    <div className="task-main">
      <div className="check-text">
        <input
          type="checkbox"
          className="checkbox second"
          checked={task.checked}
        />
        <p className="text">{task.taskName}</p>
      </div>
      <img src="./assets/icon-cross.svg" alt="cross" className="delete" />
    </div>
  );
};
export default AddTodo;
