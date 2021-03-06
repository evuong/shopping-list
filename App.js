import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import uuid from 'uuid-random';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  // useState to handle items
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Juice' }
  ]);

  // delete item function
  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  // add item function
  const addItem = (text) => {
    // if text is empty, throw an alert for user
    if (!text) {
      Alert.alert('Error', 'Please enter an item', { text: 'Ok' });
    } else {
      setItems((prevItems) => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
});

export default App;
