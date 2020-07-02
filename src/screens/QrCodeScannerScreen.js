import React, { useState, useEffect } from 'react';
import { Text,Alert, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'config/constants/Constants';
import FooterNavBar from 'components/container/FooterNavBar'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { showHintComponent } from 'store/ducks/actions/showComponent';
import HintsComponent from 'components/container/HintsComponent'
export default function QrCodeScannerScreen() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [hintComponent, setHintComponent] = useState(false);
  const [navigationData, setNavigationData] = useState('');
  
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  
  useEffect(() =>{
    if(!!navigationData.route)navigate(`${navigationData.route}`)
  }, [navigationData]);
  
  const handleBarCodeScanned = async ({ type, data }) => {
    try{
      const navigationData= JSON.parse(data)
    setScanned(true);
    setNavigationData(navigationData)
  }catch(error){console.log(error)}
  if(!!navigationData.route)navigate(`${navigationData.route}`)
  if(!!navigationData.hint)dispatch(showHintComponent())
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
    <View
      style={styles.qrCodeContainer}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        />
    <Ionicons name="ios-qr-scanner" size={300} color={Constants.Colors.yellow} />
      {scanned && 
      <TouchableOpacity onPress={() => setScanned(false)}
      style={styles.scanAgainButtom}
      >
      <Text style={styles.scanAgainButtomText}>SCAN</Text>
      </TouchableOpacity>}
    </View>
    <HintsComponent/>
    <FooterNavBar activeQr={Constants.Colors.yellow}/>
    
    </>
  );
}

const styles = StyleSheet.create({
  qrCodeContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#fdfdfd"
  },
  scanAgainButtom:{
    height:40,
    width:200,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    backgroundColor: Constants.Colors.yellow,
  },
  scanAgainButtomText:{
    color:Constants.Colors.backgroundColor,
    fontFamily:Constants.fontFamilyXBold,
    fontSize:22,
  }
})