import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  MaterialCommunityIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Entypo
} from '@expo/vector-icons';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import Constants from 'config/constants/Constants';
import { showHintComponent } from 'store/ducks/actions/showComponent';
import api from 'services/api';
import CoinIcone from 'assets/svg/CoinIcone.svg'


const HintsComponent = (props) => {
  console.log(props.qrCodeData, 'hints component')
  const [hintData, setHintData] = useState('');
  const dispatch = useDispatch();
  const hintIsOpened = useSelector(
    (state) => state.showComponent.hintContainer
  );
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      const data = await api
      .get(`${props.qrCodeData}`)
      .then((res)=>setHintData(res.data))
      .catch(error=>console.log(error))
      if(!!data)setHintData(data)
    })();
  }, [hintIsOpened]);


  return (
    <>
    { (hintIsOpened&&(hintData.message=='ok'))? (
      <View style={styles.hintContainer}>
         <TouchableOpacity
            onPress={() => dispatch(showHintComponent())}
            style={{ alignSelf: 'flex-end', right: 10, top:10 , position:'absolute'}}>
            <AntDesign
              name="close"
              size={22}
              color={Constants.Colors.textsPrimary}
            />
          </TouchableOpacity>
          <View style={styles.hintsHeader}>
          <Text style={styles.hintsTitle}>{hintData.object.title}</Text>
          <View style={styles.hintsImageContainer}>

          <Image style={styles.hintsImage}
                  source={{uri:hintData.object.url}}
                  resizeMode="cover"
                  />
                  </View>
                  </View>
    <Text style={styles.hintsDescription}>{hintData.object.description}</Text>

      </View>
    ) : (
      <CoinIcone />
    )}
  </>
  );
};

export default HintsComponent;
