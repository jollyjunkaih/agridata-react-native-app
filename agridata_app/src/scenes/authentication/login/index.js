import React, {useState} from 'react';
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
export const Login = props => {
  const [secure, setSecure] = useState(true);
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
                top: Mixins.scaleHeight(50),
              },
            ]}>
            WELCOME
          </Text>
          <Text
            style={[
              Typography.largestSize,
              {
                width: Mixins.scaleWidth(300),
                left: Mixins.scaleWidth(30),
                top: Mixins.scaleHeight(40),
              },
            ]}>
            BACK!
          </Text>
        </View>
        <View
          style={{top: Mixins.scaleHeight(40), left: Mixins.scaleWidth(30)}}>
          <Text style={[Typography.large]}>Begin your journey with us!</Text>
        </View>
        <View>
          <View
            style={{top: Mixins.scaleHeight(80), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}>
              Username/ Email Address
            </Text>
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
            style={{top: Mixins.scaleHeight(100), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder]}> Password</Text>
            <View style={{flexDirection: 'row', right: Mixins.scaleWidth(20)}}>
              <TouchableOpacity
                onPress={() => {
                  if (secure) {
                    setSecure(false);
                  } else {
                    setSecure(true);
                  }
                }}
                style={{left: Mixins.scaleWidth(270)}}>
                <Icon name="eye-outline" size={25}></Icon>
              </TouchableOpacity>

              <TextInput
                secureTextEntry={secure}
                keyboardType="default"
                placeholder=""
                style={{
                  marginTop: 8,
                  borderBottomWidth: 0.5,
                  borderBottomColor: 'grey',
                  width: Mixins.scaleWidth(220),
                  height: Mixins.scaleHeight(20),
                }}></TextInput>
              <View
                style={{
                  marginTop: 8,
                  borderBottomWidth: 0.3,
                  borderBottomColor: 'black',
                  width: Mixins.scaleWidth(60),
                  height: Mixins.scaleHeight(20),
                }}></View>
            </View>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(110),
              left: Mixins.scaleWidth(210),
            }}>
            <TouchableOpacity>
              <Text style={[Typography.welcome, {fontSize: 12}]}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
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
              width: Mixins.scaleWidth(140),
              height: Mixins.scaleWidth(40),
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
              <Text style={[Typography.large]}>LOG IN</Text>
              <View style={{marginLeft: Mixins.scaleWidth(20)}}>
                <Icon name="arrow-forward-outline" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(170)}}>
          <TouchableOpacity>
            <View
              style={{
                alignItems: 'center',
                marginBottom: Mixins.scaleHeight(10),
              }}>
              <Icon name="finger-print-outline" size={40} />
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: 'black',
                width: Mixins.scaleWidth(180),
              }}>
              <Text style={[Typography.normal]}>Log In Using Fingerprint</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(220)}}>
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
