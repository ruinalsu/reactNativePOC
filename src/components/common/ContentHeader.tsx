import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

interface ContentHeaderProps {
  title: string;
  iconName: string;
  actionHandler?: () => void;
}

const ContentHeader: FC<ContentHeaderProps> = ({ title, iconName }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Icon name={iconName} size={20} color='white' />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500'
  },
});

export default ContentHeader;