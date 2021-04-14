import { createContext, useState } from "react";

const initialState = {
  counter: 0,
  todos: [],
};

const AppContext = createContext(initialState);

function Provider(props) {
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider value={{ appState: state, setAppState: setState }}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, Provider };
