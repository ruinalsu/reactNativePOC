import React, { FC, Fragment, useState } from "react";
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import ExpandableView from "../components/common/ExpandableView";
import SiteItem from "../components/SiteItem";
import SizedBox from "../components/common/SizedBox";
import { MainNavigationProp } from "../navigation/navigators";
import { Routes } from "../navigation/routes";
import { SafeAreaView } from 'react-native-safe-area-context';
import SiteService from "../services/siteService";
import { ISite } from '../mockdata/sites';
import { timeout } from "../utils/utilities";
import { useFecthing } from "../hooks/fetcher";
import { ITask } from "../mockdata/tasks";
import TaskService from "../services/taskService";
import TaskItem from "../components/TaskItem";
import Header from "../components/Header";
import { images } from "../utils/constants";
import Card from "../components/common/Card";

const MainScreen: FC<MainNavigationProp<Routes.Main>> = ({ navigation, route }) => {
  const [sites, setSites] = useState<ISite[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const [siteFetching, isSitesLoading, errorSites] = useFecthing(async () => {
    await timeout(1000);
    const sites = SiteService.getSites(2);
    setSites(sites);
  });

  const [taskFetching, isTasksLoading, errorTasks] = useFecthing(async () => {
    await timeout(1000);
    const tasks = TaskService.getTasks(2);
    setTasks(tasks);
  });

  const contentPlaceholder = (callback: () => void) => {
    return (
      <Text>
        <Text>Nothing here yet? ask your monitoring station to share sites with you or </Text>
        <Text
          style={{ color: '#fff', fontWeight: "bold", textDecorationLine: 'underline' }}
          onPress={callback}
        >scan a qr code</Text>
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.constainer}>
      <Header source={images.homeHeaderImage} />
      <ScrollView>
        <Text style={styles.header}>News & Messages</Text>
        <SizedBox height={10} />
        <Card style={{ flexDirection: 'row' }}>
          <Icon name='new-releases' size={20} color='#fff' />
          <SizedBox width={10} />
          <Text>get 10% off on protection pro in jan</Text>
        </Card>
        <SizedBox height={25} />
        <ExpandableView isExpanded={true} title="Most active sites">
          {sites.length === 0
            ? isSitesLoading ? <ActivityIndicator /> : contentPlaceholder(() => siteFetching())
            : (<View>
              {sites.map((site) => (
                <Fragment key={site.id}>
                  <Pressable onPress={() => navigation.push(Routes.Details, { id: site.id, title: site.title })}>
                    <SiteItem address={site.title} checked={site.checked} />
                  </Pressable>
                  <SizedBox height={10} />
                </Fragment>
              ))}
              <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.push(Routes.Sites)}>
                <Icon name="more-horiz" size={30} color='white' />
              </TouchableOpacity>
            </View>)
          }
        </ExpandableView>
        <SizedBox height={25} />
        <ExpandableView isExpanded={true} title='Tasks / Requests'>
          {tasks.length === 0
            ? isTasksLoading ? <ActivityIndicator /> : contentPlaceholder(() => taskFetching())
            : (<View>
              {tasks.map((task) => (
                <Fragment key={task.id}>
                  <TaskItem key={task.id} task={task} />
                  <SizedBox height={10} />
                </Fragment>
              ))}
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <Icon name="more-horiz" size={30} color='white' />
              </TouchableOpacity>
            </View>)
          }
        </ExpandableView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    paddingHorizontal: 10
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500'
  }
});

export default MainScreen;