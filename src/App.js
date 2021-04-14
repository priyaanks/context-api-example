import "./App.css";
import { Provider } from "./Provider";
import Counter from "./features/counter/Counter";
import Todo from "./features/todos/Todo";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h3>React Context API Example</h3>
        <Provider>
          <Counter></Counter>
          <Todo></Todo>
        </Provider>
      </header>
    </div>
  );
}

export default App;
