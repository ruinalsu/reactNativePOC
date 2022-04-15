import React, { FC, useState } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

interface ChipProps {
  title: string;
  selected: boolean,
  onSelect?: (selected: boolean) => void;
}

const Chip: FC<ChipProps> = ({ title, onSelect }) => {
  const [isSelected, setIsSelected] = useState(true);

  const selectHandler = () => {
    setIsSelected(!isSelected);
    onSelect && onSelect(isSelected);
  }

  return (
    <TouchableOpacity
      style={[styles.container, !isSelected ? styles.deselected : styles.selected]}
      onPress={selectHandler}
    >
      <Text style={styles.titleText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  selected: {
    backgroundColor: 'rgba(196, 196, 196, 0.6)'
  },
  deselected: {
    backgroundColor: 'rgba(196, 196, 196, 0.2)'
  },
  titleText: {
    fontSize: 16
  }
});

export default Chip;