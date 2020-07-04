import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Alert } from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  AntDesign,
  SimpleLineIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import Constants from 'config/constants/Constants';

import CoinIcone from 'assets/svg/CoinIcone.svg';

const FooterNavBar = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  const { navigate } = useNavigation();
  const { routeName } = useNavigationState();
  return (
    <View style={styles.cartItemCardContainer}>
      {routeName != 'Home' && (
        <TouchableOpacity
          style={styles.scanButtom}
          onPress={() => navigate('Home')}>
          <View style={styles.scanButtomContainer}>
            <AntDesign
              name="home"
              size={25}
              color={Constants.Colors.textsPrimary}
            />
            <Text style={styles.scanButtomText}>Home</Text>
          </View>
        </TouchableOpacity>
      )}
      {routeName != 'QrCodeScannerScreen' && (
        <TouchableOpacity
          style={styles.scanButtom}
          onPress={() => navigate('QrCodeScannerScreen')}>
          <View style={styles.scanButtomContainer}>
            <AntDesign
              name="qrcode"
              size={27}
              color={Constants.Colors.textsPrimary}
            />
            <Text style={styles.scanButtomText}>QrCode</Text>
          </View>
        </TouchableOpacity>
      )}

      {routeName != 'EventsMap' && (
        <TouchableOpacity
          style={styles.scanButtom}
          onPress={() => navigate('EventsMap', { props: props })}>
          <View style={styles.scanButtomContainer}>
            <SimpleLineIcons
              name="location-pin"
              size={25}
              color={Constants.Colors.textsPrimary}
            />
            <Text style={styles.scanButtomText}>Pontos</Text>
          </View>
        </TouchableOpacity>
      )}
      {routeName != 'UserPoints' &&
        (!!userInfo.name ? (
          <TouchableOpacity
            style={styles.scanButtom}
            onPress={() => navigate('UserPoints')}>
            <View style={styles.scanButtomContainer}>
              <CoinIcone style={{ height: 35, width: 35 }} />
              <Text style={styles.scanButtomText}>Points</Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.scanButtom}
            onPress={() => Alert.alert('Você Precisa estar Logado!')}>
            <View style={styles.scanButtomContainer}>
              <CoinIcone style={{ height: 35, width: 35 }} />
              <Text style={styles.scanButtomText}>Points</Text>
            </View>
          </TouchableOpacity>
        ))}
      <TouchableOpacity
        style={styles.scanButtom}
        onPress={() =>
          Alert.alert('Infelizmente esta função ainda não foi implementada!')
        }>
        <View style={[styles.scanButtomContainer]}>
          <FontAwesome5
            name="whatsapp"
            size={29}
            color={Constants.Colors.textsPrimary}
          />
          <Text style={styles.scanButtomText}>Ajuda</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavBar;
