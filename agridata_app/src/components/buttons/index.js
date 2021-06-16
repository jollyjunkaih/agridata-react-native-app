import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Mixins, Colors} from '_styles';

export const CloseButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.setModal(false)}
      style={{
        height: Mixins.scaleWidth(30),
        width: Mixins.scaleWidth(30),
        backgroundColor: Colors.PALE_GREEN,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon name="close" size={Mixins.scaleWidth(20)}></Icon>
    </TouchableOpacity>
  );
};
