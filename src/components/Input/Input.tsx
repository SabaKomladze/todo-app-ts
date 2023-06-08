import "./Input.css";
function Input() {
  return (
    <div className="input-main">
      <header className="header">
        <h1 className="todo">TODO</h1>
        <img src="./assets/icon-moon.svg" alt="moon" className="moon" />
      </header>
      <div className="input-div">
        <input
          type="text"
          className="input-text"
          placeholder="Create a new todo…"
        />
        <label className="label">
          <input type="checkbox" className="checkbox" />
        </label>
      </div>
    </div>
  );
}

export default Input;
