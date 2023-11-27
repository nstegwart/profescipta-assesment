import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ctnRoot: {
    backgroundColor: '#fff',
    borderColor: '#979C9F',
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20
  },
  ctnInput:{
    borderColor: '#747474',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12
  },
  inputStyle:{
    flex: 1,
    textAlignVertical: 'center',
    paddingHorizontal: 12,
    color: '#fff'
  },
  txtTitle:{
    fontSize: 16,
    color: '#000000',
    fontWeight: '500'
  },
  txtPlaceholder: {
    color: '#A69F9F'
  }
});
