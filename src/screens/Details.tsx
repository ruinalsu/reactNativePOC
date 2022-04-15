import React, { FC, Fragment, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ExpandableView from "../components/common/ExpandableView";
import FullscreenLoading from "../components/common/FullscreenLoading";
import Header from "../components/Header";
import ImageButton from "../components/ImageButton";
import SizedBox from "../components/common/SizedBox";
import { useFecthing } from "../hooks/fetcher";
import { ISite, ISiteEvent } from "../mockdata/sites";
import { MainNavigationProp } from "../navigation/navigators";
import { Routes } from "../navigation/routes";
import SiteService from "../services/siteService";
import { images } from "../utils/constants";
import { timeout } from "../utils/utilities";
import ContentHeader from "../components/common/ContentHeader";
import EventLogItem from "../components/EventLogItem";
import ProtectionProfile from "../components/ProtectionProfile";

export interface DetailsScreenParams {
  id: string;
  title: string;
}

const DetailsScreen: FC<MainNavigationProp<Routes.Details>> = ({ navigation, route }) => {
  const siteId = route.params.id;
  const title = route.params.title;
  const [site, setSite] = useState<ISite>();
  const [events, setEvents] = useState<ISiteEvent[]>([]);
  const [siteFetching, isLoading, error] = useFecthing(async () => {
    await timeout(2000);
    const [site, events] = await Promise.all([SiteService.getSiteById(siteId), SiteService.getSiteEvents(siteId)]);
    setSite(site);
    setEvents(events);
  });

  useEffect(() => {
    siteFetching();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        source={images.homeHeaderImage}
        isBack={true}
        onBack={navigation.goBack}
        title={title}
      />
      <ScrollView style={styles.content}>
        <SizedBox height={10} />
        <ContentHeader
          title='Quick Access'
          iconName='edit'
        />
        <SizedBox height={15} />
        <View style={styles.quickAccessButtons}>
          <ImageButton iconName="lock" />
          <ImageButton iconName="lock-open" />
          <ImageButton iconName="more-time" />
        </View>
        <SizedBox height={30} />
        <ExpandableView isExpanded={true} title="Event Logs" titleFontSize={20}>
          {events.map(event => (
            <Fragment key={event.id}>
              <EventLogItem event={event} />
              <SizedBox height={10} />
            </Fragment>
          ))}
          {events.length === 0 && <Text style={{ textAlign: "center" }}>No items</Text>}
        </ExpandableView>
        <SizedBox height={15} />
        <Text style={styles.headerText}>Protection Profile</Text>
        <SizedBox height={10} />
        <ProtectionProfile />
      </ScrollView>
      {isLoading && <FullscreenLoading />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  content: {
    paddingHorizontal: 10
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '500'
  },
  quickAccessButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default DetailsScreen;