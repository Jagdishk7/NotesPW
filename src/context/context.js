import React, { useContext, useReducer, useEffect } from "react";

import { reducer } from "./Reducer";

const AppContext = React.createContext();

// we are bringing data from local storage here. It will run once the website loads.
const noteListFromLocalstorage = () => {
  let list = localStorage.getItem("noteList");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("noteList")));
  } else {
    return [];
  }
};

const AppProvider = ({ children }) => {
  // dynamic date;
  const today = new Date();
  const date = `${today.getDate()}-${
    today.getMonth() + 1
  }-${today.getFullYear()}`;

  // reducer function for state
  const defaultState = {
    loading: false,
    noteList: noteListFromLocalstorage(),
    categories: [],
    titleValue: "",
    categValue: "",
    contentValue: "",
    isNoteEditing: false,
    editId: null,
    writing: false,
    isSidebarOpen: window.innerWidth > "640" ? true : false,
    date,
    filteredNotes: [],
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const setCategoryList = () => dispatch({ type: "SET_CATEGORY_LIST" });
    setCategoryList();
    localStorage.setItem("noteList", JSON.stringify(state.noteList));
  }, [state.noteList]);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > "640") {
        dispatch({ type: "OPEN_SIDEBAR" });
      } else {
        dispatch({ type: "CLOSE_SIDEBAR" });
      }
    };
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// exporting userContext hook as "GlobalContext". It returns the object of all the states and other stuff which we have given above and we can destructure it anywhere
export const GlobalContext = () => {
  return useContext(AppContext);
};

// exporting AppContext and wrapping our whole app in it.
export { AppContext, AppProvider };
