import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';

export const MarketplaceButton = props => (
  <TouchableOpacity
    onPress={() => console.log('marketplace')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/groceries-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      marketplace
    </Text>
  </TouchableOpacity>
);

export const ChatButton = props => (
  <TouchableOpacity
    onPress={() => console.log('chat')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/chat-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      chats
    </Text>
  </TouchableOpacity>
);

export const InvoiceButton = props => (
  <TouchableOpacity
    onPress={() => console.log('invoice')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/planner-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      invoices
    </Text>
  </TouchableOpacity>
);

export const ToDoButton = props => (
  <TouchableOpacity
    onPress={() => console.log('calendar')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleWidth(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/calendar-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      to do
    </Text>
  </TouchableOpacity>
);

export const DataAnalyticsButton = props => (
  <TouchableOpacity
    onPress={() => console.log('data')}
    style={{
      top: Mixins.scaleHeight(props.top),
      width: Mixins.scaleHeight(280),
      height: Mixins.scaleHeight(80),
      justifyContent: 'center',
      margin: 10,
      alignItems: 'center',
      borderRadius: 10,
    }}>
    <Image
      style={{
        resizeMode: 'cover',
        width: Mixins.scaleWidth(280),
        height: Mixins.scaleHeight(80),
        position: 'absolute',
        borderRadius: 10,
        opacity: 0.4,
      }}
      source={require('_assets/images/data-resized.png')}></Image>
    <Text style={[Typography.welcome, {textTransform: 'uppercase'}]}>
      Data Analytics
    </Text>
  </TouchableOpacity>
);
