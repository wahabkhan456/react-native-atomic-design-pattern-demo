import React from 'react';
import { Searchbar } from 'react-native-paper';

const Search = ({placeholder, onChangeText, value}) => {
  return (
    <Searchbar
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default Search;