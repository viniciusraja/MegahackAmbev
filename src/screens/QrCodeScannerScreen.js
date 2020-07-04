import React, { useState, useEffect } from 'react';
import { Text, Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'config/constants/Constants';
import FooterNavBar from 'components/container/FooterNavBar';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { showHintComponent } from 'store/ducks/actions/showComponent';
import HintsComponent from 'components/container/HintsComponent';
import api from 'services/api';
import ScanIcon from 'assets/svg/ScanIcon.svg';
export default function QrCodeScannerScreen() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hintComponent, setHintComponent] = useState(false);
  const [qrCodeData, setQrCodeData] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // useEffect(() =>{
  //   if(!!navigationData.route)navigate(`${navigationData.route}`)
  // }, [navigationData]);
  const sendUserPointsForRecycling = async (qrCodeUUID) => {
    try {
      api
        .get(`recycling/${qrCodeUUID}`, { headers: { user: 1 } })
        .then((res) => res.data)
        .then((res) => {
          if (res == 'ok') navigate(`UserPoints`);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      Alert.alert(error);
    }
  };

  const handleBarCodeScanned = async ({ type, data }) => {
    const qrCodeUUID = data;
    try {
      setScanned(true);
      setQrCodeData(qrCodeUUID);
    } catch (error) {
      console.log(error);
    }
    if (qrCodeData.split('/')[0] == 'advertisement') {
      dispatch(showHintComponent());
    } else {
      sendUserPointsForRecycling(qrCodeUUID);
    }
    // Alert.alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <View style={styles.qrCodeContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />
        <ScanIcon style={{ height: 250, width: 250 }} />

        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={styles.scanAgainButtom}>
            <Text style={styles.scanAgainButtomText}>Tente de Novo</Text>
          </TouchableOpacity>
        )}
      </View>
      <HintsComponent qrCodeData={qrCodeData} />
      <FooterNavBar activeQr={Constants.Colors.yellow} />
    </>
  );
}

const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
  },
  scanAgainButtom: {
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Constants.Colors.yellow,
  },
  scanAgainButtomText: {
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamilyXBold,
    fontSize: 17,
  },
});
