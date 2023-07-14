import React, { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../Database";

const context = createContext();

const Contexts = ({ children }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [original, setOriginal] = useState([]);
  const [selec, setselc] = useState("Both");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchingData = async () => {
    setLoading(true);
    try {
      setLoading(true);
      const response = await fakeFetch("https://example.com/api/menu");
      const { data } = response;
      setOriginal(data?.meetups);
      setData(data?.meetups);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  const handleSearch = () => {
    let newData = original.filter((curData) => {
      return curData.title.toLowerCase().includes(search.toLowerCase());
    });
    setData(newData);
  };
  // funcion to submit the popup
  const handleSubmitPopup = (val, id) => {
    console.log("handle");
    console.log(val, id);

    const index = original.findIndex((item) => item.id === id);
    // console.log(index);
    if (index !== -1 && data[index].rsvp === undefined) {
      const updatedOriginal = [...data];
      updatedOriginal[index] = { ...updatedOriginal[index], rsvp: val };
      console.log("updatedOriginal");
      console.log(updatedOriginal);
      setData([...updatedOriginal]);
    }

    setShow(false);
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <context.Provider
      value={{
        data,
        loading,
        show,
        setShow,
        setLoading,
        selec,
        setselc,
        handleSearch,
        search,
        setSearch,
        handleSubmitPopup,
        setOriginal,
      }}
    >
      {children}
    </context.Provider>
  );
};

const useGlobalHook = () => {
  return useContext(context);
};

export default Contexts;
export { useGlobalHook };
