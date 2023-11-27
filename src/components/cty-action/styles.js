import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ctnRoot: {
    height: 24,
    borderRadius: 24 / 2,
    padding: 2,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems :'center',
    minWidth: 80
  },
  btnAction:{
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ctnAmount:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6
  }
});
