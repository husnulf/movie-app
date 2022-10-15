import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
/**
 * Override styles that get passed from props
 **/
propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

renderThirdLayer = percent => {
  if (percent > 50) {
    /**
     * Third layer circle default is 45 degrees, so by default it occupies the right half semicircle.
     * Since first 50 percent is already taken care  by second layer circle, hence we subtract it
     * before passing to the propStyle function
     **/
    return (
      <View style={[styles.secondProgressLayer, propStyle(percent - 25, 45)]} />
    );
  } else {
    return <View style={styles.offsetLayer} />;
  }
};

const CircularProgress = ({percent}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(25, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]} />
      <Text
        style={[
          styles.display,
          {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
          },
        ]}>
        {percent}%
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    marginTop: -40,
    marginBottom: 20,
    marginLeft: 10,
    height: 25,
    borderWidth: 5,
    backgroundColor: 'orange',
    borderRadius: 100,
    borderColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: 40,
    marginTop: 3,
    marginBottom: 3,
    height: 25,
    borderWidth: 5,
    borderRadius: 100,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform: [{rotateZ: '-135deg'}],
  },
  secondProgressLayer: {
    width: 40,
    marginTop: 3,
    marginBottom: 3,
    height: 25,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#3498db',
    borderTopColor: '#3498db',
    transform: [{rotateZ: '45deg'}],
  },
  offsetLayer: {
    width: 40,
    marginTop: 3,
    marginBottom: 3,
    height: 25,
    position: 'absolute',
    borderWidth: 5,
    borderRadius: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'orange',
    borderTopColor: 'orange',
    transform: [{rotateZ: '-135deg'}],
  },
});

export default CircularProgress;
