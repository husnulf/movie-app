import moment from 'moment';
import {ImageBackground, Text, View} from 'react-native';
import CircularProgress from './Circular';

export const listComponents = ({item}) => {
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
          width: 130,
          height: 200,
          marginTop: 25,
          marginBottom: 10,
        }}
        resizeMode={'cover'}
        source={{
          uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path,
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
      <Text
        lineBreakMode={'tail'}
        numberOfLines={1}
        style={{
          fontSize: 16,
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
          fontSize: 14,
          width: 130,
          color: 'black',
          fontWeight: 'semi-bold',
        }}>
        {moment(item.release_date).format('d MMM, YYYY')}
      </Text>
    </View>
  );
};
