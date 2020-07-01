import { StyleSheet } from 'react-native';
import Constants from '../../../../config/constants/Constants';

export const styles = StyleSheet.create({
  productCardButton:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  productCardContainer: {
    height:180,
    width:200,
    borderRadius:25,
    justifyContent:'center',
    alignItems:'flex-end',
    marginHorizontal:10,
  },
  productImageContainer:{
    position:'absolute',
    alignSelf:'flex-start',
    bottom:50,
    left:20,
    height:170,
    width:100,
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
    width:150,
    right:15,
    bottom:25,
    justifyContent:'center',
    alignItems:'flex-end',
    backgroundColor:Constants.Colors.yellow,
    borderRadius:10,
  },
  productDetailsContainer:{
    alignItems:'flex-start',
    width:'60%',
  },
  productNameTitle:{
    fontFamily:Constants.fontFamilyXBold,
    fontSize:15,
    textAlign:'left',
    color:Constants.Colors.textsPrimary
  },
  productNameSubtitle:{
    textAlign:'left',
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
