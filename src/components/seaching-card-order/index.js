import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

const SearchingCardOrder = () => {
  return (
    <View style={styles.ctnRoot}>
      <Text style={styles.txtTitle}>Search</Text>
      <View style={styles.ctnInput}>
        <TextInput style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Keyword' />
      </View>
      <View style={styles.ctnInput}>
        <Text style={[styles.inputStyle, styles.txtPlaceholder]}>
          Order date
        </Text>
        <FontAwesome name="calendar" size={24} color="#A69F9F" />
      </View>
    </View>
  );
};

export default SearchingCardOrder;
