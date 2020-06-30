import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const AppContext = createContext({col: '', useCol: null, infoList: [], fav: [], addFav: null, deleteFav: null});

export const AppProvider = ({children}) => {
  const infoList = [
    {id: 0, title: 'Primera', subtitle: 'Prime', img: 'https://picsum.photos/id/1056/150/180'},
    {id: 1, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1001/150/180'},
    {id: 2, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1000/150/180'},
    {id: 3, title: 'Senconda', subtitle: 'Second', img: 'https://picsum.photos/id/1013/150/180'},
  ];
  const [fav, useFav] = useState([]);
  const [col, useCol] = useState('#ffffff');

  const getFavStorage = async () => {
    try {
      const result = await AsyncStorage.getItem('favorites');
      if (result !== null) {
        return result;
      } else {
        return [];
      }
    } catch (error) {
      console.log({error: true, message: error});
    }
  };
  const syncFavStorage = async item => {
    try {
      await AsyncStorage.setItem('favorites', JSON.stringify(item));
    } catch (error) {
      console.log({error: true, message: error});
    }
  };
  const addFav = item => {
    useFav([...fav, item]);
    syncFavStorage([...fav, item]);
  };
  const deleteFav = item => {
    const result = fav.filter(el => el.id !== item.id);
    useFav(result);
    syncFavStorage(result);
  };

  useEffect(() => {
    getFavStorage()
      .then(res => {
        useFav(JSON.parse(res));
        AsyncStorage.clear();
        console.log({start: true, res: JSON.parse(res)});
      })
      .catch(() => console.log('Clear'));
  }, []);

  return (
    <AppContext.Provider
      value={{
        col,
        useCol,
        infoList,
        fav,
        addFav,
        deleteFav,
      }}>
      {children}
    </AppContext.Provider>
  );
};
