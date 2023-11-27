import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

function MainComponent(props) {
  console.log("CHECK PROPS", props.defaultState)
  return (
    <View style={styles.container}>
      <Text>MEOW MEOW</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const mapStateToProps = (state) => ({
  defaultState: state.defaultState
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps)(MainComponent)