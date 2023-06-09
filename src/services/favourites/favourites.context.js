import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//context that will hold our favorites
export const FavouritesContext = createContext();

//supply to react tree
export const FavouritesContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);
 
    const saveFavourites = async (value) => {
        try{
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@favourites', jsonValue);
        }catch(e){
            console.log(e, 'IS THE STORING ERROR FROM LOCAL STORAGE');
        }
    }

    const loadFavourites = async () => {
        try{
            const value = await AsyncStorage.getItem('@favourites');
            if(value !== null){
                setFavourites(JSON.parse(value));
            }
        }catch(e){
            console.log(e, 'IS THE ERROR FROM READING LOCAL STORAGE');
        }
    }
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId)

        setFavourites(newFavourites);
    }

    useEffect(() => {
        loadFavourites()
    },[])

    useEffect(() => {
        saveFavourites(favourites)
    },[favourites])

    return(        
        <FavouritesContext.Provider value={{
            favourites,
            addToFavourites: add,
            removeFromFavourites: remove,
        }}>
            {children}
        </FavouritesContext.Provider>
    )
}