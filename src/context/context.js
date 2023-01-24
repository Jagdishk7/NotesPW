import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [onlySearchIcon, setOnlySearchIcon] = useState(false);
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  useEffect(() => {
    // const windowWidth = window.innerWidth;
    // if (windowWidth < "640") {
    //   setSidebarOpen(false);
    // }
    const checkSidebar = () => {
      if (window.innerWidth < "640") {
        setSidebarOpen(false);
        setOnlySearchIcon(true);
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
    <AppContext.Provider
      value={{
        onlySearchIcon,
        sidebarOpen,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
