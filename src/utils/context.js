import React, {createContext, useState} from 'react';

export const AppContext = createContext({col: '', useCol: null});

export const AppProvider = ({children}) => {
  const [col, useCol] = useState('#ffffff');

  return (
    <AppContext.Provider
      value={{
        col,
        useCol,
      }}>
      {children}
    </AppContext.Provider>
  );
};
