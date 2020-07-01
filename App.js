import React from 'react';
import {Provider} from 'react-redux'
import configureStore from './src/store/ducks/store/configureStore'

import { StatusBar, View} from 'react-native';
import FooterNavBar from 'components/container/FooterNavBar'

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import Router from './src/navigation/navigations'

const store=configureStore()
class App extends React.Component{

        state = {
            fontLoaded: false,
          };

        async componentDidMount() {
            await Font.loadAsync({
                'Nunito-Regular': {
                    uri: require('assets/fonts/Nunito-Regular.ttf')
                },
                'Nunito-Bold': {
                    uri: require('assets/fonts/Nunito-Bold.ttf'),
            },
                'Nunito-Black': {
                    uri: require('assets/fonts/Nunito-Black.ttf'),
            },
        })
            await Asset.loadAsync([
              
           ] ),

        
            this.setState({ fontLoaded: true });
          }

          


   

    render(){
        return(
            this.state.fontLoaded? 
        <>
        <Provider store={store}>
        <StatusBar hidden />
        <Router/>
        <FooterNavBar/>
        </Provider>
        </>:<View/>
        )
    }
}


export default App;
