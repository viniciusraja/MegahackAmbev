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
import {
  Ionicons,
  MaterialIcons,
  AntDesign
} from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart, removeItemToCart} from 'store/ducks/actions/cartList';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from 'react-navigation-hooks';
import LoginContainer from 'components/container/LoginContainer';
import FooterNavBar from 'components/container/FooterNavBar'




function checkNumberOfItemsInCart(id){
  const cartList= useSelector(state => (state.getCartList.cartList))
  let count=0
  if(cartList)
  cartList.map((item,index)=>{
    if(item.id==id){
    count=item.count
    }
  })
  
  return count
}

const ProductItemDescriptionScreen = (props) => {
  const data = props.navigation.state.params.props;
  const dispatch= useDispatch()
  const {navigate} = useNavigation();
  const itemsInCart=checkNumberOfItemsInCart(data.id)
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableOpacity
       onPress={()=>props.navigation.goBack()}
        style={{right:5, top:5, position:'absolute'}}
        >
        <AntDesign name="close" size={25} color={Constants.Colors.lightGrey} />
        </TouchableOpacity>
      <View style={styles.detailsContainer}>
        <View style={styles.productNameContainer}>
        <SharedElement
          id={`item.${data.id}.price`}
          >
          <Text style={styles.productNameText}>{`R$${data.price}`}</Text>
        </SharedElement>
          </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 200,
          }}>
          <StyledBars
            innerColor={Constants.Colors.yellow}
            outsideColor={Constants.Colors.backgroundColor}
          />
          <View style={styles.burguerDetailContainer}>
          <SharedElement
            id={`item.${data.id}.title`}
            style={styles.productNameContainer}>
            <Text style={styles.productName}>{data.name}</Text>
          </SharedElement>
            <Text style={styles.burguerDetailText}>
              {data.ingredients_details}
            </Text>
            <Text style={styles.burguerNutritionalDetailText}>
              {data.allergicI_iformation}
            </Text>
          </View>
          <StyledBars
            innerColor={Constants.Colors.yellow}
            outsideColor={Constants.Colors.backgroundColor}
          />
        </View>
        <View style={styles.productsFooterContainer}>
          <View style={styles.quantityOfProductsContainer}>
            <TouchableOpacity style={styles.addIconContainer}
            onPress={()=>dispatch(removeItemToCart(data))
                          }
            >
              <Ionicons name="ios-remove" size={28} color="#fff"/>
            </TouchableOpacity>
            <Text style={styles.quantityOfProductsText}>{itemsInCart}</Text>
            <TouchableOpacity style={styles.addIconContainer}
            onPress={()=>dispatch(addItemToCart(data))
                          }
            >
              <Ionicons name="ios-add" size={28} color="#fff"/>
            </TouchableOpacity>
          </View>
          <View style={styles.addToCartContainer}>
            <View style={styles.addToCartIconContainer}>
            <MaterialIcons name="attach-money" size={26} color={Constants.Colors.yellow} />
            </View>
        <Text style={styles.addToCartTotalValueText}>
          {(data.price*itemsInCart).toFixed(2)}</Text>
</View>
        </View>
      </View>
      <SharedElement
        id={`item.${data.id}.photo`}
        style={styles.productImageContainer}>
        <Image
          style={styles.productImage}
          source={{uri:data.url}}
          resizeMode="contain"
        />
      </SharedElement>
      <LoginContainer />
      <FooterNavBar activePoints={Constants.Colors.yellow}/>

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
    height: '70%',
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-evenly',
    backgroundColor: '#f5f5f5',
    borderTopRightRadius: 500,
    borderTopStartRadius: 500,
  },
  productImageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 100,
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
    height: 60,
    width: 140,
    alignSelf: 'flex-end',
    bottom: 50,
    right: 10,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: Constants.Colors.yellow,
    borderRadius: 20,
  },
  productNameText: {
    width:'100%',
    height:'100%',
    fontFamily: Constants.fontFamily,
    fontSize: 42,
    textAlign:'right',
    textAlignVertical:'center',
    color: '#020202',
  },
  productNameContainer: {
    width: 150,
    height: 60,
    top: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    bottom: 5,
    textAlign: 'center',
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamily,
    fontSize: 35,
  },
  burguerDetailContainer: {
    width: '90%',
    height:'80%',
    paddingBottom:10,
    justifyContent:'space-between',
    alignItems:'center',
  },
  burguerDetailText: {
    textAlign: 'center',
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamily,
    fontSize: 25,
  },
  burguerNutritionalDetailText: {
    textAlign: 'center',
    top: 5,
    color: Constants.Colors.backgroundColor,
    fontFamily: Constants.fontFamily,
    fontSize: 18,
  },
  productsFooterContainer: {
    width: '90%',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  quantityOfProductsContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding:2,
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
  addToCartContainer:{
    width:150,
    height:40,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:20,
    borderWidth:2,
    borderColor:Constants.Colors.yellow,
    backgroundColor:Constants.Colors.yellow
  },
  addToCartIconContainer:{
    height:37,
    width:38,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:20,
    backgroundColor:'#fff'
  },
  addToCartTotalValueText:{
    flex: 1,
    textAlign: 'center',
    fontFamily: Constants.fontFamily,
    fontSize: 25 ,
    color:'#fff'
  }
});

ProductItemDescriptionScreen.sharedElements = (
  navigation,
  otherNavigation,
  showing
) => {
  if ((otherNavigation.state.routeName === 'Home') ) {
  const data = navigation.getParam('props');
  return [
    {
      id: `item.${data.id}.photo`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${data.id}.price`,
      animation: 'fade',
      align: 'left-center',
    },
    {
      id: `item.${data.id}.title`,
      animation: 'fade',
      align: 'left-center',
    },
  ];
};
};

export default ProductItemDescriptionScreen;
