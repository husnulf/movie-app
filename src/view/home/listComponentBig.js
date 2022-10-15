import moment from 'moment';
import {ImageBackground, Text, View, Image} from 'react-native';
import CircularProgress from './Circular';

export const listComponentBig = ({item}) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 15,
        marginTop: -10,
      }}>
      <ImageBackground
        imageStyle={{borderRadius: 6}}
        style={{
          width: 300,
          height: 130,
          marginTop: 25,
          marginBottom: 10,
        }}
        resizeMode={'cover'}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path,
        }}>
        <View
          style={{
            width: '100%',
            height: 70,
            justifyContent: 'space-around',
          }}>
          <CircularProgress percent={item.vote_average} />
        </View>
      </ImageBackground>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 290,
        }}>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={1}
          style={{
            fontSize: 14,
            width: 130,
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
        <Text
          lineBreakMode={'tail'}
          numberOfLines={1}
          style={{
            textAlign: 'right',
            fontSize: 14,
            width: 130,
            justifyContent: 'center',
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.popularity}
          <Image
            source={require('../home/src/star.png')}
            style={{width: 15, height: 15}}
            resizeMode={'center'}
          />
        </Text>
      </View>

      <Text
        lineBreakMode={'tail'}
        numberOfLines={2}
        style={{
          fontSize: 14,
          width: 300,
          color: 'black',
          fontWeight: 'semi-bold',
        }}>
        {item.overview}
      </Text>
    </View>
  );
};
