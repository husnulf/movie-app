import moment from 'moment';
import {ImageBackground, Text, View, Image} from 'react-native';
import CircularProgress from './Circular';

export const listComponentsHor = ({item}) => {
  return (
    <View
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginRight: 15,
        flexDirection: 'row',
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
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          width: '60%',
          height: 200,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            lineBreakMode={'tail'}
            numberOfLines={1}
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>
          <Text
            lineBreakMode={'tail'}
            numberOfLines={4}
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'semi-bold',
            }}>
            {item.overview}
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text
            lineBreakMode={'tail'}
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'bold',
            }}>
            <Image
              source={require('./src/star.png')}
              style={{width: 15, height: 15}}
              resizeMode={'center'}
            />
            {item.popularity}
          </Text>
          <Text
            lineBreakMode={'tail'}
            numberOfLines={1}
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: 'semi-bold',
            }}>
            {moment(item.release_date).format('d MMM, YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};
