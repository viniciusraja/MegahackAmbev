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
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height:220,
      width:"100%",
    },
  hintsTitle:{
    alignSelf:'flex-start',
    width:150,
    height:220,
    color:Constants.Colors.textsPrimary,
    fontSize:Constants.fontSizeLarge,
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
    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:75,
    backgroundColor:Constants.Colors.backgroundColor,
  },
  hintsImage:{
    height:150,
    width:150,
    borderRadius:75,
  }
});
