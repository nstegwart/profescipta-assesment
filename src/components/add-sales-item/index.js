import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import ModalUpdateItem from '../modal-update-item';

const AddSalesItem = () => {
  const [stateValue, setStateValue] = useState({
    dateFilter: new Date(),
    showModalDate: false,
    keyword: '',
    isHasChangedBefore: false,
    isCustomerHasChanged: false,
    customer: 'Gian',
    address: ''
  })

  const handleChangeValue = (stateName, value) => {
    setStateValue(prevState => ({
      ...prevState,
      [stateName]: value
    }))
  }
  return (
    <View style={styles.ctnRoot}>
      <Text style={styles.txtTitle}>Sales Information</Text>
      <View style={styles.ctnInput}>
        <TextInput value={stateValue.keyword} onChangeText={value => {handleChangeValue('keyword', value)}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Sales Order Number' keyboardType='number-pad' />
      </View>
      <TouchableOpacity style={styles.ctnInput} onPress={() => { handleChangeValue('showModalDate', true)}}>
        <Text style={[styles.inputStyle, !stateValue.isHasChangedBefore && styles.txtPlaceholder]}>
          {stateValue.isHasChangedBefore ? moment(stateValue.dateFilter).format("DD/MM/YYYY") : 'Sales Order Date'}
        </Text>
        <FontAwesome name="calendar" size={24} color="#A69F9F" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.ctnInput} onPress={() => { handleChangeValue('isCustomerHasChanged', true)}}>
        <Text style={[styles.inputStyle, !stateValue.isCustomerHasChanged && styles.txtPlaceholder]}>
          {stateValue.isCustomerHasChanged ? stateValue.customer : 'Customer'}
        </Text>
        <Entypo name="chevron-down" size={24} color="#A69F9F" />
      </TouchableOpacity>
      <View style={[styles.ctnInput, styles.ctnTextArea]}>
        <TextInput multiline numberOfLines={5} value={stateValue.address} onChangeText={value => {handleChangeValue('address', value)}} style={[styles.inputStyle, styles.ctnTextArea, styles.txtArea]} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Address'  />
      </View>
      <DatePicker
        modal
        open={stateValue.showModalDate}
        date={stateValue.dateFilter}
        mode='date'
        onConfirm={(date) => {
          setStateValue(prevState => ({
            ...prevState,
            isHasChangedBefore: true,
            showModalDate: false,
            dateFilter: date
          }))
        }}
        onCancel={() => {
          setStateValue(prevState => ({
            ...prevState,
            showModalDate: false,
          }))
        }}
      />
    </View>
  );
};

export default AddSalesItem;
