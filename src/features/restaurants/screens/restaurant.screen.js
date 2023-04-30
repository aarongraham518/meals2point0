import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card-component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  //if, has a value, apply margin-top
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;


export const RestaurantsScreen = () => (
  <SafeArea style={styles.container}>
    <SearchContainer style={styles.search}>
      <Searchbar style={styles.searchBar} />
    </SearchContainer>
    <FlatList
      data={[{name: 1}, {name: 2}]}
      renderItem={() => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{padding: 16}}
    />
    
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "brown",
  },
  search: {
    padding: 16,
    backgroundColor: "green",
  },
  searchBar: {
    borderRadius: "8",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
