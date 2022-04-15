import React, { FC } from "react";
import { StyleSheet, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const ProtectionProfile: FC = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.area, styles.shield]}>
        <Icon name='shield' size={30} />
      </View>
      <View style={[styles.area, styles.notSecure]}>
        <Icon name='lock-open' size={30} />
      </View>
      <View style={[styles.area, styles.shield]}>
        <Icon name='shield' size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  area: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  shield: {
    flex: 1,
    backgroundColor: '#C4C4C4'
  },
  notSecure: {
    flex: 2,
    backgroundColor: '#DEDEDE'
  }
});

export default ProtectionProfile;