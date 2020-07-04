import { StyleSheet } from 'react-native';
import Constants from '../../../../config/constants/Constants';

export const styles = StyleSheet.create({
  productCardButton:{
    height:140,
    width:160,
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  productCardContainer: {
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  productImageContainer:{
    position:'absolute',
    alignSelf:'flex-start',
    height:140,
    width:80,
    left:-5,
    justifyContent:'center',
    alignItems:'center',
    zIndex:25,
  },
  productImage:{
    height:'100%',
    width:'100%',
  },
  productInformationContainer:{
    height:100,
    width:155,
    padding:6,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:Constants.Colors.yellow,
    borderRadius:20,
  },
  productDetailsContainer:{
    alignItems:'flex-start',
    width:85,
  },
  productNameTitle:{
    height:20,
    width:90,
    fontFamily:Constants.fontFamilyXBold,
    fontSize:14,
    textAlign:'left',
    color:Constants.Colors.textsPrimary
  },
  productNameSubtitle:{
    textAlign:'left',
    height:15,
    width:85,
    fontFamily:Constants.fontFamily,
    fontSize:12,
    color:Constants.Colors.textsPrimary
  },
  productVolume:{
    height:25,
    width:45,
    marginTop:5,
    backgroundColor:Constants.Colors.textsPrimary,
    textAlign:'center',
    textAlignVertical:'center',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    color:'#fff',
    fontFamily:Constants.fontFamily,
    fontSize:12,
  },
  quantityOfProductsContainer: {
    position:'absolute',
    bottom:60,
    left:5,
    padding:2,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 30,
    width: 75,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Constants.Colors.yellow,
  },
  quantityOfProductsText: {
    flex: 1,
    textAlign: 'center',
    color: Constants.Colors.yellow,
    fontFamily: Constants.fontFamily,
    fontSize: 20,
  },
  addIconContainer: {
    height: 22,
    width: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: Constants.Colors.yellow,
  }
 

});
