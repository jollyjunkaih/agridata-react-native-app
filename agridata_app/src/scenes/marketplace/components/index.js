import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {DismissKeyboardView} from '_components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Searchbar = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_MEDIUM,
        width: wp('90%'),
        height: hp('5%'),
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
          height: hp('3%'),
          left: wp('13%'),
        }}></TextInput>

      <View style={{position: 'absolute', left: wp('5%')}}>
        <Icon name="search" size={wp('7%')} color={Colors.GRAY_DARK} />
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: hp('1.5%'),
          left: wp('70%'),
        }}
        onPress={() => {
          if (props.searchValue != '') {
            props.setSearchPressed(true);
          }
        }}>
        <Text style={[Typography.small]}>Search</Text>
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
