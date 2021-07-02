import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
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
      <TextInput
        value={props.searchValue}
        onChangeText={item => props.setSearchValue(item)}
        style={{
          position: 'absolute',
          width: Mixins.scaleWidth(200),
        }}></TextInput>
      <View style={{position: 'absolute', left: Mixins.scaleWidth(10)}}>
        <Icon
          name="search"
          size={Mixins.scaleWidth(25)}
          color={Colors.GRAY_DARK}
        />
      </View>
      <TouchableOpacity
        style={{position: 'absolute', right: 30}}
        onPress={() => {
          if (props.searchValue != '') {
            props.setSearchPressed(true);
          }
        }}>
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export const ChatButton = props => {
  return (
    <TouchableOpacity>
      <Icon name="chatbox-outline" size={props.size}></Icon>
    </TouchableOpacity>
  );
};
