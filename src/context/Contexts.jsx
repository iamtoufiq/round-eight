import React, { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../Database";
const context = createContext();
const Contexts = ({ children }) => {
  const fetchingData = async () => {
    const { data } = await fakeFetch("https://example.com/api/menu");
    console.log(data.menu);
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return <context.Provider value={"lala"}>{children}</context.Provider>;
};
//global hook
const useGlobalHook = () => {
  return useContext(context);
};
export default Contexts;
export { useGlobalHook };
