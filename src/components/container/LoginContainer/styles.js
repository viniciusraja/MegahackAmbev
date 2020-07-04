import { StyleSheet } from 'react-native';
import Constants from '../../../config/constants/Constants';

export const styles = StyleSheet.create({
  loginContainer: {
    position: 'absolute',
    top:
      (Constants.Layout.window.height -
        400 -
        Constants.Layout.headerHeight -
        Constants.Layout.footerHeight) /
      2,
    height: 400,
    width: '70%',
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Constants.Colors.backgroundColor,
    borderRadius: 30,
    elevation: 7,
  },
  inputsAndUserImgContainer: {
    height: '60%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInContainer: {
    width: '100%',
    height: 225,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    paddingLeft: 10,
    marginBottom: 8,
    textAlign: 'left',
    color: '#0c0c0c',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 7,
  },
  signUpButtonsContainer: {
    height: '28%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
  },
  signInFacebookButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    alignItems: 'center',
    height: 40,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#3b5998',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
  },
  signInGoogleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    alignItems: 'center',
    height: 40,
    width: '80%',
    backgroundColor: '#fff',
    borderColor: '#de5246',
    borderWidth: 1,
    borderRadius: 10,
    elevation: 5,
  },
  signInButtonText: {
    marginLeft: 10,
    color: 'green',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  signInFacebookButtonText: {
    marginLeft: 10,
    color: '#3b5998',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  signInGoogleButtonText: {
    marginLeft: 10,
    color: '#de5246',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  createAcountText: {
    color: '#757575',
    fontSize: 15,
  },

  userLogedInformation: {
    height: '100%',
    width: '100%',
    backgroundColor: Constants.Colors.yellow,
    
  },
});
