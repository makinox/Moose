import React, {createContext, useState} from 'react';

export const AppContext = createContext({col: '', useCol: null, infoList: []});

export const AppProvider = ({children}) => {
  const infoList = [
    {title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
  ];

  const [col, useCol] = useState('#ffffff');

  return (
    <AppContext.Provider
      value={{
        col,
        useCol,
        infoList,
      }}>
      {children}
    </AppContext.Provider>
  );
};
