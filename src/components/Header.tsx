import React, { FC } from "react";
import { View, StyleSheet, Image, TouchableOpacity, ImageProps, ImageSourcePropType, Text } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

interface HeaderProps {
  title?: string;
  source: ImageSourcePropType;
  isBack?: boolean;
  onBack?: () => void;
}

const Header: FC<HeaderProps> = ({ title, source, isBack = false, onBack }) => {
  return (
    <View style={styles.container}>
      <Image
        source={source}
      />
      {isBack &&
        <TouchableOpacity style={styles.back} onPress={onBack}>
          <Icon name="arrow-back-ios" size={30} color='#fff' />
        </TouchableOpacity>
      }
      {typeof title === 'string' && <Text
        style={styles.title}
        numberOfLines={2}
        ellipsizeMode='tail'>{title}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  back: {
    position: "absolute",
    top: 20,
    right: 10
  },
  title: {
    position: "absolute",
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    top: 90,
    left: 15
  }
});

export default Header;