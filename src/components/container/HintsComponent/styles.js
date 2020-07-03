import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  hintContainer: {
      position:'absolute',
      top:0,
      height:Constants.Layout.window.height-Constants.Layout.footerHeight-Constants.Layout.headerHeight+10,
      width:'97%',
      alignSelf:'center', 
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor:Constants.Colors.yellow,
      padding:25,
      paddingBottom:20,
      borderTopLeftRadius:20,
      borderTopRightRadius:20,
    },
    hintsHeader:{
      paddingHorizontal:10,
      justifyContent:'center',
      alignItems:'center',
      height:190,
      width:"100%",
    },
  hintsTitle:{
    alignSelf:'flex-start',
    width:"100%",
    textAlign:'center',
    height:70,
    color:Constants.Colors.textsPrimary,
    fontSize:25,
    fontFamily:Constants.fontFamilyBold,
  },
  hintsDescription:{
    alignSelf:'center',
    width:"100%",
    height:195,
    marginTop:20,
    color:Constants.Colors.textsPrimary,
    fontSize:Constants.fontSizeMedium,
    fontFamily:Constants.fontFamilyBold,
    textAlign:'justify'
    
  },
  hintsImageContainer:{
    height:150,
    width:150,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:75,
  },
  hintsImage:{
    height:150,
    width:150,
    borderRadius:75,
  }
});
