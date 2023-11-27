import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import CTYAction from '../cty-action';

const CardSalesList = () => {
  return (
    <View style={styles.ctnRoot}>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>Bareng 1</Text>
        <Text style={styles.txtPrice}>2.000.000</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>QTY</Text>
        <CTYAction />
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>Total</Text>
        <Text style={styles.txtPrice}>2.000.000</Text>
      </View>
      <View style={styles.ctnAction}>
        <Text style={styles.txtItem}>Total</Text>
        <View style={styles.ctnRow}>
        <TouchableOpacity style={styles.btnAction}>
        <MaterialCommunityIcons name="pencil-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAction}>
        <Feather name="trash-2" size={20} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardSalesList;
