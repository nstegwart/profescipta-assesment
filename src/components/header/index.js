import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import constants from '../../shared/constants';
import { Entypo } from '@expo/vector-icons';

const Header = ({ title }) => {
  return (
    <View style={styles.ctnRoot}>
      <View style={styles.ctnRow}>
        <Image source={{ uri: constants.DUMMY_AVATAR }} style={styles.imgAvatar} />
        <TouchableOpacity>
          <Entypo name="menu" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.ctnTitle}>
        <Text style={styles.txtTitle}>
          {title || "Sales Order List"}
        </Text>
      </View>
    </View>
  );
};

export default Header;
