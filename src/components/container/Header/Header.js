import React, { useState } from 'react';
import {
  View,
  Animated,
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
import { useNavigation, useNavigationState } from 'react-navigation-hooks';
import Autocomplete from 'react-native-autocomplete-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UserPoints from 'screens/UserPoints';

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
  const { routeName } = useNavigationState();
  const products = searchProducts(search,allProducts);
  console.log(products)
  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
  let total = getTotalPriceOfCart(cartList);
  return (
    <View style={[styles.headerContainer]}>
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
                        <View
                        style={[styles.inputSearchCountryItemContainer]}
                        >
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
                          </View>
                      </TouchableOpacity>
                    );
                  }
                  return null;
                }}
              />
            </View>


      {!!userInfo.image?<TouchableOpacity
        onPress={() => navigate("UserPoints")}
        style={styles.loginButtonContainer}>
          <Image
          style={{height:35,width:35,borderRadius:30}}
          source={{uri:userInfo.image}}/>
      </TouchableOpacity>: 
      <TouchableOpacity
        onPress={() =>dispatch(showLoginComponent())}
        style={styles.loginButtonContainer}>
        <FontAwesome
          name="user-circle"
          size={24}
          color={Constants.Colors.lightGrey}
        />
      </TouchableOpacity>} 
    </View>
  );
};

export default Header;
