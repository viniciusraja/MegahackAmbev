import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Alert,
  Image,
} from 'react-native';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { SimpleLineIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { styles } from './styles';
import Constants from '../../../config/constants/Constants';
import {
  googleIosClientId,
  googleAndroidClientId,
  facebookId,
} from 'config/constants/constantsKeys';
import { useDispatch, useSelector } from 'react-redux';

import { showLoginComponent } from 'store/ducks/actions/showComponent';
import fetchUserInfo from 'store/ducks/actions/userInfo';
import axios from 'axios';
import api from 'services/api';
import * as SecureStore from 'expo-secure-store';
import Base64 from 'Base64';

const LoginContainer = (props) => {
   const dispatch = useDispatch();
   const decoded = Base64.atob("eyJpYXQiOjE1OTM4MjA0MzksImV4cCI6MTU5NzQxNjgzOSwic3ViIjoxfQ");
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userCPF, setUserCPF] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [createAccountIsOppened, setCreateAccountIsOppened] = useState(false);
  const loginIsOpened = useSelector(
    (state) => state.showComponent.loginContainer
  );
  const userInfo = useSelector((state) => state.getUserInfo.userInfo);
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(Base64.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
  async function logInWithAPI() {
    try {
      api
        .post('/authenticate', {
          username: userEmail,
          password: userPassword,
        })
        .then(async (res) => {
          SecureStore.setItemAsync('userToken', res.data.token);
          const {sub}={...parseJwt(await SecureStore.getItemAsync("userToken"))}
          console.log(sub)
          dispatch(fetchUserInfo(`user/${sub}`))
        })
        .catch((err) => console.log(err));

    } catch (error) {
      console.log(error);
    }
  }
  async function signUp() {
    try {
      api
        .post('/user', {
          name: userName,
          password: userPassword,
          cpf: userCPF,
          email:userEmail,
        })
        .then(async (res) => {
          SecureStore.setItemAsync('userToken', res.data.token);
          const {sub}={...parseJwt(await SecureStore.getItemAsync("userToken"))}
          dispatch(fetchUserInfo(`user/${sub}`))
        })
        .catch((err) => console.log(err));

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {loginIsOpened&&!userInfo&&(
        <View style={styles.loginContainer}>

          <View style={styles.inputsAndUserImgContainer}>
           <View style={{top:-10,borderTopLeftRadius:10,borderTopRightRadius:10,backgroundColor:Constants.Colors.yellow, width:'100%', height:120, justifyContent:'center', alignItems:'center',}}>
             
            <FontAwesome
              name="user-circle"
              size={75}
              color={Constants.Colors.backgroundColor}
              />
          <TouchableOpacity
            onPress={() => dispatch(showLoginComponent())}
            style={{ position:'absolute', right:10, top:10 }}>
            <AntDesign
              name="close"
              size={25}
              color={Constants.Colors.lightGrey}
            />
          </TouchableOpacity>
              </View>
            <View style={styles.signInContainer}>
              {createAccountIsOppened&&<TextInput
                style={styles.input}
                placeholder=" Nome"
                placeholderTextColor={Constants.Colors.lightGrey}
                onChangeText={(text) => setUserName(text)}
                defaultValue={userName}
              />}
              <TextInput
                style={styles.input}
                placeholder=" Email"
                placeholderTextColor={Constants.Colors.lightGrey}
                onChangeText={(text) => setUserEmail(text)}
                defaultValue={userEmail}
              />
              {createAccountIsOppened&&<TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor={Constants.Colors.lightGrey}
                onChangeText={(text) => setUserCPF(text)}
                defaultValue={userCPF}
              />}
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={Constants.Colors.lightGrey}
                onChangeText={(text) => setUserPassword(text)}
                defaultValue={userPassword}
              />

              {!createAccountIsOppened?<TouchableOpacity
                style={styles.signInButton}
                onPress={() => logInWithAPI()}>
                <View style={styles.signInButtonContainer}>
                  <SimpleLineIcons name="login" size={18} color="green" />
                  <Text style={styles.signInButtonText}>Sign In</Text>
                </View>
              </TouchableOpacity>:
              <TouchableOpacity
                style={styles.signInButton}
                onPress={() => logInWithAPI()}>
                <View style={styles.signInButtonContainer}>
                  <SimpleLineIcons name="login" size={18} color="green" />
                  <Text style={styles.signInButtonText}>Sing Up</Text>
                </View>
              </TouchableOpacity>}
            </View>
          </View>

          
           {!createAccountIsOppened?<TouchableOpacity style={styles.createAccountButton}
            onPress={()=>setCreateAccountIsOppened(true)}
            >
              <Text style={styles.createAcountText}> Create Account</Text>
            </TouchableOpacity>:
            <TouchableOpacity style={styles.createAccountButton}
            onPress={()=>setCreateAccountIsOppened(false)}
            >
              <Text style={styles.createAcountText}>Fazer Login</Text>
            </TouchableOpacity>}
        </View>
      )}
    </>
  );
};

export default LoginContainer;
