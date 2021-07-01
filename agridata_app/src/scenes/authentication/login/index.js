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
import {BackButton} from '_components';
import {Auth} from 'aws-amplify';
import {DismissKeyboardView} from '_components';
import {ForgetPassword} from './components';
import Modal from 'react-native-modal';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Login = props => {
  const [secure, setSecure] = useState(true);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = async () => {
    try {
      const user = await Auth.signIn(email, password);
      console.log('Successful sign in');
      props.updateUserID(user.attributes.sub);
      props.setUserAttributes(user.attributes);
    } catch (error) {
      console.log('Error signing in...', error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp('-40%') : hp('-30%%')}>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <View
          style={{
            position: 'absolute',
            top: Spacing.BackButtonTop,
            left: Spacing.BackButtonLeft,
          }}>
          <BackButton navigation={props.navigation} />
        </View>
        <Image
          source={require('_assets/images/fruits.png')}
          style={{
            position: 'absolute',
            right: 0,
            width: wp('50%'),
            height: hp('30%'),
            resizeMode: 'cover',
          }}
        />
        <View style={{top: hp('5%')}}>
          <View>
            <Text
              style={[
                Typography.largestSize,
                {
                  width: wp('80%'),
                  left: wp('8%'),
                  top: hp('4%'),
                },
              ]}>
              Welcome
            </Text>
            <Text
              style={[
                Typography.largestSize,
                {
                  width: wp('50%'),
                  left: wp('8%'),
                  top: hp('2%'),
                },
              ]}>
              Back
            </Text>
          </View>
          <View style={{top: hp('3%'), left: wp('8%')}}>
            <Text style={[Typography.large]}>Login to your account now!</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              top: hp('12%'),
              left: wp('8%'),
            }}>
            <Text style={[Typography.placeholder]}>Phone Number / Email</Text>
            <TextInput
              keyboardType="default"
              placeholder="+60123456 or example@example.com"
              underlineColorAndroid="transparent"
              onChangeText={item => setEmail(item)}
              value={email}
              style={{
                width: wp('80%'),
                height: hp('7%'),
              }}></TextInput>
            <View
              style={{
                width: wp('85%'),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>
          <View
            style={{
              top: hp('14%'),
              left: wp('8%'),
            }}>
            <Text style={[Typography.placeholder]}>Password</Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={secure}
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={item => setPassword(item)}
              value={password}
              style={{
                width: wp('50%'),
                height: hp('7%'),
              }}></TextInput>
            <View
              style={{
                width: wp('85%'),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
            <TouchableOpacity
              onPress={() => {
                if (secure) {
                  setSecure(false);
                } else {
                  setSecure(true);
                }
              }}
              style={{
                right: wp('15%'),
                position: 'absolute',
                bottom: hp('2%'),
              }}>
              <Icon name="eye-outline" size={wp('6%')}></Icon>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => setForgetPassword(true)}
            style={{top: hp('15%'), left: wp('63%')}}>
            <Text
              style={[
                Typography.welcome,
                {
                  fontSize: 12,
                },
              ]}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
          <Modal isVisible={forgetPassword}>
            <ForgetPassword setForgetPassword={setForgetPassword} />
          </Modal>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: hp('25%'),
          }}>
          <TouchableOpacity
            onPress={async () => {
              if (password == '' || email == '') {
                console.log('empty input');
              } else {
                const user = await signIn();
              }
            }}
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: wp('40%'),
              height: hp('5%'),
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
            <View style={{flexDirection: 'row', left: wp('7%')}}>
              <Text style={[Typography.large]}>LOG IN</Text>
              <View style={{left: wp('8%')}}>
                <Icon name="arrow-forward-outline" size={wp('6%')} />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: hp('13%'),
            alignSelf: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: hp('3%'),
            }}>
            <Icon name="finger-print-outline" size={wp('12%')} />
          </View>

          <Text style={[Typography.normal]}>Log In Using Fingerprint</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: hp('6%'),
            alignSelf: 'center',
          }}>
          <Text style={[Typography.welcome, {fontSize: 12}]}>
            Having any trouble?
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
