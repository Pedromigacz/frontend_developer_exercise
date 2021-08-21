import React, { createContext, useState, useEffect } from "react";

interface createContextInterface {
  mobile: boolean;
  displayAside: boolean;
  openAside: () => void;
  closeAside: () => void;
}

export const MobileContext = createContext({} as createContextInterface);

const MobileContextProvider: React.FC = ({ children }) => {
  // setup router
  const [mobile, setMobile] = useState(false);
  const [displayAside, setDisplayAsite] = useState(false);

  const openAside = (): void => {
    setDisplayAsite(true);
  };

  const closeAside = (): void => {
    setDisplayAsite(false);
  };

  const handleResize = (): void => {
    if (window.innerWidth < 1110) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  // add javascript media query
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <MobileContext.Provider
      value={{ displayAside, mobile, openAside, closeAside }}
    >
      {children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
