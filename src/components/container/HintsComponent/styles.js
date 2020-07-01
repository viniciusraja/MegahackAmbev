import { StyleSheet } from 'react-native';
import Constants from 'config/constants/Constants';

export const styles = StyleSheet.create({
  hintContainer: {
      position:'absolute',
      top:0,
      height:'100%',
      width:'100%',
      paddingVertical:10,
      alignSelf:'center',
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor:'#f5f5f5',
      borderRadius:10,
      elevation:7
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
