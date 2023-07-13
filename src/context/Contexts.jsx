import React, { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../Database";
const context = createContext();
const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/menu");
    setData(data.meetups);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return <context.Provider value={{ data }}>{children}</context.Provider>;
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
