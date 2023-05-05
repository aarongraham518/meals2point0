import React, {createContext, useState} from 'react';

//context that will hold our favorites
export const FavouritesContext = createContext();

//supply to react tree
export const FavouritesContextProvider = ({children}) => {
    const [favourites, setFavourites] = useState([]);

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId)

        setFavourites(newFavourites);
    }
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