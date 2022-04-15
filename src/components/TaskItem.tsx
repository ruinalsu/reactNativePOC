import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ITask, TaskAction } from "../mockdata/tasks";
import Card from "./common/Card";

interface TaskItemProps {
  task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  const getIconName = (type: TaskAction): string => {
    let iconName: string;
    switch (type) {
      case TaskAction.Edit:
        iconName = 'edit';
        break;
      case TaskAction.Camera:
        iconName = 'videocam';
        break;
      default:
        iconName = 'help-outline';
        break;
    }
    return iconName;
  };

  return (
    <Card>
      <View style={styles.taskContent}>
        <Icon name={getIconName(task.actionType)} size={16} color='#fff' />
        <Text style={{ fontSize: 16, marginLeft: 5, color: '#fff' }}>{task.title}</Text>
      </View>
      <Text style={{ marginLeft: 22, fontSize: 22 }}>{task.action}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  taskContent: {
    flexDirection: 'row',
    alignItems: "center"
  }
});

export default TaskItem;