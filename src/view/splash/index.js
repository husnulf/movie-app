'use strict';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          color: 'black',
        }}>
        Splash Screen
      </Text>
    </View>
  );
}

export default Splash;
