import { StyleSheet } from 'react-native';
import constants from '../../shared/constants';

export default StyleSheet.create({
  ctnRoot: {
    backgroundColor: constants.colors.green,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40
  },
  ctnRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  imgAvatar:{
    width: 48,
    height: 48,
    resizeMode: 'contain',
    borderRadius: 48 / 2,
    overflow: 'hidden'
  },
  ctnTitle:{
    marginTop: 24
  },
  txtTitle:{
    color: '#fff',
    fontSize: 26,
    fontWeight: '600'
  }
});
