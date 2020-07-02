import React, { useState } from 'react';
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


const HintsComponent = (props) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const hintIsOpened = useSelector(
    (state) => state.showComponent.hintContainer
  );
  const { navigate } = useNavigation();
  return (
    <>
    { true? (
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
          <Text style={styles.hintsTitle}>Pão De Queijo</Text>
          <View style={styles.hintsImageContainer}>

          <Image style={styles.hintsImage}
                  source={require('assets/images/ambevProducts.png')}
                  resizeMode="cover"
                  />
                  </View>
                  </View>
          <Text style={styles.hintsDescription}>Loremasc assc iic asjicnbiasc ascas csaa sc as c asc asc as c asc as c asc as cascascasc ascascas ei ajcnoabownc awocjnaowc awojcnoawnc awojncoanw awcjn awcoinaw oawncl j oawnc</Text>

      </View>
    ) : (
      <View />
    )}
  </>
  );
};

export default HintsComponent;
