import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const Searchbar = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_MEDIUM,
        width: Mixins.scaleWidth(310),
        height: Mixins.scaleHeight(35),
        borderRadius: 30,
        elevation: 2,
        justifyContent: 'center',
      }}>
      {/* Add searchable dropdown */}
      <TextInput></TextInput>
      <View style={{position: 'absolute', left: Mixins.scaleWidth(10)}}>
        <Icon
          name="search"
          size={Mixins.scaleWidth(25)}
          color={Colors.GRAY_DARK}
        />
      </View>
    </View>
  );
};
