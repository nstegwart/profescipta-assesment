import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ctnRoot: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
    marginHorizontal: 20,
    marginTop: 8,
    marginBottom: 12,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16
  },
  ctnItem:{
    flex: 1,
    paddingHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtItem:{
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginBottom: 10
  },
  ctnRow:{
    flexDirection: 'row'
  },
  txtPrice:{
    color: '#000'
  },
  btnAction:{
    paddingHorizontal: 6
  },
  ctnAction:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});
