import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemToCart } from 'store/ducks/actions/cartList';
import { useNavigation } from 'react-navigation-hooks';
import LoginContainer from 'components/container/LoginContainer';
import FooterNavBar from 'components/container/FooterNavBar';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import CoinIcone from 'assets/svg/CoinIcone.svg';

const UserPoints = (props) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ambev Rewards</Text>
      <View style={styles.userHeaderInformation}>
        <View style={styles.userImageContainer}>
          <AnimatedProgressWheel
            progress={70}
            size={125}
            width={10}
            animateFromValue={0}
            duration={2000}
            color={'#333'}
            fullColor={'#000'}
          />
          <Image
          source={{uri:"data:image/jpeg;base64,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"}}
          style={{position:'absolute',height:106, width:106, borderRadius:90}}
          resizeMode='cover'
          />
        </View>
        <View style={styles.userInformationsContainer}>
          <Text style={styles.userNameText}>{`Olá, João!`}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CoinIcone style={{ height: 26, width: 26 }} />
            <Text style={styles.userPointsText}>{`55 PTS`}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <SimpleLineIcons name="trophy" size={26} color="black" />
            <Text style={styles.userPointsText}>{`Recompensas`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.challengesButtonsContainer}>
        <TouchableOpacity style={styles.challengesButtonContainer}>
          <View
            style={{
              width: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start',
              position: 'absolute',
              left: 127.5,
            }}>
            <Text
              style={{
                marginRight: 5,
                fontSize: 12,
                fontFamily: Constants.fontFamilyBold,
              }}>{`5/10`}</Text>
            <MaterialCommunityIcons name="podium" size={18} color="black" />
          </View>
          <View
            style={{
              
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Constants.Colors.textsPrimary,
              borderRadius: 30,
              height: 60,
              width: 60,
            }}>
            <AnimatedProgressWheel
              progress={90}
              size={70}
              width={7}
              animateFromValue={0}
              duration={2000}
              color={Constants.Colors.yellow}
              backgroundColor={Constants.Colors.backgroundColor}
            />
            <MaterialCommunityIcons
              style={{ position: 'absolute', alignSelf: 'center' }}
              name="beer"
              size={27}
              color={Constants.Colors.yellow}
            />
          </View>

          <Text
            style={{
              fontFamily: Constants.fontFamilyXBold,
              fontSize: Constants.fontSizeBig,
              marginLeft:17,
            }}>
            Experience
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.challengesButtonContainer}>
          <View
            style={{
              width: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start',
              position: 'absolute',
              left: 127.5,
            }}>
            <Text
              style={{
                marginRight: 5,
                fontSize: 12,
                fontFamily: Constants.fontFamilyBold,
              }}>{`2/10`}</Text>
            <MaterialCommunityIcons name="podium" size={18} color="black" />
          </View>
          <View
            style={{
              
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Constants.Colors.textsPrimary,
              borderRadius: 30,
              height: 60,
              width: 60,
            }}>
            <AnimatedProgressWheel
              progress={20}
              size={70}
              width={7}
              animateFromValue={0}
              duration={2000}
              color={Constants.Colors.yellow}
              backgroundColor={Constants.Colors.backgroundColor}
            />
            <MaterialCommunityIcons style={{ position: 'absolute', alignSelf: 'center' }} name="food" size={40} color={Constants.Colors.yellow}/>
          </View>

          <Text
            style={{
              fontFamily: Constants.fontFamilyXBold,
              fontSize: Constants.fontSizeBig,
              marginLeft:17,
            }}>
            Degustador
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.challengesButtonContainer}>
          <View
            style={{
              width: 40,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'flex-start',
              position: 'absolute',
              left: 127.5,
            }}>
            <Text
              style={{
                marginRight: 5,
                fontSize: 12,
                fontFamily: Constants.fontFamilyBold,
              }}>{`2/10`}</Text>
            <MaterialCommunityIcons name="podium" size={18} color="black" />
          </View>
          <View
            style={{
              
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Constants.Colors.textsPrimary,
              borderRadius: 30,
              height: 60,
              width: 60,
            }}>
            <AnimatedProgressWheel
              progress={40}
              size={70}
              width={7}
              animateFromValue={0}
              duration={2000}
              color={Constants.Colors.yellow}
              backgroundColor={Constants.Colors.backgroundColor}
            />
            <MaterialCommunityIcons
              style={{ position: 'absolute', alignSelf: 'center' }}
              name="coffee-outline"
              size={30}
              color={Constants.Colors.yellow}
            />
          </View>

          <Text
            style={{
              fontFamily: Constants.fontFamilyXBold,
              fontSize: Constants.fontSizeBig,
              marginLeft:17,
            }}>
            Para sua Tarde
          </Text>
        </TouchableOpacity>
      </View>
      <FooterNavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Constants.Colors.yellow,
  },
  title: {
    fontSize: Constants.fontSizeMedium,
    fontFamily: Constants.fontFamilyXBold,
  },
  userHeaderInformation: {
    flexDirection: 'row',
    width: 300,
    height: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImageContainer: {
    height: 130,
    width: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
  },
  userImageContainerProgress: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: Constants.Colors.darkShade,
  },
  userInformationsContainer: {
    height: 100,
    width: 155,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  userNameText: {
    fontSize: Constants.fontSizeBig,
    fontFamily: Constants.fontFamilyXBold,
    width: 160,
    height: 30,
  },
  userPointsText: {
    fontSize: Constants.fontSizeMedium,
    fontFamily: Constants.fontFamilyBold,
    width: 130,
    marginLeft: 10,
  },
  challengesButtonsContainer: {
    height: 290,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  challengesButtonContainer: {
    height: 90,
    width: 300,
    borderRadius: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Constants.Colors.backgroundColor,
  },
});

export default UserPoints;
