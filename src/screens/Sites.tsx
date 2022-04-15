import React, { FC, useEffect } from "react";
import { FlatList, FlatListProps, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import SiteItem from "../components/SiteItem";
import SizedBox from "../components/common/SizedBox";
import { MainNavigationProp } from "../navigation/navigators";
import { Routes } from "../navigation/routes";
import { fetchSites, selectItems, setFilterVisibility, setSearchText } from "../state/sites/sitesSlice";
import { images } from "../utils/constants";
import { AppStyles } from "../utils/styles";
import ContentHeader from "../components/common/ContentHeader";
import Chip from "../components/common/Chip";
import { Filters } from "../state/sites/models/filters";
import { useAppSelector } from "../hooks/reduxHooks";
import { ISite } from "../mockdata/sites";
import FullscreenLoading from "../components/common/FullscreenLoading";

export type SitesScreenParams = undefined;

const SitesScreen: FC<MainNavigationProp<Routes.Sites>> = ({ navigation, route }) => {
  const items: ISite[] = useAppSelector(state => selectItems(state));
  const searchText: string = useAppSelector(state => state.sitesReducer.searchText);
  const isLoading: boolean = useAppSelector(state => state.sitesReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSites());
  }, []);

  const renderItem = ({ item }: any) => (
    <Pressable onPress={() => navigation.push(Routes.Details, { id: item.id, title: item.title })}>
      <SiteItem address={item.title} checked={item.checked} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header
        source={images.homeHeaderImage}
        isBack={true}
        title='Sites'
        onBack={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={AppStyles.headerText}>Search</Text>
        <SizedBox height={5} />
        <SearchInput
          value={searchText}
          onSearchChanged={(text) => dispatch(setSearchText(text))}
          placeholder='Search...'
        />
        <SizedBox height={15} />
        <ContentHeader
          title='Filters'
          iconName='add-circle-outline'
        />
        <SizedBox height={5} />
        <View style={{ flexDirection: "row", flexWrap: 'wrap' }}>
          <Chip
            title='in green'
            selected={true}
            onSelect={() => { dispatch(setFilterVisibility(Filters.Green)) }}
          />
          <SizedBox width={10} />
          <Chip
            title='in red'
            selected={false}
            onSelect={() => { dispatch(setFilterVisibility(Filters.Red)) }}
          />
        </View>
        <SizedBox height={25} />
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          maxToRenderPerBatch={5}
          removeClippedSubviews={true}
          initialNumToRender={5}
          ItemSeparatorComponent={() => <SizedBox height={10} />}
        />
        {items.length === 0 && <Text style={{ textAlign: "center" }}>No items</Text>}
      </View>
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
    paddingHorizontal: 15
  }
});

export default SitesScreen;