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
import DropDownPicker from 'react-native-dropdown-picker';
import {Auth} from 'aws-amplify';

export const Verification = props => {
  const signOut = async () => {
    try {
      await Auth.signOut();
      props.updateAuthState('loggedOut');
      console.log('Logged Out');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(200) : -180
      }>
      <SafeAreaView>
        <View style={{top: Mixins.scaleHeight(60), alignItems: 'center'}}>
          <Image
            source={require('_assets/images/verifycard.png')}
            style={{
              resizeMode: 'contain',
              width: Mixins.scaleWidth(170),
              height: Mixins.scaleHeight(120),
            }}
          />
        </View>

        <View
          style={{
            top: Mixins.scaleHeight(20),
            alignItems: 'center',
            zIndex: 20,

            height: Mixins.scaleHeight(380),
          }}>
          <Text
            style={[
              Typography.welcome,
              {
                fontSize: 25,
                top: Mixins.scaleHeight(50),
                textAlign: 'center',
              },
            ]}>
            YOUR ACCOUNT IS
          </Text>
          <Text
            style={[
              Typography.welcome,
              {
                fontSize: 25,

                top: Mixins.scaleHeight(40),
                textAlign: 'center',
              },
            ]}>
            BEING VERIFIED
          </Text>
          <View
            style={{
              top: Mixins.scaleHeight(70),
              width: Mixins.scaleWidth(270),
              height: Mixins.scaleHeight(100),
            }}>
            <Text style={[Typography.medium, {textAlign: 'center'}]}>
              Hang in there! It might take some time to verify your account.
            </Text>
            <View
              style={{
                top: Mixins.scaleHeight(20),
              }}>
              <Text style={[Typography.medium, {textAlign: 'center'}]}>
                For the meantime, you can try updating your company information.
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('companyprofile')}
            style={{
              alignItems: 'center',
              top: Mixins.scaleHeight(70),
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(150),
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
              zIndex: 22,
              elevation: 2,
            }}>
            <Text style={[Typography.normal]}>UPDATE COMPANY</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => signOut()}
            style={{
              alignItems: 'center',
              top: Mixins.scaleHeight(85),
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(150),
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
              elevation: 2,
              zIndex: 22,
            }}>
            <Text style={[Typography.normal]}>LOG OUT</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            bottom: Mixins.scaleHeight(-120),
            right: Mixins.scaleWidth(0),
            position: 'absolute',
          }}>
          <Image
            source={require('_assets/images/fruits1.png')}
            style={{
              resizeMode: 'cover',
              width: Mixins.scaleWidth(230),
              height: Mixins.scaleHeight(230),
            }}
          />
        </View>
        <View
          style={{
            bottom: Mixins.scaleHeight(-310),
            right: Mixins.scaleWidth(100),
            position: 'absolute',
            transform: [{scaleY: -1}],
          }}>
          <Image
            source={require('_assets/images/fruits3.png')}
            style={{
              resizeMode: 'cover',
              width: Mixins.scaleWidth(300),
              height: Mixins.scaleHeight(300),
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
