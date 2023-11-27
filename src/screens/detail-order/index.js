import React, { Fragment, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import qs from 'querystring';
import styles from './styles';
import { connect } from 'react-redux';
import Header from '../../components/header';
import CardSalesList from '../../components/card-sales-list';
import AddSalesItem from '../../components/add-sales-item';
import ModalUpdateItem from '../../components/modal-update-item';

const DetailOrder = ({ navigation, userToken, defaultState }) => {


  const renderHeader = () => {
    return (
      <Fragment>
        <AddSalesItem />
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

  const renderItem = ({ item }) => {
    return <CardSalesList />
  }

  const renderSummary = () => {
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
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval]}>
              <Text style={styles.txtBtnHeader}>Process Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnHeader, styles.btnOval, styles.btnCancel]}>
              <Text style={[styles.txtBtnHeader, styles.txtBtncancel]}>Cancel</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
  }
  
  const listItem = []
  listItem.length = 12
  return (
    <View style={styles.ctnRoot}>
      <Header title="Sales Order Input" />
      <View style={styles.ctnContent}>
        <FlatList
          data={listItem}
          ListHeaderComponent={renderHeader()}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={styles.ctnScroll} />

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
