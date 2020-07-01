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
    { hintIsOpened? (
      <View style={styles.hintContainer}>
         <TouchableOpacity
            onPress={() => dispatch(showHintComponent())}
            style={{ alignSelf: 'flex-end', marginRight: 10 }}>
            <AntDesign
              name="close"
              size={22}
              color={Constants.Colors.textsPrimary}
            />
          </TouchableOpacity>
          <Text style={{fontSize:40}}>Dicas</Text>
      </View>
    ) : (
      <View />
    )}
  </>
  );
};

export default HintsComponent;
