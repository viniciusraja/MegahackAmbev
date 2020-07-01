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
      {/* <Text style={styles.productsListNameSubtitle}>{props.productsListSubtitle}</Text> */}
      {/* <TouchableOpacity
        style={{
          position: 'absolute',
          left: 15,
          bottom: 35,
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
            showAdminCategoryConfigComponent({
                 categoryId: props.categoryId,
                 title: props.productsListTitle,
                 subtitle: props.productsListSubtitle,
                 hasProducts:(props.products.length>0)
            })
          )
        }
        >
        <FontAwesome name="edit" size={24} color="#FFF" />
      </TouchableOpacity> */}
      </View>
      <FlatList
      contentContainerStyle={styles.productsList}
      data={productsList}
      renderItem={({item})=><ProductCard {...item}/>}
      keyExtractor={item=>`${item.id}`}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={
        <View style={{width:100,height:'100%',justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity style={{marginBottom:30,backgroundColor:'red',justifyContent:'center', alignItems:'center', height:45, width:45,borderRadius:30}}
        onPress={()=>dispatch(showAdminProductConfigComponent({categoryId:props.categoryId, productsListTitle:props.productsListTitle,editingProduct:true}))}
            >
              <Ionicons name="ios-add" size={23} color="#fff"/>
            </TouchableOpacity>
            </View>
      }
      />
    </View>
  );
};

export default ProductsList;
