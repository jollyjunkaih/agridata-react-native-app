import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  ToDoButton,
  MenuButton,
  DataAnalyticsButton,
  ChatButton,
  MarketplaceButton,
  InvoiceButton,
} from '_scenes/dashboard/components';

export const GeneralManagerDashboard = props => {
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
        <MenuButton
          navigation={props.navigation}
          updateAuthState={props.updateAuthState}
          userType={'general-manager'}></MenuButton>
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
      <View
        style={{height: Mixins.scaleHeight(300), top: Mixins.scaleHeight(100)}}>
        <ScrollView>
          <ToDoButton top={0} navigation={props.navigation}></ToDoButton>
          <MarketplaceButton
            top={0}
            navigation={props.navigation}></MarketplaceButton>
          <DataAnalyticsButton
            top={0}
            navigation={props.navigation}></DataAnalyticsButton>
          <InvoiceButton top={0} navigation={props.navigation}></InvoiceButton>
          <ChatButton top={0} navigation={props.navigation}></ChatButton>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
