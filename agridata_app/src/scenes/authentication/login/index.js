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
export const Login = props => {
  const [secure, setSecure] = useState(true);
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
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(200) : -180
      }>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          height: Mixins.scaleHeight(640),
          width: Mixins.scaleWidth(360),
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
            width: Mixins.scaleWidth(160),
            height: Mixins.scaleHeight(180),
            resizeMode: 'cover',
          }}
        />
        <View style={{top: Mixins.scaleHeight(30)}}>
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
              Welcome
            </Text>
            <Text
              style={[
                Typography.largestSize,
                {
                  width: Mixins.scaleWidth(300),
                  left: Mixins.scaleWidth(30),
                  top: Mixins.scaleHeight(10),
                },
              ]}>
              Back
            </Text>
          </View>
          <View
            style={{top: Mixins.scaleHeight(10), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.large]}>Login to your account now!</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              top: Mixins.scaleHeight(80),
              left: Mixins.scaleWidth(30),
            }}>
            <Text style={[Typography.placeholder]}>Phone Number / Email</Text>
            <TextInput
              keyboardType="default"
              placeholder="+60123456 or example@example.com"
              underlineColorAndroid="transparent"
              onChangeText={item => setEmail(item)}
              value={email}
              style={{
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(40),
                right: Mixins.scaleWidth(5),
                borderBottomColor: 'transparent',
                color: 'black',
              }}></TextInput>
            <View
              style={{
                bottom: Mixins.scaleHeight(10),
                width: Mixins.scaleWidth(290),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(80),
              left: Mixins.scaleWidth(30),
              height: Mixins.scaleWidth(70),
            }}>
            <Text style={[Typography.placeholder]}>Password</Text>
            <TextInput
              secureTextEntry={secure}
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={item => setPassword(item)}
              value={password}
              style={{
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(40),
                right: Mixins.scaleWidth(5),
                borderBottomColor: 'transparent',
                color: 'black',
              }}></TextInput>
            <View
              style={{
                bottom: Mixins.scaleHeight(10),
                width: Mixins.scaleWidth(290),
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
                left: Mixins.scaleWidth(270),
                position: 'absolute',
                bottom: Mixins.scaleWidth(20),
              }}>
              <Icon name="eye-outline" size={25}></Icon>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{top: Mixins.scaleHeight(70), left: Mixins.scaleWidth(210)}}>
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
        </View>
        <View
          style={{
            alignItems: 'center',
            top: Mixins.scaleHeight(100),
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

        <TouchableOpacity
          style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: Mixins.scaleHeight(70),
            alignSelf: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              marginBottom: Mixins.scaleHeight(10),
            }}>
            <Icon name="finger-print-outline" size={40} />
          </View>

          <Text style={[Typography.normal]}>Log In Using Fingerprint</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            alignItems: 'center',
            position: 'absolute',
            bottom: Mixins.scaleHeight(35),
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
