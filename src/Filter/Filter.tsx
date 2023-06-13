import "./Filter.css";
import { ITask } from "../components/Interface";
function Filter({
  todos,
  setTodos,
  active,
  setActive,
}: {
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="filters">
      <p className="length">{todos.length} items left</p>
      <div className="filter-list">
        <p className="all choice">All</p>
        <p
          className="active choice"
          onClick={() => {
            setActive(!active);
          }}
        >
          Active
        </p>
        <p className="completed choice">Completed</p>
      </div>
      <p className="clear">Clear Completed</p>
    </div>
  );
}
export default Filter;
