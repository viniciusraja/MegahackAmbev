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
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigate('ProducItemDescription', {
            props: props,
            numberOfItemsInCart,
          })
        }
        style={styles.productCardButton}>
        <View style={styles.productCardContainer}>
          <View style={styles.productInformationContainer}>
          <View style={styles.productDetailsContainer}>
            <SharedElement id={`item.${props.id}.price`}>
              {/* <Text style={styles.productNameText}>{`R$${props.price}`}</Text> */}
              <Text style={styles.productNameTitle}>BRAHMA</Text>
            </SharedElement>
              <Text style={styles.productNameSubtitle}>ZERO</Text>
              <Text style={styles.productVolume}>355ml</Text>
              <View style={{flexDirection:'row', width:30,marginRight:10, alignSelf:'flex-end',justifyContent:'space-between'}}>
                <MaterialCommunityIcons name="coin" size={21} color="black" />
                <Text style={styles.productNameTitle}>3</Text>
                </View>
          </View>
          </View>
            {/* <SharedElement id={`item.${props.id}.title`}>
              <Text style={styles.productName}>{props.name}</Text>
              <Text style={styles.productName}>600 ml </Text>
            </SharedElement> */}
          {true ? (
          //só apagar em cima {!!props.url ? (
            <SharedElement
              id={`item.${props.id}.photo`}
              style={styles.productImageContainer}>
             <Image
              style={styles.productImage}
              source={require('assets/images/brahma.png')}
              resizeMode="contain"
            />
              {/* <Image
                style={styles.productImage}
                source={{ uri: props.url }}
                resizeMode="contain"
              /> */}
            </SharedElement>
          ) : (
            <View style={styles.productImageContainer}>
              <MaterialCommunityIcons name="food" size={80} color="#FFF" />
            </View>
          )}
        </View>
      </TouchableOpacity>
      {numberOfItemsInCart > 0 && (
        <View style={styles.quantityOfProductsContainer}>
          <TouchableOpacity
            style={styles.addIconContainer}
            onPress={() => dispatch(removeItemToCart(props))}>
            <Ionicons name="ios-remove" size={23} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.quantityOfProductsText}>
            {numberOfItemsInCart}
          </Text>
          <TouchableOpacity
            style={styles.addIconContainer}
            onPress={() => dispatch(addItemToCart(props))}>
            <Ionicons name="ios-add" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
      )}

      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          left: 20,
          top: -15,
          marginVertical: 30,
          backgroundColor: Constants.Colors.lightGrey,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          height: 45,
          width: 45,
          borderRadius: 45,
        }}
        onPress={() =>
          dispatch(
            showAdminProductConfigComponent({
              categoryId: props.categoryId,
              ...props,
              editingProduct: false
            })
          )
        }>
        <MaterialCommunityIcons name="image-plus" size={24} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: 0,
          bottom: 40,
          marginVertical: 30,
          backgroundColor: Constants.Colors.lightGrey,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          height: 45,
          width: 45,
          borderRadius: 45,
        }}
        onPress={() =>
          dispatch(
            showAdminProductConfigComponent({
              categoryId: props.categoryId,
              ...props,
              editingProduct: true
            })
          )
        }>
        <FontAwesome name="edit" size={24} color="#FFF" />
      </TouchableOpacity> */}
    </View>
  );
};

export default ProductCard;
