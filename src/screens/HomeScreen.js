import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
  Image,
  Linking,
  SafeAreaView,
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';


import LoginContainer from 'components/container/LoginContainer';
import ProductsList from 'components/container/ProductsList/ProductsList';
import AdminProductConfigurationForm from 'components/container/AdminProductConfigurationForm';
import AdminCategoryConfigurationForm from 'components/container/AdminCategoryConfigurationForm';
import Constants from 'config/constants/Constants';
import { SharedElement } from 'react-native-motion';
import * as SecureStore from 'expo-secure-store';
import fetchProductsList from 'store/ducks/actions/productsList';
import { showAdminCategoryConfigComponent } from 'store/ducks/actions/showComponent';
import LottieView from "lottie-react-native";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList:''
    };
  }
  shouldComponentRender = () => {};
  componentDidMount=async()=>{
    const token = await SecureStore.getItemAsync('userToken');
    await this.props.fetchProductsList('/categories');
  }
  componentDidUpdate=async(prevProps, prevState)=>{
    if (prevProps.shouldUpdateList!==this.props.shouldUpdateList){
      await this.props.fetchProductsList('/categories');
      console.log('entrou')
    }
  };
  render() {
    // if (this.props.loading)
    //   return (
    //   <View style={{flex:1,justifyContent:'center', alignItems:'center', backgroundColor:"#FFF"}}>
    //   <Image
    //     style={{height:130,width:130, alignItems:'flex-start',bottom:40}}
    //     source={require('assets/images/lottieActivityBurguer.gif')}
    //     resizeMode="cover"
    //   />
    // </View>)
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.productsList}
          data={this.props.productsList}
          ListHeaderComponent={
              <View style={styles.headerImageContainer}>
                <Image
                  style={styles.headerImage}
                  source={require('assets/images/ambevProducts.png')}
                  resizeMode="contain"
                />
              </View>
          
          }
          ListFooterComponent={
            <TouchableOpacity
              style={{
                marginVertical: 30,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                height: 45,
                width: 45,
                borderRadius: 30,
              }}
              onPress={()=>this.props.showAdminCategoryConfigComponent(this.props.productsList)}
            >
              <Ionicons name="ios-add" size={30} color="#fff" />
            </TouchableOpacity>
          }
          renderItem={({ item }) => (
            <ProductsList
              categoryId={item.id}
              productsListTitle={item.title}
              productsListSubtitle={item.subtitle}
              products={item.productsList}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
        {/* <View style={{ alignSelf:'center', width: 90, height: 90}}>
        <LottieView
        source={require('assets/animations/Sucos.json')}
        autoPlay
        style={{ width: 80, height: 80 , backfaceVisibility:'hidden'}}
        resizeMode="cover"
        /></View> */}
        <LoginContainer />
        <AdminProductConfigurationForm />
        <AdminCategoryConfigurationForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.backgroundColor,
  },
  header: {},
  categoriesList: {},
  
  headerImageContainer: {
    width: '95%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    height:250,
    backgroundColor:Constants.Colors.yellow,
    alignSelf:'center',
  },
  headerImage: {
    alignSelf:'center',
    height:"100%",
    width: '100%',
  },
  buttonHamburguerContainer: {
    position: 'absolute',
    height: '100%',
  },
  productsListContainer: {
    height: '80%',
  },
  loginContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

const mapStateToProps = (state) => ({
  productsList: state.getProductsList.productsList,
  shouldUpdateList: state.getProductsList.shouldUpdateList,
  loading: state.getProductsList.pending,
  error: state.getProductsList.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsList: (req) => dispatch(fetchProductsList(req)),
    showAdminCategoryConfigComponent: (props) => dispatch(showAdminCategoryConfigComponent(props)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
