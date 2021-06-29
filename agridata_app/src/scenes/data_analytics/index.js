import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {NavBar} from '_components';
import {scaleHeight} from '_styles';

export const DataAnalytics = props => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        alignItems: 'center',
        flex: 1,
      }}>
      <Text
        style={[
          Typography.header,
          {top: Mixins.scaleHeight(30), left: Mixins.scaleWidth(-90)},
        ]}>
        ANALYTICS
      </Text>
      <ScrollView>
        <Image
          style={{
            top: Mixins.scaleHeight(20),
            resizeMode: 'contain',
            height: Mixins.scaleHeight(250),
            width: Mixins.scaleWidth(330),
          }}
          source={require('_assets/images/expenses.png')}></Image>
        <Image
          style={{
            top: Mixins.scaleHeight(30),
            resizeMode: 'contain',
            height: Mixins.scaleHeight(250),
            width: Mixins.scaleWidth(330),
          }}
          source={require('_assets/images/price.png')}></Image>
        <Image
          style={{
            top: Mixins.scaleHeight(40),
            resizeMode: 'contain',
            height: Mixins.scaleHeight(320),
            width: Mixins.scaleWidth(330),
            marginBottom: Mixins.scaleHeight(60),
          }}
          source={require('_assets/images/supplier.png')}></Image>
      </ScrollView>
      <View style={{position: 'absolute', bottom: Mixins.scaleHeight(-30)}}>
        <NavBar navigation={props.navigation} />
      </View>
    </SafeAreaView>
  );
};
