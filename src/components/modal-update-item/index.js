import React, { useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import CTYAction from '../cty-action';
import { formatHargaWithoutCurrency, onlyNumber } from '../../shared/helper';

const ModalUpdateItem = ({ modalItem, onClose, onSave }) => {
  const [stateValue, setStateValue] = useState({
    ItemName: '',
    Price: '',
    Quantity: 1
  })
  const [validationError, setValidationError] = useState({
    itemName: '',
    price: '',
    quantity: ''
  });

  useEffect(() => {
    if(modalItem.visible){
      if(modalItem.type === 'add'){
        setStateValue({
          ItemName: '',
          Price: '',
          Quantity: 1
        })
      }else{
        const item = modalItem?.item || null
        if(item){
          setStateValue({
            ItemName: item?.ItemName || '',
            Price: (item?.Price || 0).toString() || '',
            Quantity: item?.Quantity
          })
        }
      }
    }
  }, [modalItem.visible])

  const handleChangeValue = (stateName, value) => {
    setStateValue(prevState => ({
      ...prevState,
      [stateName]: value
    }))
    // Reset validation error on input change
    setValidationError((prevError) => ({
      ...prevError,
      [stateName]: ''
    }));
  }

  const validateInputs = () => {
    let isValid = true;
    const errors = {
      itemName: '',
      price: '',
      quantity: ''
    };

    if (!stateValue.ItemName.trim()) {
      errors.itemName = 'Item Name is required';
      isValid = false;
    }

    if (!stateValue.Price.trim()) {
      errors.price = 'Price is required';
      isValid = false;
    } else if (isNaN(Number(stateValue.Price))) {
      errors.price = 'Price must be a valid number';
      isValid = false;
    }

    if (stateValue.Quantity <= 0) {
      errors.quantity = 'Quantity must be greater than 0';
      isValid = false;
    }

    setValidationError(errors);

    return isValid;
  };

  const handleIncreaseQuantity = () => {
    setStateValue((prevState) => ({
      ...prevState,
      Quantity: prevState.Quantity + 1,
    }));
  };

  const handleDecreaseQuantity = () => {
    if (stateValue.Quantity > 1) {
      setStateValue((prevState) => ({
        ...prevState,
        Quantity: prevState.Quantity - 1,
      }));
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalItem.visible}
    // visible
    >
      <View style={styles.ctnWrapper}>
        <View style={styles.ctnRoot}>
          <Text style={styles.txtTitle}>New Item</Text>
          
          <View style={styles.inputWrapper}>
            <Text style={styles.txtLabel}>Item Name</Text>
            <View style={styles.ctnInput}>
              <TextInput value={stateValue.ItemName} autoFocus onChangeText={value => {handleChangeValue('ItemName', value)}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Insert item name...' />
            </View>
            {validationError.itemName !== '' && (
              <Text style={styles.errorText}>{validationError.itemName}</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <Text style={styles.txtLabel}>Price</Text>
            <View style={styles.ctnInput}>
              <TextInput value={stateValue.Price} onChangeText={value => {handleChangeValue('Price', onlyNumber(value))}} style={styles.inputStyle} placeholderTextColor={'#A69F9F'} maxLength={40} placeholder='Insert item price...' keyboardType='number-pad' />
            </View>
            
            {validationError.price !== '' && (
              <Text style={styles.errorText}>{validationError.price}</Text>
            )}
          </View>
          <View style={styles.ctnQty}>
            <Text style={[styles.txtLabel, styles.mgRight]}>QTY</Text>
            <CTYAction 
              quantity={stateValue.Quantity} 
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity} />
          </View>
            {validationError.quantity !== '' && (
              <Text style={styles.errorText}>{validationError.quantity}</Text>
            )}
          <View style={styles.ctnTotal}>
            <Text style={styles.txtTotal}>Total</Text>
            {!!stateValue.Price && !!stateValue.Quantity > 0 ? (
              <Text style={styles.txtTotal}>{formatHargaWithoutCurrency(stateValue.Quantity * Number(stateValue.Price))}</Text>
            ): (
              <Text style={styles.txtTotal}>-</Text>
            )}
          </View>
          <View style={styles.ctnRowButton}>
            <TouchableOpacity
              style={[styles.btnHeader, styles.btnOval]}
              onPress={() => {
                if (validateInputs()) {
                  onSave(stateValue);
                }
              }}
            >
              <Text style={styles.txtBtnHeader}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval, styles.btnCancel]} onPress={onClose}>
              <Text style={[styles.txtBtnHeader, styles.txtBtncancel]}>Cancel</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalUpdateItem;
