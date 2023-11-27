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
import { getListItem } from '../../shared/request';

const DetailOrder = ({ navigation, userToken, defaultState, route }) => {
  const sales = route.params?.item || {}
  const [listItem, setListItem] = useState([])
  const [isLoading, setLoading] = useState(true)

  console.log("CHECK defaultState", defaultState?.userState, listItem)
  useEffect(() => {
    getListItem({
      state: '12345'
    })
    .then(res => {
      setListItem(res)
      setLoading(false)
    }).catch(err => {
      setLoading(false)
    })
  }, [])


  const updateQuantity = (index, amount) => {
    setListItem(prevList => {
      const newList = [...prevList];
      newList[index].Quantity += amount;
      return newList;
    });
  };

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
            <TouchableOpacity style={styles.btnHeader}>
              <Text style={styles.txtBtnHeader}>Add Item</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Fragment>
    )
  }

  const renderItem = ({ item, index }) => {
    return <CardSalesList updateQuantity={updateQuantity} index={index} item={item} />
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
          keyExtractor={item => item.ItemId}
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

      <ModalUpdateItem isVisible={false} />
    </View>
  );
};

const mapStateToProps = (states)  => ({
  userToken: states.defaultState.userToken,
  defaultState: states.defaultState
})

export default connect(mapStateToProps)(DetailOrder);
