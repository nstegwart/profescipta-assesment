import { StyleSheet } from 'react-native';
import constants from '../../shared/constants';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  ctnContent:{
    backgroundColor: '#EEEEEE',
    marginTop :-20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    overflow: 'hidden'
  },
  ctnHeader:{
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 12
  },
  ctnRowHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  txtTitleHeader:{
    fontSize: 20,
    color: '#000',
    fontWeight: '500'
  },
  txtTotalItems:{
    fontSize: 12,
    color: '#000',
    fontWeight: '500'
  },
  btnHeader:{
    height: 34,
    borderRadius: 12,
    backgroundColor: constants.colors.green,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    minWidth: 100
  },
  txtBtnHeader:{
    color :'#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  ctnScroll:{
    paddingBottom: 90,
  }
});
