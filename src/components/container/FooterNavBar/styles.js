import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  cartItemCardContainer: {
    position:'absolute',
    bottom:5,
    alignSelf:'center',
    flexDirection:'row',
    height:70,
    width:'95%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:'#fcfcfc',
    marginVertical:5,
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
    borderRightWidth:1,
    borderColor:Constants.Colors.textsPrimary
    
  },
  scanButtomText:{
    fontFamily:Constants.fontFamilyXBold,
    color:Constants.Colors.textsSecondary,
    fontSize:11
  }
});
