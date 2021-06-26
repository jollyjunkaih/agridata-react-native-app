import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {
  MarketplaceButton,
  ChatButton,
  ToDoButton,
  InvoiceButton,
  MenuButton,
} from '_scenes/dashboard/components';
import Strings from '_utils';

export const AccountsDashboard = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: Mixins.scaleHeight(640),
        width: Mixins.scaleWidth(360),
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          top: Mixins.scaleHeight(30),
          left: Mixins.scaleWidth(30),
        }}>
        <MenuButton navigation={props.navigation}></MenuButton>
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
        {Strings.welcome}
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
        {Strings.whatToDo}
      </Text>
      <ChatButton top={90} navigation={props.navigation}></ChatButton>
      <ToDoButton top={90} navigation={props.navigation}></ToDoButton>
      <InvoiceButton top={90} navigation={props.navigation}></InvoiceButton>
    </SafeAreaView>
  );
};
