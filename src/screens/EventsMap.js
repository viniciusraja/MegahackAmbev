import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  Text,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  FontAwesome,
} from '@expo/vector-icons';
import Constants from 'config/constants/Constants';
import StyledBars from 'components/presentational/StyledBars';
import LoginContainer from 'components/container/LoginContainer';
import { useNavigation } from 'react-navigation-hooks';
import { useDispatch, useSelector } from 'react-redux';
import MapView from 'react-native-maps';
import FooterNavBar from 'components/container/FooterNavBar';
import api from 'services/api';
import * as Location from 'expo-location';
import LoadingCoin from 'components/presentational/LoadingCoin';

const EventsMap = (props) => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [eventsMarkers, setEventsMarkers] = useState('');
  const [popUpInformation, setPopUpInformation] = useState('');
  const [moreInformationIsOpened, setMoreInformationIsOpened] = useState(false);
  const [recycleMarkers, setRecycleMarkers] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  useEffect(() => {
    (async () => {
      try {
        await api
          .get(`recycle`)
          .then((res) => res.data.object)
          .then((data) => setRecycleMarkers(data))
          .catch((error) => console.log(error));
      } catch (error) {
        Alert.alert(error);
      }
    })(),
      (async () => {
        try {
          await api
            .get(`event`)
            .then((res) => res.data.object)
            .then((data) => setEventsMarkers(data))
            .catch((error) => console.log(error));
        } catch (error) {
          Alert.alert(error);
        }
      })();
  }, []);

  if(errorMsg){Alert.alert("Houve algum Erro para conseguir sua localização!")}
  return (
    
    location||errorMsg?<View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: location.coords.latitude||-15.7801,
          longitude: location.coords.longitude||-47.9292,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {!!recycleMarkers &&
          recycleMarkers.map((marker) => {
            const eventsCoordinates = {
              latitude: marker.latitude,
              longitude: marker.longitude,
            };
            return (
              <MapView.Marker
                key={marker.id}
                coordinate={eventsCoordinates}
                title={marker.title}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: '#000',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <FontAwesome
                    name="recycle"
                    size={25}
                    color={Constants.Colors.yellow}
                  />
                </View>
                <MapView.Callout style={{ height: 80, width: 220 }}>
                  <View
                    style={{
                      height: 80,
                      width: 220,
                      backgroundColor: '#FFF',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Constants.fontFamilyBold,
                        fontSize: 14,
                      }}>
                      {marker.name}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Constants.fontFamily,
                      }}>
                      {marker.description}
                    </Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
        {!!eventsMarkers &&
          eventsMarkers.map((marker) => {
            const eventsCoordinates = {
              latitude: marker.latitude,
              longitude: marker.longitude,
            };
            return (
              <MapView.Marker
                key={marker.id}
                coordinate={eventsCoordinates}
                title={marker.title}>
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: '#000',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Ionicons
                    name="ios-beer"
                    size={25}
                    color={Constants.Colors.yellow}
                  />
                </View>
                <MapView.Callout
                  style={{ height: 90, width: 230 }}
                  onPress={() => {
                    setPopUpInformation({
                      description: marker.description,
                      url: marker.image,
                    });
                    setMoreInformationIsOpened(true);
                  }}>
                  <View
                    style={{
                      height: 90,
                      width: 230,
                      backgroundColor: '#FFF',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Constants.fontFamilyBold,
                        fontSize: 14,
                      }}>
                      {marker.title}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Constants.fontFamilyBold,
                      }}>
                      {marker.date}
                    </Text>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: Constants.fontFamily,
                      }}>
                      {marker.subtitle}
                    </Text>
                  </View>
                </MapView.Callout>
              </MapView.Marker>
            );
          })}
      </MapView>

      {moreInformationIsOpened && (
        <View style={styles.moreInformationContainer}>
          <TouchableOpacity
            onPress={() => setMoreInformationIsOpened(false)}
            style={{ position: 'absolute', right: 10, top: 5 }}>
            <AntDesign
              name="close"
              size={25}
              color={Constants.Colors.lightGrey}
            />
          </TouchableOpacity>
          <Text style={styles.moreInformationText}>
            {popUpInformation.description}
          </Text>
        </View>
      )}
      <LoginContainer />
      <FooterNavBar />
    </View>:<LoadingCoin/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: Constants.Colors.backgroundColor,
  },
  mapStyle: {
    width: Constants.Layout.window.width,
    height: Constants.Layout.window.height,
  },
  moreInformationContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    borderRadius: 20,
    backgroundColor: '#FFF',
    position: 'absolute',
    top:
      (Constants.Layout.window.height - Constants.Layout.footerHeight - 350) /
      2,
    padding: 12,
  },
  moreInformationText: {
    textAlign: 'center',
    fontFamily: Constants.fontFamily,
    fontSize: Constants.fontSizeMedium,
  },
});

export default EventsMap;
