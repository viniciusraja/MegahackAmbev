import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  cartItemCardContainer: {
    position:'absolute',
    bottom:5,
    alignSelf:'center',
    flexDirection:'row',
    height:70,
    width:'97%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#fcfcfc',
    borderRadius:15,
    elevation:7,
    paddingHorizontal:7

  },
  scanButtom:{
    height:'100%',
    justifyContent:'center',
    width:80,
  },
  scanButtomContainer:{
    height:'80%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    
  },
  scanButtomText:{
    fontFamily:Constants.fontFamilyXBold,
    color:Constants.Colors.textsSecondary,
    fontSize:Constants.fontSizeSmall
  }
});
