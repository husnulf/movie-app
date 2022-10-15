'use strict';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {Header} from './header';
import * as en from '../../utils/eng.json';
import axios from 'axios';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {listComponents} from './listComponent';
import {listComponentBig} from './listComponentBig';
import {listComponentsTv} from './listComponentsTv';
import {listComponentsHor} from './listComponentHor';
import {activityIndicator} from './activityIndicator';
import {
  endpointUrl,
  endpointUrlTopRated,
  endpointUrlUpComing,
  endpointUrlTopTv,
  endpoinUrlSearch,
} from '../../utils/api';

function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topTv, setTopTv] = useState([]);
  const [findMv, setFind] = useState(null);

  useEffect(() => {
    axios
      .get(endpointUrl)
      .then(response => {
        setNowPlaying(response.data.results);
      })
      .catch(error => {
        throw error;
      });
    axios
      .get(endpointUrlTopRated)
      .then(response => {
        setTopRated(response.data.results);
      })
      .catch(error => {
        throw error;
      });
    axios
      .get(endpointUrlUpComing)
      .then(response => {
        setUpComing(response.data.results);
      })
      .catch(error => {
        throw error;
      });
    axios
      .get(endpointUrlTopTv)
      .then(response => {
        setTopTv(response.data.results);
      })
      .catch(error => {
        throw error;
      });
  }, []);

  const find = key => {
    if (key === '') {
      setFind(null);
    }

    axios
      .get(endpoinUrlSearch + '&query=' + key)
      .then(response => {
        setFind(response.data.results);
      })
      .catch(error => {
        throw error;
      });
  };

  const s = require('./src/style');

  return (
    <View style={s.container}>
      <Header find={find} />
      <ScrollView>
        <View style={{padding: 10}}>
          {findMv !== null ? (
            <FlatList
              ListEmptyComponent={activityIndicator}
              showsHorizontalScrollIndicator={false}
              horizontal={false}
              data={findMv}
              renderItem={listComponentsHor}
              keyExtractor={item => item.id}
            />
          ) : (
            <View />
          )}
          <Text style={s.titleText}>{en.nowplaying}</Text>
          <FlatList
            ListEmptyComponent={activityIndicator}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={nowPlaying}
            renderItem={listComponents}
            keyExtractor={item => item.id}
          />
          <Text style={s.titleText}>{en.toprated}</Text>
          <FlatList
            ListEmptyComponent={activityIndicator}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={topRated}
            renderItem={listComponentBig}
            keyExtractor={item => item.id}
          />
          <Text style={s.titleText}>{en.upcoming}</Text>
          <FlatList
            ListEmptyComponent={activityIndicator}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={upComing}
            renderItem={listComponents}
            keyExtractor={item => item.id}
          />
          <Text style={s.titleText}>{en.toptv}</Text>
          <FlatList
            ListEmptyComponent={activityIndicator}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={topTv}
            renderItem={listComponentsTv}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
