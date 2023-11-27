import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import qs from 'querystring';
import styles from './styles';
import { getOrderList, getUserToken } from '../../shared/request';
import { connect } from 'react-redux';
import { setTokenUser } from '../../reducers/states/default-state/actions';
import { AntDesign } from '@expo/vector-icons'; 

const HomePage = ({ navigation, userToken, defaultState }) => {

  console.log("Check defaultState", defaultState)
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
  
  return (
    <View style={styles.ctnRoot}>
      {/* meowmeow */}
      {/* meowmeow */}
      <Button title='DIRECT' onPress={() => {navigation.navigate('DetailOrder')}} />
      <AntDesign name="stepforward" size={24} color="black" />
    </View>
  );
};

const mapStateToProps = (states)  => ({
  userToken: states.defaultState.userToken,
  defaultState: states.defaultState
})

export default connect(mapStateToProps)(HomePage);
