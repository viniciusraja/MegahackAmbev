import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

const StyledBars = (props) => {

  return (
    <View style={[styles.container, {borderColor:props.outsideColor}]}>
      <View style={[styles.innerContainer, {backgroundColor:props.innerColor,borderColor:props.innerColor}]}>

      </View>
    </View>
  );
};

export default StyledBars;
