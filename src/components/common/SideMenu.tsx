import React, { FC, useEffect, useRef, useState } from "react";
import { Alert, Animated, Dimensions, StyleProp, StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

interface SideMenuProps extends ViewProps {
  isVisible: boolean;
}

interface IMenuAction {
  iconName: string;
  actionHandler?: () => void;
}

const buttons: IMenuAction[] = [
  { iconName: 'lock', actionHandler: () => { Alert.alert('Menu Item', 'lock') } },
  { iconName: 'star', actionHandler: () => { Alert.alert('Menu Item', 'star') } },
  { iconName: 'add', actionHandler: () => { Alert.alert('Menu Item', 'add') } },
  { iconName: 'attachment', actionHandler: () => { Alert.alert('Menu Item', 'attachment') } },
  { iconName: 'phone', actionHandler: () => { Alert.alert('Menu Item', 'phone') } },
];

// TODO: should pass all parameters
const getCoords = (index: number): number[] => {
  const fi = ((-180 / 6/* count of items + 1 */) * (index + 1) + 180) * (Math.PI / 180);
  const x = 135/*half of parent's width minus half of child's width */ + 100 * Math.cos(fi);
  const y = 150/*half of perent's width */ + 100 * Math.sin(fi) - 15/*half of child's height */;
  return [x, y];
}

const SideMenu: FC<SideMenuProps> = ({ isVisible, style }) => {
  const wHeight = Dimensions.get('screen').height;
  console.log(wHeight / 4);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const sizeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    !isVisible && setIsMenuVisible(false);
    Animated.timing(
      sizeAnim,
      {
        duration: 600,
        toValue: isVisible ? 80 : 0,
        useNativeDriver: false
      }
    ).start();
  }, [isVisible]);

  return (
    <Animated.View style={{ ...styles.animContainer, top: wHeight / 4, height: sizeAnim, width: sizeAnim }}>
      <TouchableOpacity
        onPress={() => setIsMenuVisible(prev => !prev)}
        style={{ width: 80, height: 80, zIndex: 1 }}
      ></TouchableOpacity>
      {isMenuVisible &&
        <View style={styles.menuContainer}>
          {
            buttons.map((btn, index) =>
              <TouchableOpacity
                key={index}
                onPress={btn.actionHandler}
                style={{ ...styles.menuItem, top: getCoords(index)[0], left: getCoords(index)[1] }}
              >
                <Icon name={btn.iconName} size={30} color='#fff' />
              </TouchableOpacity>)
          }
        </View>
      }
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animContainer: {
    position: "absolute",
    backgroundColor: '#3c67a6',
    left: -40,
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    zIndex: 0
  },
  menuContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 300,
    width: 300,
    left: -110,
    top: -110,
    borderRadius: 150,
    zIndex: 0,
    position: 'absolute',
    borderWidth: 0.5,
    borderColor: 'lightgrey'
  },
  menuItem: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: 'transparent'
  }
});

export default SideMenu;