import { StyleSheet } from 'react-native';
import constants from '../../shared/constants';

export default StyleSheet.create({
  ctnRoot: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  ctnContent:{
    flex: 1,
    backgroundColor: '#EEEEEE',
    marginTop :-20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'relative'
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
    minWidth: 100
  },
  txtBtnHeader:{
    color :'#fff',
    fontSize: 14,
    fontWeight: '500'
  },
  ctnScroll:{
    paddingBottom: 190
  },
  ctnSummary:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 30,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  txtTitleSummary:{
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    marginBottom: 12
  },
  ctnRowSummary:{
    flexDirection: 'row',
    justifyContent :'space-between',
    alignItems: 'center'
  },
  ctnRowButton:{
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
  }
});
