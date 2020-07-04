import React, { useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
  Ionicons
} from '@expo/vector-icons';
import ProductCard from '../ProductsCard/'
import { useDispatch, useSelector } from 'react-redux';
import { showAdminProductConfigComponent,showAdminCategoryConfigComponent } from 'store/ducks/actions/showComponent';
import Constants from 'config/constants/Constants';

import { styles } from './styles';
import api from 'services/api';



const ProductsList = (props) => {
  
  const dispatch = useDispatch();
  const productsList= props.products
  const [productPrice, setProductPrice] = useState('');
  const [productIngredientsDetails, setProductIngredientsDetails] = useState('');
  const [productAllergicInformation, setProductAllergicInformation] = useState('');
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  return (
    <View style={styles.productsListContainer}>
      <View style={styles.productsListNameContainer}>
      <Text style={styles.productsListNameTitle}>{`${props.productsListTitle}`}</Text>
      </View>
      <FlatList
      // style={styles.productsList}
      contentContainerStyle={styles.productsList}
      style={{top:-10, height:10}}
      data={productsList}
      renderItem={({item})=><ProductCard {...item}/>}
      keyExtractor={item=>`${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    
      />
    </View>
  );
};

export default ProductsList;
