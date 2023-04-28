import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    //if, has a value, apply margin-top
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
    background-color: blue;
`;
export const RestaurantsScreen = () => (
    <SafeArea style={styles.container}>
     <SearchContainer style={styles.search}>
      <Searchbar style={styles.searchBar}/>
    </SearchContainer>
    <RestaurantListContainer style={styles.list}>
        <RestaurantInfoCard />
    </RestaurantListContainer>
    </SafeArea>
)

const styles = StyleSheet.create({
    container:{
     flex: 1,
     marginTop: StatusBar.currentHeight,
     backgroundColor: 'brown'
   },
   search: {
     padding: 16, 
     backgroundColor: 'green'
   },
   searchBar:{
     borderRadius: '8'
   },
   list: {
     flex: 1, 
     padding: 16, 
     backgroundColor: 'blue'
   }
   });
   