import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  TouchableOpacityBase,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons,
} from '@expo/vector-icons';
import { styles } from './styles';
import Constants from 'config/constants/Constants';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemToCart } from 'store/ducks/actions/cartList';
import { showAdminProductConfigComponent } from 'store/ducks/actions/showComponent';
import CoinIcone from 'assets/svg/CoinIcone.svg'

function checkNumberOfItemsInCart(id) {
  const cartList = useSelector((state) => state.getCartList.cartList);
  let count = 0;
  if (cartList)
    cartList.map((item, index) => {
      if (item.id == id) {
        count = item.count;
      }
    });
  return count;
}

const ProductCard = (props) => {
  const cartList = useSelector((state) => state.getCartList.cartList);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const numberOfItemsInCart = checkNumberOfItemsInCart(props.id);
  const imageURL=props.image
  console.log(props.id)
  return (
   
      <TouchableOpacity
        onPress={() =>
          navigate('ProducItemDescription', {
            props: props,
          })
        }
        style={styles.productCardButton}>
        <View style={styles.productCardContainer}>
          <View style={styles.productInformationContainer}>
          <View style={styles.productDetailsContainer}>
            <SharedElement id={`item.${props.id}.title`}>
            <Text style={styles.productNameTitle}>{`${props.name.toUpperCase()}`}</Text>
            </SharedElement>
              {props.family!='-'&&<Text style={styles.productNameSubtitle}>{`${props.family}`}</Text>}
              <Text style={styles.productVolume}>{`${props.milliliter}ml`}</Text>
              <View style={{flexDirection:'row', width:30,marginRight:15, alignSelf:'flex-end',justifyContent:'space-between'}}>
                <CoinIcone style={{height:21,width:21, marginRight:2}}/>
                <Text style={styles.productNameTitle}>{`${props.points}`}</Text>
                </View>
          </View>
          </View>
            <SharedElement
              id={`item.${props.id}.photo`}
              style={styles.productImageContainer}>
              {imageURL?<Image
                style={styles.productImage}
                source={{ uri:imageURL}}
                resizeMode='contain'
              />: <CoinIcone style={{height:21,width:21, marginRight:2}}/>}
            </SharedElement>
          
        </View>
      </TouchableOpacity>
  );
};

export default ProductCard;
