/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {TextView} from '../components/Text';
import * as en from '../../utils/eng.json';
import {TextInput} from 'react-native-gesture-handler';

export const Header = ({find}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://alternativemovieposters.com/wp-content/uploads/2022/10/JohnDunn_Dracula.jpg',
      }}
      resizeMode={'cover'}
      style={{width: '100%', height: 170, paddingTop: 20}}>
      <View
        style={{
          width: '100%',
          height: 130,
          paddingLeft: 10,
          paddingRight: 10,
          justifyContent: 'space-around',
        }}>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={1}
          style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          {en.welcome}
        </Text>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={2}
          style={{fontSize: 14, color: 'white', fontWeight: 'semi-bold'}}>
          {en.title}
        </Text>
        <TextInput
          autoFocus={false}
          style={{
            height: 40,
            backgroundColor: 'white',
            width: '100%',
            marginTop: 20,
            borderRadius: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
          placeholder="Search for a movie!"
          onChangeText={e => find(e)}
        />
      </View>
    </ImageBackground>
  );
};
