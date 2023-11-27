import { StyleSheet } from 'react-native';
import constants from '../../shared/constants';

export default StyleSheet.create({
  ctnRoot: {
    backgroundColor: '#fff',
    borderColor: '#979C9F',
    borderWidth: 1,
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    width: '90%'
  },
  ctnInput:{
    borderColor: '#bfbfbf',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12
  },
  inputStyle:{
    flex: 1,
    textAlignVertical: 'center',
    paddingHorizontal: 12,
    color: '#000'
  },
  txtTitle:{
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    textAlign :'center'
  },
  txtPlaceholder: {
    color: '#A69F9F'
  },
  ctnTextArea:{
    height: 80
  },
  txtArea:{
    textAlignVertical: 'top',
    paddingVertical: 12
  },
  ctnWrapper:{
    flex: 1,
    justifyContent :'center',
    alignItems :'center',
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  inputWrapper:{
    marginTop: 20
  },
  txtLabel:{
    fontSize: 15,
    color: '#000',
    fontWeight: '500'
  },
  txtTotal:{
    fontSize: 18,
    color: '#000',
    fontWeight: '800'
  },
  ctnQty:{
    flexDirection: 'row',
    marginTop: 20
  },
  mgRight:{
    marginRight: 40
  },
  ctnTotal:{
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent :'space-between'
  },ctnRowButton:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent :'center',
    alignItems: 'center',
  },
  btnOval:{
    borderRadius: 34 / 2,
    minWidth: 140
  },
  btnCancel:{
    backgroundColor: '#fff',
    marginLeft: 20,
    borderWidth: 1,
    borderColor: '#677800'
  },
  txtBtncancel:{
    color: '#000'
  },
  btnHeader:{
    height: 34,
    borderRadius: 12,
    backgroundColor: constants.colors.green,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 100
  },
  txtBtnHeader:{
    color :'#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  errorText:{
    color: 'red',
    fontSize: 12,
    marginTop:4
  }
});
