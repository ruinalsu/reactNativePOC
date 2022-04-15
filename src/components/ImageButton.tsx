import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

interface ImageButtonProps {
  iconName: string;
}

const ImageButton: FC<ImageButtonProps> = ({ iconName }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Icon name={iconName} size={40} color='#fff' />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    minWidth: 100,
    backgroundColor: 'background: rgba(196, 196, 196, 0.2)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ImageButton;