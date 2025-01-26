import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
const root = createRoot(document.getElementById("root"));

const Button = ({ text }) => {
  return <button>{text}</button>;
};
root.render(<App />);
