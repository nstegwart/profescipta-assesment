import React, { useState} from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';

const confirmationBanner = require('../../../assets/confirmation.png')

const ModalDelete = ({  isVisible, onDelete, onClose }) => {
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
          
          <View style={styles.inputWrapper}>
            <Image source={confirmationBanner} style={styles.imgConfirmation} />
          </View>

          <Text style={styles.txtTitle}>Are you sure wants to delete this item ?</Text>
          <View style={styles.ctnRowButton}>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval]} onPress={onDelete}>
              <Text style={styles.txtBtnHeader}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval, styles.btnCancel]} onPress={onClose}>
              <Text style={[styles.txtBtnHeader, styles.txtBtncancel]}>NO</Text>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;
