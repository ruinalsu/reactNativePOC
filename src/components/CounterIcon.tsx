import React, { FC } from "react";
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CounterIconProps {
  count: string;
  increased: boolean;
  materialIcon: string;
}

const CounterIcon: FC<CounterIconProps> = ({ count, increased, materialIcon }) => {
  return (
    <View style={styles.container}>
      <Icon name={materialIcon} size={16} />
      <Text style={styles.countText}>{count}</Text>
      <View style={increased ? styles.increase : styles.decrease}>
        <Icon
          name={increased ? 'arrow-drop-up' : 'arrow-drop-down'}
          style={increased ? styles.increase : styles.decrease}
          size={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
  },
  countText: {
    fontSize: 16,
    color: 'white'
  },
  increase: {
    alignItems: 'flex-start',
    color: 'darkgreen'
  },
  decrease: {
    alignItems: 'flex-end',
    color: 'red'
  }
});

export default CounterIcon;