import React, { useState, useContext, useEffect } from "react";

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
  // Sidebar toggle state.
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth < "640" ? false : true
  );

  // State for removing everything when user is writing a note.
  const [writing, setWriting] = useState(false);

  // State to display note/card using the data from localstorage.
  const [noteList, setNoteList] = useState(noteListFromLocalstorage());

  // add note page form control states
  const [titleValue, setTitleValue] = useState("");
  const [categValue, setCategValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  // dynamic categories in the sidebar
  const sidebarCategories = noteList.map((note) => {
    const { noteCategory } = note;
    return noteCategory;
  });

  // changing categories array into set for unique values and state for managing dynamic categories in sidebar
  const categoriesSet = new Set(["All notes", ...sidebarCategories]);
  const [categories, setCategories] = useState(Array.from(categoriesSet));

  const filterNotes = (category) => {
    if (category === "All notes") {
      // const fullList = noteList.map(note => note);
      console.log(noteList);
      return;
    } else {
      const filteredList = noteList.filter(
        (note) => note.noteCategory === category
      );
      console.log(filteredList);
      return;
    }
  };

  const categoryList = categories.map((category, i) => {
    return (
      <li onClick={() => filterNotes(category)} key={i}>
        {category}
      </li>
    );
  });

  // I haven't used 'useReducer()' once you learn reducer then these functions will be set up in reducer and the code will be more clean
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const clearPage = () => {
    setWriting(true);
  };

  // this will be triggered when save button will be clicked in the addNote page.
  const saveNote = () => {
    if (titleValue !== "" && categValue !== "" && contentValue !== "") {
      const noteObj = {
        id: new Date().getTime().toString(),
        noteTitle: titleValue,
        noteCategory: categValue,
        noteContent: contentValue,
      };
      setNoteList([...noteList, noteObj]);
      setCategValue(Array.from(categoriesSet));
      setTitleValue("");
      setCategValue("");
      setContentValue("");
    }
  };

  // function to delete particular note
  const deleteNote = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
  };

  // function to find particular note

  // Storing note data in local storage everytime when the notelist changes. and the notelist changes when user add a note and save it.
  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
    setCategories(Array.from(categoriesSet));
  }, [noteList]);

  // Inspecting screen width for change in the display of sidebar. Default open in laptop screen not in smaller one
  useEffect(() => {
    const checkSidebar = () => {
      if (window.innerWidth < "640") {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", checkSidebar);

    return () => {
      window.removeEventListener("resize", checkSidebar);
    };
  }, []);

  return (
    // padding every state and function to the whole app so these can be directly accessed anywhere without prop drilling.
    <AppContext.Provider
      value={{
        sidebarOpen,
        writing,
        noteList,
        titleValue,
        categValue,
        contentValue,
        categoryList,
        setCategories,
        setTitleValue,
        setCategValue,
        setContentValue,
        setNoteList,
        setWriting,
        closeSidebar,
        openSidebar,
        clearPage,
        saveNote,
        deleteNote,
      }}
    >
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
