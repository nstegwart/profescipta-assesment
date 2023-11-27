import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import CTYAction from '../cty-action';
import { formatHargaWithoutCurrency } from '../../shared/helper';

const CardSalesList = ({ item, index, updateQuantity, onDelete, onUpdate }) => {
  return (
    <View style={styles.ctnRoot}>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>{item?.ItemName || '-'}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtPrice}>{formatHargaWithoutCurrency(item?.Price || 0)}</Text>
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>QTY</Text>
        <CTYAction quantity={item.Quantity || 0} onIncrease={() => {updateQuantity(index, 1)}} onDecrease={() => {updateQuantity(index, -1)}} />
      </View>
      <View style={styles.ctnItem}>
        <Text style={styles.txtItem}>Total</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.txtPrice}>{formatHargaWithoutCurrency((item?.Price || 0) * (item.Quantity || 0))}</Text>
      </View>
      <View style={styles.ctnAction}>
        <Text style={styles.txtItem}>Total</Text>
        <View style={styles.ctnRow}>
        <TouchableOpacity style={styles.btnAction} onPress={onUpdate}>
        <MaterialCommunityIcons name="pencil-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAction} onPress={onDelete}>
        <Feather name="trash-2" size={20} color="black" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardSalesList;
