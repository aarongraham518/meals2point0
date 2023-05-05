import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { FavouritesContext } from '../../services/favourites/favourites.context';

export const Favourite = () => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);

    const FavouriteButton = styled(TouchableOpacity)`
        position: absolute;
        top: 10px;
        right: 10px;
        /* width: 64px; */
        z-index: 9;
    `;
    return (
        <FavouriteButton>
            <AntDesign
                name="heart"
                size={24}
                color="red"
            />
        </FavouriteButton>
    );
};
