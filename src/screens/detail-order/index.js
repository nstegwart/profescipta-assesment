import React, { Fragment, useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, View, Alert } from 'react-native';
import qs from 'querystring';
import styles from './styles';
import { connect } from 'react-redux';
import Header from '../../components/header';
import CardSalesList from '../../components/card-sales-list';
import AddSalesItem from '../../components/add-sales-item';
import ModalUpdateItem from '../../components/modal-update-item';
import LoadingIndicator from '../../components/loading-indicator';
import { createItem, deleteItem, getListItem, updateItem } from '../../shared/request';
import ModalDelete from '../../components/modal-delete';
import { generateRandomNumber, makeid } from '../../shared/helper';

const DetailOrder = ({ navigation, userState, defaultState, route }) => {
  const sales = route.params?.item || {}
  const [listItem, setListItem] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [showDeleteModal, setDeleteModal] = useState({
    index: null,
    visible: false,
    item: null
  })
  const [modalItem, setModalItem] = useState({
    item: null,
    index: null,
    visible: false,
    type: null //add/edit
  })
  const getState = userState

  useEffect(() => {
    getListItem({
      state: getState
    })
    .then(res => {
      setListItem(res)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
    })
  }, [])

  const handleShowAddItem = (index, item) => {
    setModalItem({
      item: item || null,
      index: index === 0 || index ? index: null,
      visible: true,
      type: !!item ? 'update' : 'add'
    })
  }

  const handleCloseModalAddItem = () => {
    setModalItem({
      item: null,
      index: null,
      visible: false,
      type: null
    })
  }

  const updateQuantity = (index, amount) => {
    setListItem(prevList => {
      const newList = [...prevList];
      newList[index].Quantity += amount;
      return newList;
    });
    updateItem(listItem[index],{state: getState})
  };

  const removeItem = () => {
    deleteItem(showDeleteModal.item, {state: getState})
    setListItem((prevList) => {
      const newList = [...prevList];
      newList.splice(showDeleteModal.index, 1);
      return newList;
    });
    
    setDeleteModal({
      index: null,
      visible: false,
      item: null
    })
  };

  const closeModalDelete = () => {
    setDeleteModal({
      index: null,
      visible: false
    })
  }


  const addNewItem = (newItem) => {
    createItem(newItem, {state: getState})
    setListItem((prevList) => [...prevList, newItem]);
    handleCloseModalAddItem()
  };

  const editItem = (index, updatedItem) => {
    console.log("Check new item", updatedItem)
    updateItem(updatedItem,{state: getState})
    setListItem((prevList) => {
      const newList = [...prevList];
      newList[index] = updatedItem;
      return newList;
    });
    handleCloseModalAddItem()
  };

  const handleSaveItem = (newItem) => {
    if(modalItem.type === 'add'){
      addNewItem({
        ...newItem,
        Price: Number(newItem.Price),
        ItemId: generateRandomNumber(),
        OrderId: generateRandomNumber(),
      })
    }
    if(modalItem.type === 'update'){
      editItem(modalItem.index, {...modalItem.item, ...{...newItem, Price: Number(newItem.Price)}})
    }
  }

  console.log("Check modalItem.index", modalItem.index)
  const handleAddList = () => {
    Alert.alert("Mohon Maaf", "API dan design untuk fitur ini tidak tersedia")
  }

  const renderHeader = () => {
    return (
      <Fragment>
        <AddSalesItem sales={sales} />
        <View style={styles.ctnHeader}>
          <View style={styles.ctnRowHeader}>
            <Text style={styles.txtTitleHeader}>Detail Sales</Text>
            <TouchableOpacity style={styles.btnHeader} onPress={handleShowAddItem}>
              <Text style={styles.txtBtnHeader}>Add Item</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Fragment>
    )
  }

  const renderItem = ({ item, index }) => {
    return (
      <CardSalesList
        onUpdate={() => {handleShowAddItem(index, item)}}
        updateQuantity={updateQuantity}
        onDelete={() => {
          setDeleteModal({
            index: index,
            visible: true,
            item: item
          })
        }}
        index={index}
        item={item} />
    )
  }

  const renderSummary = () => {
    if(listItem.length === 0){
      return null
    }
    return (
      <View style={styles.ctnSummary}>
        <Text style={styles.txtTitleSummary}>Order Summary</Text>
        <View style={styles.ctnRowSummary}>
          <Text style={styles.txtSummaryItem}>Sub Total :</Text>
          <Text style={styles.txtSummaryItem}>12.000.000</Text>
        </View>
        <View style={styles.ctnRowSummary}>
          <Text style={styles.txtSummaryItem}>Total Product :</Text>
          <Text style={styles.txtSummaryItem}>6 Product</Text>
        </View>
        <View style={styles.ctnRowButton}>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval]} onPress={handleAddList}>
              <Text style={styles.txtBtnHeader}>Process Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval, styles.btnCancel]} onPress={() => {navigation.goBack()}}>
              <Text style={[styles.txtBtnHeader, styles.txtBtncancel]}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  

  console.log("CHECK listItem", listItem)
  return (
    <View style={styles.ctnRoot}>
      <Header title="Sales Order Input" />
      <View style={styles.ctnContent}>
        <FlatList
          data={listItem}
          ListHeaderComponent={renderHeader()}
          renderItem={renderItem}
          extraData={listItem}
          keyExtractor={item => item.ItemId.toString()}
          contentContainerStyle={styles.ctnScroll} 
          ListEmptyComponent={() => {
            if(isLoading){
              return <LoadingIndicator />
            }
            return (
              <View style={{ flex: 1, paddingVertical: 20 }}>
                <Text style={{ fontSize: 20, color: '#000', textAlign: 'center' }}>No data</Text>
                </View>
            )
          }} />

      </View>
      {renderSummary()}

      <ModalUpdateItem modalItem={modalItem}  onClose={handleCloseModalAddItem} onSave={handleSaveItem} />
      <ModalDelete isVisible={showDeleteModal.visible} onDelete={removeItem} onClose={closeModalDelete} />
    </View>
  );
};

const mapStateToProps = (states)  => ({
  userState: states.defaultState.userState,
  defaultState: states.defaultState
})

export default connect(mapStateToProps)(DetailOrder);
