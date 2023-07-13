import React from "react";
import { useGlobalHook } from "./context/Contexts";

const App = () => {
  const data = useGlobalHook();
  console.log(data);
  return <div>App</div>;
};

export default App;
