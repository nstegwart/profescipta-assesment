import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';

const CardOrderList = ({ item }) => {

  const navigation = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('DetailOrder', {item})
  }
  return (
    <TouchableWithoutFeedback onPress={handleRedirect}>
    <View style={styles.ctnRoot}>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>{item?.CustomerName || 'PROFES'}</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>{item?.OrderNo || '50_03'}</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>{!!item?.OrderDate ? moment(item?.OrderDate).format("DD/MM/YYYY") : '-' || '-'}</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default CardOrderList;
