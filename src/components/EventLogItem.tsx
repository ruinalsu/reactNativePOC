import moment from "moment";
import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { ISiteEvent } from "../mockdata/sites";
import { getTimeDiff } from "../utils/utilities";
import Card from "./common/Card";

interface EventLogItemProps {
  event: ISiteEvent;
}

const EventLogItem: FC<EventLogItemProps> = ({ event }) => {
  return (
    <Card>
      <View style={[styles.content, styles.contentRow]}>
        <View style={styles.contentRow}>
          <Icon name='cloud' size={20} style={styles.icon} />
          <Text style={styles.title}>{event.name}</Text>
        </View>
        <Text style={styles.title}>{moment(event.triggerDate).format('DD.MM.yy hh:mm')}</Text>
      </View>
      <View style={{ ...styles.contentRow, justifyContent: 'flex-end' }}>
        <Text style={styles.description}>{getTimeDiff(event.triggerDate, new Date(Date.now()))}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: "space-between"
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    color: 'white',
    marginRight: 5
  },
  title: {
    color: '#fff',
    fontSize: 16
  },
  description: {
    fontSize: 16
  }
});

export default EventLogItem;