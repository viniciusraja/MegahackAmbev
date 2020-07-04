import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  productsListContainer: {
    height: 210,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  productsListNameContainer: {
    height: 70,
    width: '80%',

    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productsListNameTitle: {
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: Constants.Colors.textsPrimary,
    position: 'absolute',
    bottom: 25,
    fontSize: 20,
    fontFamily: Constants.fontFamilyXBold,
    borderBottomWidth: 0.5,
  },
  productsList: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
});
