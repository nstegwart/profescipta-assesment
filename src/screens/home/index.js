import React, { Fragment, useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, View, Alert } from 'react-native';
import qs from 'querystring';
import styles from './styles';
import { getOrderList, getUserToken } from '../../shared/request';
import { connect } from 'react-redux';
import { setListOrder, setTokenUser } from '../../reducers/states/default-state/actions';
import Header from '../../components/header';
import SearchingCardOrder from '../../components/seaching-card-order';
import CardOrderList from '../../components/card-order-list';
import LoadingIndicator from '../../components/loading-indicator';
import moment from 'moment';

const HomePage = ({ navigation, userToken, defaultState, listOrder }) => {
  const [listFilterData, setFilterData] = useState(listOrder)

  const getNewToken = () => {
    const body = qs.stringify({
      grant_type:'client_credentials',
      client_id:'profes-api',
      client_secret:'P@ssw0rd',
    })
    const headers = { 'content-type': 'application/x-www-form-urlencoded' }
    getUserToken(body, headers).then((res) => {
      setTokenUser(res.access_token)
    }).catch(err => {
      console.log("Error response token", err)
    })
  }

  const fetchData = async() => {
    try{
      const res = await getOrderList()
      setListOrder(res)
    }catch(err){
      console.log("Err fetch:", err)
      getNewToken()
    }
  }

  useEffect(() => {
    if(!!userToken === false){
      getNewToken()
    }
  }, [])
  
  useEffect(() => {
    if(!!userToken){
      fetchData()
    }
  }, [userToken])

  const handleAddList = () => {
    Alert.alert("Mohon Maaf", "API dan design untuk fitur ini tidak tersedia")
  }


  const filterData = (stateValue) => {
    const filteredData = listOrder.filter(item => {
      const formattedOrderDate = moment(item.OrderDate).format('YYYY-MM-DD');
      const formattedFilterDate = moment(stateValue.dateFilter).format('YYYY-MM-DD');
      const lowerCaseKeyword = stateValue.keyword.toLowerCase();
  
      return (
        (lowerCaseKeyword.length === 0 || 
          item.OrderNo.toLowerCase().includes(lowerCaseKeyword) ||
          item.CustomerName.toLowerCase().includes(lowerCaseKeyword) ||
          item.Address.toLowerCase().includes(lowerCaseKeyword) ||
          item.ItemList.some(subItem => subItem.ItemName.toLowerCase().includes(lowerCaseKeyword))
        ) &&
        (!stateValue.isHasChangedBefore || formattedOrderDate === formattedFilterDate)
      );
    });
  
    setFilterData(filteredData);
    
    // Update the state or perform other actions with the filtered data
    console.log('FILTER LIST ITEM DATA', stateValue.keyword, stateValue.dateFilter, filteredData);
  };

  const renderHeader = () => {
    return (
      <Fragment>
        <SearchingCardOrder handleFilterData={filterData} />
        <View style={styles.ctnHeader}>
          <View style={styles.ctnRowHeader}>
            <Text style={styles.txtTitleHeader}>Order List</Text>
            <Text style={styles.txtTotalItems}>Total Items: 50</Text>
          </View>
          <TouchableOpacity style={styles.btnHeader} onPress={handleAddList}>
            <Text style={styles.txtBtnHeader}>Add</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }

  const renderItem = ({ item }) => {
    return <CardOrderList item={item} />
  }
  
  return (
    <View style={styles.ctnRoot}>
      <Header title="Sales Order List" />
      <View style={styles.ctnContent}>
        <FlatList
          style={styles.ctnRoot}
          data={listFilterData}
          ListHeaderComponent={renderHeader()}
          renderItem={renderItem}
          keyExtractor={item => item.OrderNo}
          contentContainerStyle={styles.ctnScroll}
          ListEmptyComponent={() => {
            if(listOrder.length === 0){
              return <LoadingIndicator />
            }
            return (
              <View style={{ flex: 1, paddingVertical: 20 }}>
                <Text style={{ fontSize: 20, color: '#000', textAlign: 'center' }}>No data</Text>
                </View>
            )
          }} />
      </View>
    </View>
  );
};

const mapStateToProps = (states)  => ({
  userToken: states.defaultState.userToken,
  listOrder: states.defaultState.listOrder,
  defaultState: states.defaultState,
})

export default connect(mapStateToProps)(HomePage);
