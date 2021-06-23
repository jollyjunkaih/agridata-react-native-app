import React, {useState} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {ChatList} from './components';
import {Searchbar} from './components';
import {NavBar, BackButton} from '_components';

export const Inbox = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <Text style={[Typography.header, {top: Mixins.scaleHeight(30)}]}>
        Inbox
      </Text>
      <Text
        style={[
          Typography.normal,
          {color: Colors.GRAY_DARK, top: Mixins.scaleHeight(25)},
        ]}>
        5 New Messages
      </Text>
      <View
        style={{
          top: Mixins.scaleHeight(30),
          width: Mixins.scaleWidth(360),
          borderBottomWidth: 1,
          height: 0,
          borderColor: Colors.GRAY_MEDIUM,
        }}></View>
      <View style={{top: Mixins.scaleHeight(40)}}>
        <Searchbar />
      </View>
      <View
        style={{
          height: Mixins.scaleHeight(420),
          width: Mixins.scaleWidth(340),
          top: Mixins.scaleHeight(60),
        }}>
        <ChatList chatList={items} navigation={props.navigation} />
      </View>
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-10)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};

const items = [
  {name: 'test'},
  {name: 'test2'},
  {name: 'test'},
  {name: 'test2'},
  {name: 'test'},
  {name: 'test2'},
  {name: 'test'},
  {name: 'test2'},
];
