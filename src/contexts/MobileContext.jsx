import React, { createContext, useState, useEffect } from "react";

export const MobileContext = createContext();

const MobileContextProvider = (props) => {
  // setup router
  const [mobile, setMobile] = useState(false);
  const [displayAside, setDisplayAsite] = useState(false);

  const openAside = () => {
    setDisplayAsite(true);
  };

  const closeAside = () => {
    setDisplayAsite(false);
  };

  const handleResize = () => {
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
      {props.children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;
