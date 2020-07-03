import React, { useState } from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
  Easing,
  Keyboard,
  Image

} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';
import { styles } from './styles';
import Constants from '../../../config/constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { showLoginComponent } from 'store/ducks/actions/showComponent';
import { useNavigation } from 'react-navigation-hooks';
import Autocomplete from 'react-native-autocomplete-input';

const springValue = new Animated.Value(0);
const animatedEvent = Animated.event(
  [
    {
      nativeEvent: {
        scaleSpring: springValue,
      },
    },
  ],
  { useNativeDriver: true }
);

const springAnimateBurguer = () => {
  springValue.setValue(0.9);
  Animated.spring(springValue, {
    toValue: 1.3,
    friction: 2,
  }).start();
};

const searchProducts=(search, allProducts)=> {
  if (search === '') {
    return [];
  }
  search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const regex = new RegExp(`^${search.trim()}`, 'i');

  return allProducts.filter((product) => {
    return (
      product.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .search(regex) >= 0
    );
  });
}


const getTotalPriceOfCart = (cartList) => {
  if (!!cartList.length) {
    springAnimateBurguer()
    const total = cartList
      .map((item) => item.count)
      .reduce((price, total) => price + total);
    return total;
  }
  return 0;
};
const Header = (props) => {
  const productsList = useSelector((state) => state.getProductsList.productsList);
  const userInfo= useSelector(state => (state.getUserInfo.userInfo))
  const allCategories=productsList.map((category)=>category.products)
  const allProducts=allCategories.reduce((list, sub) => list.concat(sub), [])
  const cartList = useSelector((state) => state.getCartList.cartList);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const products = searchProducts(search,allProducts);
  console.log(products)
  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
  let total = getTotalPriceOfCart(cartList);
  return (
    <View style={styles.headerContainer}>
      
      <View style={styles.autoCompleteContainerToFixPosition}>
              <Autocomplete
                onPress={() => this.myTextInput.current.clear()}
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                style={styles.inputSearchProductContainer}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                listContainerStyle={styles.listContainerStyle}
                listStyle={styles.listStyle}
                data={
                  products.length === 1 && comp(search, products[0].name)
                    ? []
                    : products
                }
                defaultValue={search}
                onChangeText={(text) => setSearch(text) }
                keyExtractor={(item) => `${item.id}`}
                placeholder="Ache sua bebida"
                renderItem={({ item, index }) => {
                  if (index < 4) {
                    return (
                      <TouchableOpacity
                      style={[styles.inputSearchCountryItemContainer]}
                        onPress={() => {
                          console.log('aaaaaa')
                          setSearch(item.name),
                          navigate('ProducItemDescription', {
                            props:item,
                          }),
                          Keyboard.dismiss()
                        }}>
                        
                           <Image
                            style={styles.inputSearchCountryFlagImage}
                            source={{
                              uri: item.image,
                            }}
                            resizeMode='contain'
                          /> 
                          <Text style={styles.inputSearchCountryText}>
                            {item.name}
                          </Text>
                       
                      </TouchableOpacity>
                    );
                  }
                  return null;
                }}
              />
            </View>



      <TouchableOpacity
        onPress={() => !!userInfo?dispatch(showLoginComponent()):navigate('UserInfoScreen')}
        style={styles.loginButtonContainer}>
        {!!userInfo.picture?
          <Image
          style={{height:30,width:30,borderRadius:10}}
          source={{uri:userInfo.picture.data.url}}/>
          :<FontAwesome
          name="user-circle"
          size={24}
          color={Constants.Colors.lightGrey}
        />
        }
        {(true)&&<Animated.View
          style={[
            styles.userLevelContainer,
            {
              transform: [{ scale: springValue }],
            },
          ]}>
          <Text style={styles.userLevelText}>2</Text>
        </Animated.View>}
      </TouchableOpacity> 
    </View>
  );
};

export default Header;
