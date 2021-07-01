import React from 'react';
import {SafeAreaView, Text, View, Image, TouchableOpacity} from 'react-native';
import {scaleHeight} from '_styles';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  InvoiceButton,
  DataAnalyticsButton,
  MenuButton,
} from '_scenes/dashboard/components';
import Icon from 'react-native-vector-icons/Ionicons';

export const OwnerDashboard = props => {
  return (
    <SafeAreaView
      style={{
        BackgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        weight: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(30),
          left: Mixins.scaleWidth(30),
        }}>
        <MenuButton
          userType={props.user.role}
          updateAuthState={props.updateAuthState}
          navigation={props.navigation}></MenuButton>
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
        {props.user.retailerCompany.name}
      </Text>
      <Text style={[Typography.normal, {top: Mixins.scaleHeight(70)}]}>
        What would you like to do today
      </Text>
      <InvoiceButton top={90} navigation={props.navigation}></InvoiceButton>
      <DataAnalyticsButton
        top={90}
        navigation={props.navigation}></DataAnalyticsButton>
    </SafeAreaView>
  );
};
