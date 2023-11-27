import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';

const SearchingCardOrder = () => {
  const [stateValue, setStateValue] = useState({
    dateFilter: new Date(),
    showModalDate: false,
    keyword: '',
    isHasChangedBefore: false
  })

  const handleChangeValue = (stateName, value) => {
    setStateValue(prevState => ({
      ...prevState,
      [stateName]: value
    }))
  }
  return (
    <View style={styles.ctnRoot}>
      <Text style={styles.txtTitle}>Search</Text>
      <View style={styles.ctnInput}>
        <TextInput value={stateValue.keyword} onChangeText={value => {handleChangeValue('keyword', value)}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Keyword' />
      </View>
      <TouchableOpacity style={styles.ctnInput} onPress={() => { handleChangeValue('showModalDate', true)}}>
        <Text style={[styles.inputStyle, !stateValue.isHasChangedBefore && styles.txtPlaceholder]}>
          {stateValue.isHasChangedBefore ? moment(stateValue.dateFilter).format("DD/MM/YYYY") : 'Order date'}
        </Text>
        <FontAwesome name="calendar" size={24} color="#A69F9F" />
      </TouchableOpacity>

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

export default SearchingCardOrder;
