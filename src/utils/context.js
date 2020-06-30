import React, {createContext, useState} from 'react';

export const AppContext = createContext({col: '', useCol: null, infoList: [], fav: [], useFav: null});

export const AppProvider = ({children}) => {
  const infoList = [
    {id: 0, title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {id: 1, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {id: 2, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {id: 3, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
  ];
  const [fav, useFav] = useState([]);

  const [col, useCol] = useState('#ffffff');

  return (
    <AppContext.Provider
      value={{
        col,
        useCol,
        infoList,
        fav,
        useFav,
      }}>
      {children}
    </AppContext.Provider>
  );
};
