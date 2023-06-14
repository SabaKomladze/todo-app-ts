import "./Filter.css";
import { ITask } from "../components/Interface";
function Filter({
  todos,
  activeTodos,
  active,
  setActive,

  setCompleted,

  setTodos,
}: {
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  activeTodos: ITask[];
  CompletedTodos: ITask[];
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  completed: boolean;
  deleteTodo: any;
}) {
  const clearCompleted = () => {
    const updatedTodos = todos.filter((task) => task.checked === false);
    setTodos(updatedTodos);
  };
  return (
    <div className="filters">
      <p className="length">
        {active ? activeTodos.length : todos.length} items left
      </p>
      <div className="filter-list">
        <p
          className="all choice"
          onClick={() => {
            setActive(false);
            setCompleted(false);
          }}
        >
          All
        </p>
        <p
          className="active choice"
          onClick={() => {
            setActive(true);
            setCompleted(false);
          }}
        >
          Active
        </p>
        <p
          className="completed choice"
          onClick={() => {
            setCompleted(true);
            setActive(false);
          }}
        >
          Completed
        </p>
      </div>
      <p
        className="clear"
        onClick={() => {
          clearCompleted();
        }}
      >
        Clear Completed
      </p>
    </div>
  );
}
export default Filter;
