import "./App.css";
import Articles from "./component/Articles/Articles";
import User from "./component/User/User";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>React Skeleton Learn</h1>
      </header>
      <div className="app__content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
