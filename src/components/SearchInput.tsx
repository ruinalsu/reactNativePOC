import React, { FC } from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

interface SerachInputProps {
  value: string;
  onSearchChanged: (search: string) => void;
  placeholder?: string;
}

const SearchInput: FC<SerachInputProps> = ({ value, onSearchChanged, placeholder = '' }) => {
  return (
    <View style={styles.searchContainer}>
      <Icon
        style={styles.searchIcon}
        name='search'
        size={20}
      />
      <TextInput
        style={styles.searchInput}
        value={value}
        onChangeText={onSearchChanged}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    flex: 1,
    height: 38,
  },
  searchIcon: {
    paddingLeft: 5,
    color: '#fff'
  }
});

export default SearchInput;