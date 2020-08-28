import React, { createContext, useState, useEffect } from "react";

export const MeasureContext = createContext<any>(0);

const ViewportProvider: React.FC<any> = ({ children }) => {
  // This is the exact same logic that we previously had in our hook

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Now we are dealing with a context instead of a Hook, so instead
       of returning the width and height we store the values in the
       value of the Provider */
  return (
    <MeasureContext.Provider value={{ width, height }}>
      {children}
    </MeasureContext.Provider>
  );
};

export default ViewportProvider;
