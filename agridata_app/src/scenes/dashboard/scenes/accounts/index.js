import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaleHeight} from '_styles';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {Button} from '_scenes/dashboard/components';
import Icon from 'react-native-vector-icons/Ionicons';

export const AccountsDashboard = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          right: Mixins.scaleWidth(30),
          top: Mixins.scaleHeight(30),
        }}>
        <Icon name="settings-outline" size={Mixins.scaleWidth(25)}></Icon>
      </TouchableOpacity>

      <Image
        style={{
          top: Mixins.scaleHeight(40),
          resizeMode: 'contain',
          width: Mixins.scaleWidth(90),
          height: Mixins.scaleHeight(70),
        }}
        source={require('_assets/images/agridata.png')}
      />
      <Text style={[Typography.welcome, {top: Mixins.scaleHeight(60)}]}>
        Welcome Back,
      </Text>
      <Text
        style={[
          Typography.largestSize,
          {
            top: Mixins.scaleHeight(50),
            color: '#8EAB3D',
            textTransform: 'uppercase',
          },
        ]}>
        {props.company}!
      </Text>
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(70)}]}>
        What would you like to do today
      </Text>
      <Button text="Chats" top={90}></Button>
      <Button text="Invoices" top={90}></Button>
      <Button text="Calendar" top={90}></Button>
    </SafeAreaView>
  );
};