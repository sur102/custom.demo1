import React, { createContext, useState } from "react";
import { getMByIndex } from "../common/GetList";

export const AreaContext = createContext();

const charm = {
  id: 0,
  cate: 0,
  x: 50,
  y: 50,
  with: 50,
  height: 50,
};

const AreaProvider = ({ children }) => {
  const [nailNow, setNailNow] = useState(getMByIndex(1));
  const [listCharms, setListCharms] = useState([charm]);

  const selectCharm = (index) => {
    setListCharms((prevCharms) => [
      ...prevCharms,
      {
        id: prevCharms[prevCharms.length - 1]?.id + 1 || 0,
        cate: index,
        x: 50,
        y: 50,
        with: 50,
        height: 50,
      },
    ]);
  };

  return (
    <AreaContext.Provider
      value={{
        nailNow,
        setNailNow,
        listCharms,
        setListCharms,
        selectCharm,
      }}
    >
      {children}
    </AreaContext.Provider>
  );
};

export default AreaProvider;
