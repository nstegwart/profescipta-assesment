import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const CardOrderList = () => {
  return (
    <View style={styles.ctnRoot}>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>PROFES</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>50_03</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>24/2/11</Text>
      </View>
    </View>
  );
};

export default CardOrderList;
