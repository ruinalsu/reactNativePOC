import React, { FC } from "react";
import { StyleSheet, View, ViewProps } from 'react-native';

const Card: FC<ViewProps> = (props) => {
  return (
    <View style={[props.style, styles.card]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: "rgba(196, 196, 196, 0.1)",
  }
});

export default Card;