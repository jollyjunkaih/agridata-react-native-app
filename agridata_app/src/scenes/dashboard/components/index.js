import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export const Button = props => (
  <TouchableOpacity
    style={{
      top: Mixins.scaleHeight(props.top),
      backgroundColor: 'red',
      width: Mixins.scaleWidth(306),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
      elevation: 3,
    }}>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
