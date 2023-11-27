import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import CTYAction from '../cty-action';

const ModalUpdateItem = ({  isVisible }) => {
  const [stateValue, setStateValue] = useState({
    name: '',
    price: '',
    qty: 1
  })

  const handleChangeValue = (stateName, value) => {
    setStateValue(prevState => ({
      ...prevState,
      [stateName]: value
    }))
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
    // visible
    >
      <View style={styles.ctnWrapper}>
        <View style={styles.ctnRoot}>
          <Text style={styles.txtTitle}>New Item</Text>
          
          <View style={styles.inputWrapper}>
            <Text style={styles.txtLabel}>Item Name</Text>
            <View style={styles.ctnInput}>
              <TextInput value={stateValue.name} autoFocus onChangeText={value => {handleChangeValue('name', value)}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Insert item name...' />
            </View>
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.txtLabel}>Price</Text>
            <View style={styles.ctnInput}>
              <TextInput value={stateValue.price} onChangeText={value => {handleChangeValue('price', value)}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Insert item price...' keyboardType='number-pad' />
            </View>
          </View>
          <View style={styles.ctnQty}>
            <Text style={[styles.txtLabel, styles.mgRight]}>QTY</Text>
            <CTYAction />
          </View>
          <View style={styles.ctnTotal}>
            <Text style={styles.txtTotal}>Total</Text>
            <Text style={styles.txtTotal}>2.000.000</Text>
          </View>
          <View style={styles.ctnRowButton}>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval]}>
              <Text style={styles.txtBtnHeader}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval, styles.btnCancel]}>
              <Text style={[styles.txtBtnHeader, styles.txtBtncancel]}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalUpdateItem;
