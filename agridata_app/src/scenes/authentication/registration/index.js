import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const Registration = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(200) : -180
      }>
      <SafeAreaView style={{backgroundColor: 'white'}}>
        <View>
          <TouchableOpacity
            style={{left: Mixins.scaleWidth(30), top: Mixins.scaleHeight(20)}}>
            <Icon name="arrow-back-outline" size={40} />
          </TouchableOpacity>
          <Image
            source={require('_assets/images/fruits.png')}
            style={{
              position: 'absolute',
              right: 0,
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(170),
              resizeMode: 'cover',
            }}
          />
        </View>
        <View>
          <Text
            style={[
              Typography.largestSize,
              {
                width: Mixins.scaleWidth(300),
                left: Mixins.scaleWidth(30),
                top: Mixins.scaleHeight(30),
              },
            ]}>
            CREATE
          </Text>
          <Text
            style={[
              Typography.largestSize,
              {
                width: Mixins.scaleWidth(300),
                left: Mixins.scaleWidth(30),
                top: Mixins.scaleHeight(20),
              },
            ]}>
            ACCOUNT
          </Text>
        </View>
        <View
          style={{top: Mixins.scaleHeight(30), left: Mixins.scaleWidth(30)}}>
          <Text style={[Typography.large]}>Begin your journey with us!</Text>
        </View>
        <View>
          <View
            style={{top: Mixins.scaleHeight(50), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}> Name</Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
          <View
            style={{top: Mixins.scaleHeight(70), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}> Username</Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
          <View
            style={{top: Mixins.scaleHeight(90), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}> Email Address</Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
          <View
            style={{top: Mixins.scaleHeight(110), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}> Password</Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: Mixins.scaleHeight(140),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(120),
              height: Mixins.scaleWidth(50),
              justifyContent: 'center',
              borderRadius: 10,
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 2,
              shadowRadius: 3,
              shadowColor: 'grey',
            }}>
            <View style={{flexDirection: 'row', left: Mixins.scaleWidth(20)}}>
              <Text style={[Typography.large]}>NEXT</Text>
              <View style={{marginLeft: Mixins.scaleWidth(20)}}>
                <Icon name="arrow-forward-outline" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(160)}}>
          <Text style={[Typography.small]}>
            By continuing, you agree to our{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: Mixins.scaleHeight(165),
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{borderBottomWidth: 1}}>
            <Text style={[Typography.small]}>Terms of Service</Text>
          </TouchableOpacity>
          <Text
            style={[
              Typography.small,
              {
                marginLeft: Mixins.scaleWidth(5),
                marginRight: Mixins.scaleWidth(5),
              },
            ]}>
            and
          </Text>
          <TouchableOpacity style={{borderBottomWidth: 1}}>
            <Text style={[Typography.small]}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(180)}}>
          <TouchableOpacity>
            <Text style={[Typography.welcome, {fontSize: 12}]}>
              Having any trouble?
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
