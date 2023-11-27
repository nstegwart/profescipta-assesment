import React, { Fragment, useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, View } from 'react-native';
import qs from 'querystring';
import styles from './styles';
import { getOrderList, getUserToken } from '../../shared/request';
import { connect } from 'react-redux';
import { setTokenUser } from '../../reducers/states/default-state/actions';
import Header from '../../components/header';
import SearchingCardOrder from '../../components/seaching-card-order';
import CardOrderList from '../../components/card-order-list';

const HomePage = ({ navigation, userToken, defaultState }) => {

  const getNewToken = () => {
    const body = qs.stringify({
      grant_type:'client_credentials',
      client_id:'profes-api',
      client_secret:'P@ssw0rd',
    })
    const headers = { 'content-type': 'application/x-www-form-urlencoded' }
    getUserToken(body, headers).then((res) => {
      console.log("Check response token", res)
      setTokenUser(res.access_token)
    }).catch(err => {
      console.log("Error response token", err)
    })
  }

  const fetchData = async() => {
    try{
      const res = await getOrderList()
      console.log("Check res data", res)
    }catch(err){
      console.log("Err fetch:", err)
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

  const renderHeader = () => {
    return (
      <Fragment>
        <SearchingCardOrder />
        <View style={styles.ctnHeader}>
          <View style={styles.ctnRowHeader}>
            <Text style={styles.txtTitleHeader}>Order List</Text>
            <Text style={styles.txtTotalItems}>Total Items: 50</Text>
          </View>
          <TouchableOpacity style={styles.btnHeader}>
            <Text style={styles.txtBtnHeader}>Add</Text>
          </TouchableOpacity>
        </View>
      </Fragment>
    )
  }

  const renderItem = ({ item }) => {
    return <CardOrderList />
  }
  
  const listItem = []
  listItem.length = 12
  return (
    <View style={styles.ctnRoot}>
      <Header title="Sales Order List" />
      <View style={styles.ctnContent}>
        <FlatList
          data={listItem}
          ListHeaderComponent={renderHeader()}
          renderItem={renderItem}
          keyExtractor={item => item}
          contentContainerStyle={styles.ctnScroll} />
      </View>
    </View>
  );
};

const mapStateToProps = (states)  => ({
  userToken: states.defaultState.userToken,
  defaultState: states.defaultState
})

export default connect(mapStateToProps)(HomePage);
