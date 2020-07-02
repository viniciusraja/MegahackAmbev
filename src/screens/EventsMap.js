import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome
} from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import CartList from 'components/container/CartList/CartList'
import LoginContainer from 'components/container/LoginContainer';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import FooterNavBar from 'components/container/FooterNavBar';

const EventsMap = (props) => {
  const dispatch= useDispatch()
  const {navigate} = useNavigation();
  const cartList= useSelector(state => (state.getCartList.cartList))
  const  markers= [{
    id:1,
    title: 'Ambev Recicla',
    coordinates: {
      latitude:-5.895159, 
      longitude:-35.215708,
    },
  },
  { id:2,
    title: 'hello',
    coordinates: {
      latitude:-5.864159, 
      longitude:-35.215708,
    },  
  }]
  const  recicla= [{
    id:1,
    title: 'Ambev Recicla',
    coordinates: {
      latitude:-5.845159, 
      longitude:-35.225708,
    },
  },
  { id:2,
    title: 'hello',
    coordinates: {
      latitude:-5.834159, 
      longitude:-35.245708,
    },  
  }]
  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} 
      initialRegion={{
        latitude:-5.864159, 
        longitude:-35.215708,
        latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
      >
      {markers.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
    >
      <View style={{height:35, width:35, backgroundColor:'#000', borderRadius:20, justifyContent:'center', alignItems:'center'}}>

      <Ionicons name="ios-beer" size={25} color={Constants.Colors.yellow} />
      </View>
    </MapView.Marker>
    ))}
      {recicla.map(marker => (
    <MapView.Marker 
      coordinate={marker.coordinates}
      title={marker.title}
    >
      <View style={{height:35, width:35, backgroundColor:'#000', borderRadius:20, justifyContent:'center', alignItems:'center'}}>
      <FontAwesome name="recycle" size={25} color={Constants.Colors.yellow} />
      </View>
    </MapView.Marker>
    ))}
        </MapView>
      <LoginContainer />
      <FooterNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
  },
  mapStyle:{
    width:Constants.Layout.window.width,
    height:Constants.Layout.window.height
  },
  cartItemHeaderAndFooterContainer:{
    flexDirection:'row',
    height:30,
    width:'90%',
    borderRadius:15,
    marginVertical:5,
    backgroundColor:Constants.Colors.yellow,
    justifyContent:'space-around',
  },
  productNameContainer:{
    width:'40%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productNameText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  productQuantityContainer:{
    width:'15%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productPriceContainer:{
    width:'20%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productQuantityAndPriceText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  productTotalContainer:{
    width:'25%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productsTotalPriceText:{
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 22,
    textAlign:'center',
    textAlignVertical:'center',
  },
  
});



export default EventsMap;
