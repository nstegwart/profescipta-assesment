import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const CTYAction = ({
  onIncrease, onDecrease, quantity
}) => {
  return (
    <View style={styles.ctnRoot}>
      <TouchableOpacity style={styles.btnAction} onPress={onDecrease}>
        <AntDesign name="minus" size={16} color="black" />
      </TouchableOpacity>
      <View style={styles.ctnAmount}>
        <Text style={styles.txtAmount}>{quantity || 0}</Text>
      </View>
      <TouchableOpacity style={styles.btnAction} onPress={onIncrease}>
        <AntDesign name="plus" size={16} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default CTYAction;
