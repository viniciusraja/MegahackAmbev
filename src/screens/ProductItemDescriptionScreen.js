import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  StyleSheet,
  TouchableOpacityBase,
} from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import { useDispatch, useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from 'react-navigation-hooks';
import LoginContainer from 'components/container/LoginContainer';
import FooterNavBar from 'components/container/FooterNavBar';

const ProductItemDescriptionScreen = (props) => {
  const data = props.navigation.state.params.props;
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.goBack()}
        style={{ right: 5, top: 5, position: 'absolute' }}>
        <AntDesign name="close" size={25} color={Constants.Colors.lightGrey} />
      </TouchableOpacity>
      {data.family != '-' && (
        <View style={styles.productFamilyDescriptionContainer}>
          <Text style={styles.productFamilyDescriptionText}>
            {data.family.toUpperCase()}
          </Text>
        </View>
      )}
      <View style={styles.detailsContainer}>
        {data.abv != '-' && (
          <View
            style={{
              position: 'absolute',
              top: 55,
              right: 60,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text style={styles.productFamilyDescriptionText}>
              ABV {data.abv}
            </Text>
            <Text
              style={{
                fontFamily: Constants.fontFamily,
                color: '#FFF',
                fontSize: 20,
                marginRight: 5,
              }}>
              %
            </Text>
          </View>
        )}
        <View style={styles.productNameContainer}>
          <SharedElement id={`item.${data.id}.title`}>
            <Text style={styles.productNameText}>{`${data.name}`}</Text>
          </SharedElement>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignItems: 'center',

            height: 200,
          }}>
          <StyledBars
            innerColor={'#000'}
            outsideColor={Constants.Colors.backgroundColor}
          />
          <View style={styles.productDetailContainer}>
            <Text style={styles.productDescription}>{data.description}</Text>
          </View>
        </View>
      </View>
      <SharedElement
        id={`item.${data.id}.photo`}
        style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{ uri: data.image }}
          resizeMode="contain"
        />
      </SharedElement>
      <LoginContainer />
      <FooterNavBar activePoints={Constants.Colors.yellow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
  },
  detailsContainer: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.Colors.yellow,
    borderTopRightRadius: 500,
    borderTopStartRadius: 500,
  },
  productImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 15,
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 25,
  },
  productImage: {
    height: '100%',
    width: '100%',
  },
  productNameContainer: {
    width: 190,
    height: 60,
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productNameText: {
    width: '100%',
    height: '100%',
    fontFamily: Constants.fontFamilyXBold,
    fontSize: 35,
    textAlign: 'right',
    textAlignVertical: 'center',
    color: '#fff',
  },
  productDetailContainer: {
    width: '85%',
    height: '80%',
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productDescription: {
    textAlign: 'justify',
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamilyBold,
    fontSize: Constants.fontSizeMedium,
  },
  productFamilyDescriptionContainer: {
    height: 55,
    width: 100,
    marginLeft: 10,
    borderWidth: 2.5,
    borderStyle: 'dotted',
    borderColor: Constants.Colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Constants.Colors.yellow,
    alignSelf: 'flex-start',
  },
  productFamilyDescriptionText: {
    textAlign: 'center',
    color: '#FFF',
    fontFamily: Constants.fontFamilyXBold,
    fontSize: 15,
  },
  productsFooterContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityOfProductsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 2,
    height: 40,
    width: 120,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Constants.Colors.yellow,
  },
  quantityOfProductsText: {
    flex: 1,
    textAlign: 'center',
    color: Constants.Colors.yellow,
    fontFamily: Constants.fontFamily,
    fontSize: 20,
  },
  addIconContainer: {
    height: 33,
    width: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Constants.Colors.yellow,
  },
  addToCartContainer: {
    width: 150,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Constants.Colors.yellow,
    backgroundColor: Constants.Colors.yellow,
  },
  addToCartIconContainer: {
    height: 37,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  addToCartTotalValueText: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Constants.fontFamily,
    fontSize: 25,
    color: '#fff',
  },
});

ProductItemDescriptionScreen.sharedElements = (
  navigation,
  otherNavigation,
  showing
) => {
  if (otherNavigation.state.routeName === 'Home') {
    const data = navigation.getParam('props');
    return [
      {
        id: `item.${data.id}.photo`,
        animation: 'move',
        resize: 'clip',
      },
      {
        id: `item.${data.id}.title`,
        animation: 'fade',
        align: 'left-center',
      },
      {
        id: `item.${data.id}.title`,
        animation: 'fade',
        align: 'left-center',
      },
    ];
  }
};

export default ProductItemDescriptionScreen;
