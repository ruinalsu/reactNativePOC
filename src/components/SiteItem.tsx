import React, { FC, memo } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Card from "./common/Card";
import CounterIcon from "./CounterIcon";
import SizedBox from "./common/SizedBox";

interface SiteItemProps {
  address: string;
  checked: boolean;
}

const SiteItem: FC<SiteItemProps> = ({ address, checked }) => {
  return (
    <Card style={{ minHeight: 60 }}>
      <View style={styles.content}>
        <View style={styles.leading}>
          <Icon
            name='home'
            color='white'
            size={20}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">{address}</Text>
          <SizedBox height={5} />
          <View style={styles.content}>
            <CounterIcon count="5" increased={true} materialIcon='local-fire-department' />
            <CounterIcon count="14" increased={false} materialIcon='directions-run' />
          </View>
        </View>
        <View style={styles.trailing}>
          <Icon
            name='radio-button-checked'
            color={checked ? 'darkgreen' : 'red'}
            size={20}
          />
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  leading: {
    justifyContent: 'flex-start',
    marginRight: 10
  },
  trailing: {
    justifyContent: "flex-start",
    marginLeft: 10
  },
  titleText: {
    fontSize: 16,
    color: 'white'
  }
});

export default memo(SiteItem);