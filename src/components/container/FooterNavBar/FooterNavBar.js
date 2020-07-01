import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Entypo
} from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import Constants from 'config/constants/Constants';


const FooterNavBar = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  return (
    <View style={styles.cartItemCardContainer}>
      <TouchableOpacity
      style={styles.scanButtom}
        onPress={() => navigate('QrCodeScannerScreen')}>
       <View style={styles.scanButtomContainer}>
         <MaterialCommunityIcons name="qrcode-scan" size={25} color={props.activeQr?props.activeQr:Constants.Colors.textsPrimary} />
         <Text style={styles.scanButtomText}>QrCode</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.scanButtom}
        onPress={() => navigate('ProducItemDescription', { props:props })}>
       <View style={styles.scanButtomContainer}>
         <Feather name="truck" size={25} color={props.activeChopp?props.activeChopp:Constants.Colors.textsPrimary}  />
         <Text style={styles.scanButtomText}>Chopp Car</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.scanButtom}
        onPress={() => navigate('UserPoints', { props:props })}>
       <View style={styles.scanButtomContainer}>
       <MaterialCommunityIcons name="coin" size={25} color={props.activePoints?props.activePoints:Constants.Colors.textsPrimary}  />
       <Text style={styles.scanButtomText}>Points</Text>
       </View>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.scanButtom}
        onPress={() => navigate('QrCodeScannerScreen', { props:props })}>
       <View style={[styles.scanButtomContainer,{borderRightWidth:0}]}>
       <Entypo name="help" size={25} color={props.activeHelp?props.activeHelp:Constants.Colors.textsPrimary}  />
       <Text style={styles.scanButtomText}>Ajuda</Text>
       </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavBar;
