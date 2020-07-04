import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import LoginContainer from 'components/container/LoginContainer';
import FooterNavBar from 'components/container/FooterNavBar';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import CoinIcone from 'assets/svg/CoinIcone.svg';
import CoinIconActive from 'assets/svg/CoinIconActive.svg';
import api from 'services/api';
import LoadingCoin from 'components/presentational/LoadingCoin';
import fetchGoals from 'store/ducks/actions/goals';

const UserPoints = (props) => {
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  const userGoals = useSelector((state) => state.getGoals.goals);
  const loading = useSelector((state) => state.getGoals.pending);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [isChallengeOpenned, setIsChallengeOpenned] = useState(false);
  const [challengeId, setChallengeId] = useState('');

  useEffect(() => {
    dispatch(fetchGoals(`goal`));
  }, []);
  return loading || !userInfo.name ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.Colors.yellow,
      }}>
      <LoadingCoin height={100} width={100} />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>Ambev Rewards</Text>

      <FlatList
        contentContainerStyle={styles.challengesButtonsContainer}
        data={userGoals}
        ListHeaderComponent={
          <View style={styles.userHeaderInformation}>
            <View style={styles.userImageContainer}>
              <AnimatedProgressWheel
                progress={(userInfo.points * 100) / 1000}
                size={125}
                width={10}
                animateFromValue={0}
                duration={2000}
                color={'#333'}
                fullColor={'#000'}
              />
              <Image
                source={{ uri: userInfo.image }}
                style={{
                  position: 'absolute',
                  height: 106,
                  width: 106,
                  borderRadius: 90,
                }}
                resizeMode="cover"
              />
            </View>
            <View style={styles.userInformationsContainer}>
              <Text
                style={styles.userNameText}>{`Olá, ${userInfo.name}!`}</Text>
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
        }
        renderItem={({ item }) => {
          return !(isChallengeOpenned && challengeId == item.id) ? (
            <TouchableOpacity
              style={[styles.challengesButtonContainer]}
              onPress={() => {
                setIsChallengeOpenned(!isChallengeOpenned);
                setChallengeId(item.id);
              }}>
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
                  }}>
                  {item['minimum_points']}
                </Text>
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
                  progress={item.minimum_points}
                  size={70}
                  width={7}
                  animateFromValue={0}
                  duration={2000}
                  color={Constants.Colors.yellow}
                  backgroundColor={Constants.Colors.backgroundColor}
                />
                <CoinIconActive
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    height: 40,
                    width: 40,
                  }}
                />
              </View>

              <Text
                style={{
                  fontFamily: Constants.fontFamilyXBold,
                  fontSize: Constants.fontSizeBig,
                  position: 'absolute',
                  left: 20,
                  width: 250,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.challengesButtonContainer]}
              onPress={() => {
                setIsChallengeOpenned(!isChallengeOpenned);
                setChallengeId(item.id);
              }}>
              <View
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.oppenedChallengeDescription}>
                  {item.description}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListFooterComponent={
          <View style={{ height: Constants.Layout.footerHeight + 10 }} />
        }
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
      />
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
    height: 170,
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
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  challengesButtonContainer: {
    height: 75,
    width: 280,
    borderRadius: 45,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: Constants.Colors.backgroundColor,
  },
  oppenedChallengeDescription: {
    fontFamily: Constants.fontFamilyBold,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default UserPoints;
