import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Text, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ExpandableViewProps {
  isExpanded: boolean;
  title: string;
  titleFontSize?: number;
}

const ExpandableView: FC<ExpandableViewProps> = ({ isExpanded = true, title, titleFontSize = 22, children }) => {
  const [expanded, setExpanded] = useState(isExpanded);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          LayoutAnimation.configureNext(
            LayoutAnimation.create(
              100,
              LayoutAnimation.Types.linear,
              LayoutAnimation.Properties.opacity
            )
          );
          setExpanded(!expanded);
        }}>
        <View style={styles().container}>
          <Text style={styles({ titleFontSize }).title}>{title}</Text>
          <Icon name={!expanded ? 'expand-more' : 'expand-less'} size={30} color='white' />
        </View>
      </TouchableOpacity>
      {expanded && <View style={{ minHeight: 50 }}>{children}</View>}
    </View>
  );
};

interface StylesProps {
  titleFontSize: number;
}

const styles = (props?: StylesProps) => StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingBottom: 20
  },
  title: {
    fontSize: props?.titleFontSize ?? 22,
    color: '#fff',
    fontWeight: '500'
  }
});

export default ExpandableView;