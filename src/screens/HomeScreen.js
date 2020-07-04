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

import FooterNavBar from 'components/container/FooterNavBar';

import LoginContainer from 'components/container/LoginContainer';
import ProductsList from 'components/container/ProductsList/ProductsList';
import Constants from 'config/constants/Constants';
import { SharedElement } from 'react-native-motion';
import * as SecureStore from 'expo-secure-store';
import fetchProductsList from 'store/ducks/actions/productsList';
import LoadingCoin from 'components/presentational/LoadingCoin';
import Carousel, { Pagination } from 'react-native-snap-carousel';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }
  componentDidMount = async () => {
    await this.props.fetchProductsList('/category');
  };
  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.shouldUpdateList !== this.props.shouldUpdateList) {
      await this.props.fetchProductsList('/category');
    }
  };
  headerPublicity = ({ item, index }) => {
    return (
      <View style={{ height: 300 }}>
        <TouchableOpacity
          style={styles.headerImageContainer}
          onPress={() => Linking.openURL(item.link)}>
          <Image
            style={styles.headerImage}
            source={{ uri: item.uri }}
            resizeMode="cover"
          />
          <Text
            style={{
              height: 60,
              alignSelf: 'flex-end',
              width: 300,
              fontSize: 24,
              position: 'absolute',
              textAlign: 'center',
              bottom: 0,
              borderTopLeftRadius: 100,
              textAlignVertical: 'center',
              borderBottomRightRadius: 40,
              backgroundColor: Constants.Colors.yellow,
              color: '#FFF',
              fontFamily: Constants.fontFamilyBold,
            }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    if (this.props.loading)
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Constants.Colors.backgroundColor,
          }}>
          <LoadingCoin height={100} width={100} />
        </View>
      );
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.productsList}
          data={this.props.productsList}
          keyboardShouldPersistTaps="always"
          ListHeaderComponent={
            <View style={{ justifyContent: 'flex-start', height: 270 }}>
              <Pagination
                dotsLength={this.props.productsList.length - 1}
                activeDotIndex={this.state.activeSlide}
                containerStyle={{
                  position: 'absolute',
                  bottom: -30,
                  alignSelf: 'center',
                }}
                dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: Constants.Colors.yellow,
                }}
                inactiveDotStyle={{
                  width: 7,
                  height: 7,
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
              <Carousel
                ref={(c) => {
                  this._carousel = c;
                }}
                data={this.props.headerAdvertisement}
                autoplay={true}
                enableMomentum={false}
                loop={true}
                lockScrollWhileSnapping={true}
                onSnapToItem={(index) => this.setState({ activeSlide: index })}
                renderItem={this.headerPublicity}
                sliderWidth={Constants.Layout.window.width}
                itemWidth={Constants.Layout.window.width}
              />
            </View>
          }
          renderItem={({ item }) => (
            <ProductsList
              categoryId={item.id}
              productsListTitle={item.title}
              productsListSubtitle={item.subtitle}
              products={item.products}
            />
          )}
          ListFooterComponent={
            <View style={{ height: Constants.Layout.footerHeight }} />
          }
          keyExtractor={(item) => `${item.id}`}
          showsVerticalScrollIndicator={false}
        />
        <FooterNavBar />
        <LoginContainer />
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
  productsList: {},

  headerImageContainer: {
    width: '95%',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
    backgroundColor: Constants.Colors.yellow,
    alignSelf: 'center',
    marginTop: 10,
  },
  headerImage: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    borderRadius: 25,
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
  headerAdvertisement: state.getGoals.headerAdvertisement,
  shouldUpdateList: state.getProductsList.shouldUpdateList,
  loading: state.getProductsList.pending,
  error: state.getProductsList.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsList: (req) => dispatch(fetchProductsList(req)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
