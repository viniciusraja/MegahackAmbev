import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  productsListContainer: {
    height:230,
    width:'100%',
    alignItems:'center',
    
  },
  productsListNameContainer:{
    height:70,
    width:'80%',
    top:15,
    justifyContent:'center',
    alignItems:'flex-start',
  },
  productsListNameTitle:{
    alignSelf:'flex-start',
    textAlign:'center',
    color:Constants.Colors.textsSecondary,
    position:'absolute',
    bottom:25,
    fontSize:25,
    fontFamily:Constants.fontFamily
  },
  productsList:{
    justifyContent:'center',
    alignItems:'center',
    height:200,
  },

});
