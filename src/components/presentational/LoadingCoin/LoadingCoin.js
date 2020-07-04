import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Animated,
  Easing,
} from 'react-native';
import CoinIcone from 'assets/svg/CoinIcone.svg';

import { styles } from './styles';

class LoadingCoin extends React.Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount() {
    this.spin();
  }
  spin() {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver:true,
    }).start(() => this.spin());
  }
  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <Animated.View
        style={[styles.spiningCoinContainer,{
          height:this.props.height,
          width:this.props.width,
        transform: [{rotate: spin}] }]}
        >
      <CoinIcone style={{ height: this.props.height, width: this.props.width}} />
      </Animated.View>
    );
  }
}

export default LoadingCoin;
