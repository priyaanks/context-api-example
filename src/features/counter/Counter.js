import React, { useState, useContext } from "react";
import { AppContext } from "../../Provider";
import styles from "./Counter.module.css";

export default function Counter() {
  const { appState, setAppState } = useContext(AppContext);
  const { counter } = appState;
  const [incrementAmount, setIncrementAmount] = useState("2");

  const updateCounter = (action) => {
    switch (action) {
      case "decrement":
        setAppState({
          ...appState,
          counter: appState.counter - 1,
        });
        break;
      case "increment":
        setAppState({
          ...appState,
          counter: appState.counter + 1,
        });
        break;
      case "incrementByAmt":
        setAppState({
          ...appState,
          counter: appState.counter + Number(incrementAmount),
        });
        break;
      case "async":
        setAppState({
          ...appState,
          counter: appState.counter + 1,
        });
        break;
      default:
        break;
    }
  };

  console.log("💎💎💎 Rendering - Counter Component 💎💎💎");

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label='Decrement value'
          onClick={() => updateCounter("decrement")}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label='Increment value'
          onClick={() => updateCounter("increment")}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => updateCounter("incrementByAmt")}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => setTimeout(() => updateCounter("async"), 1000)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
