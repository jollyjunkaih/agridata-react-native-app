import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaleHeight} from '_styles';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  MarketplaceButton,
  ChatButton,
  ToDoButton,
  InvoiceButton,
  MenuButton,
} from '_scenes/dashboard/components';
import Icon from 'react-native-vector-icons/Ionicons';

export const RetailManagerDashboard = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(30),
          left: Mixins.scaleWidth(30),
        }}>
        <MenuButton></MenuButton>
      </View>

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
        Company Name!
      </Text>
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(70)}]}>
        What would you like to do today
      </Text>
      <ChatButton top={90} navigation={props.navigation}></ChatButton>
      <ToDoButton top={90} navigation={props.navigation}></ToDoButton>
      <MarketplaceButton
        top={90}
        navigation={props.navigation}></MarketplaceButton>
    </SafeAreaView>
  );
};
