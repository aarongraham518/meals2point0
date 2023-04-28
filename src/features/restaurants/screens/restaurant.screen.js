import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card-component';

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
     <View style={styles.search}>
      <Searchbar style={styles.searchBar}/>
    </View>
    <View style={styles.list}>
        <RestaurantInfoCard />
    </View>
    </SafeAreaView>
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
   