import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';
import constants from '../../shared/constants';

const LoadingIndicator = ({
  size = 'large',
  color = constants.colors.green,
  fullscreen,
  stylesRoot,
}) => (
  <View
    style={[
      {paddingVertical: 20},
      stylesRoot,
      fullscreen ? styles.fullscreen : {},
    ]}>
    <ActivityIndicator animating size={size} color={color} />
  </View>
);

export default LoadingIndicator;
