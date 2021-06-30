import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {CloseButton, AddButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';
import {DismissKeyboardView} from '_components';

export const ForgetPassword = props => {
  const [changePassword, setChangePassword] = useState(false);
  const [phoneNumberModal, setPhoneNumberModal] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(70) : -180
      }>
      <SafeAreaView>
        <DismissKeyboardView>
          <View
            style={{
              position: 'absolute',
              top: Mixins.scaleHeight(-10),
              left: Mixins.scaleWidth(285),
              zIndex: 1000,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <CloseButton setModal={props.setForgetPassword} />
          </View>

          <View
            style={{
              height: Mixins.scaleHeight(200),
              width: Mixins.scaleWidth(280),
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  textAlign: 'center',
                  margin: Mixins.scaleWidth(20),
                  top: Mixins.scaleHeight(10),
                },
              ]}>
              Enter Phone Number to Reset Password
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: Mixins.scaleWidth(150),
                  top: Mixins.scaleHeight(20),
                  borderBottomColor: Colors.GRAY_DARK,
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={value => {
                    setSearch(value);
                  }}
                  placeholder="Phone Number"
                  style={{height: Mixins.scaleHeight(30)}}></TextInput>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => [
                search == ''
                  ? setPhoneNumberModal(true)
                  : setChangePassword(true),
              ]}
              style={{
                top: Mixins.scaleHeight(50),
                width: Mixins.scaleWidth(100),
                height: Mixins.scaleHeight(30),
                backgroundColor: Colors.LIGHT_BLUE,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={phoneNumberModal}
            onBackdropPress={() => setPhoneNumberModal(false)}>
            <PhoneNumberModal setPhoneNumberModal={setPhoneNumberModal} />
          </Modal>
          <Modal isVisible={changePassword}>
            <ChangePassword
              setChangePassword={setChangePassword}
              setForgetPassword={props.setForgetPassword}
            />
          </Modal>
        </DismissKeyboardView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const ChangePassword = props => {
  const [passwordCodeModal, setPasswordCodeModal] = useState(false);
  const [resendCodeModal, setResendCodeModal] = useState(false);
  const [resendCodeSuccessModal, setResendCodeSuccessModal] = useState(false);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(70) : -180
      }>
      <SafeAreaView>
        <DismissKeyboardView>
          <View
            style={{
              position: 'absolute',
              top: Mixins.scaleHeight(-10),
              left: Mixins.scaleWidth(295),
              zIndex: 1000,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}>
            <CloseButton setModal={props.setChangePassword} />
          </View>

          <View
            style={{
              height: Mixins.scaleHeight(250),
              width: Mixins.scaleWidth(300),
              backgroundColor: 'white',
              borderRadius: 20,
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={[
                Typography.normal,
                {
                  textAlign: 'center',
                  margin: Mixins.scaleWidth(20),
                  top: Mixins.scaleHeight(10),
                },
              ]}>
              Reset password by typing in your new password and auth code
            </Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: Mixins.scaleWidth(150),
                  top: Mixins.scaleHeight(10),
                  borderBottomColor: Colors.GRAY_DARK,
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={value => {
                    setCode(value);
                  }}
                  placeholder="Auth Code"
                  style={{height: Mixins.scaleHeight(30)}}></TextInput>
              </View>
              <View
                style={{
                  alignItems: 'flex-start',
                  width: Mixins.scaleWidth(150),
                  top: Mixins.scaleHeight(30),
                  borderBottomColor: Colors.GRAY_DARK,
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  onChangeText={value => {
                    setPassword(value);
                  }}
                  placeholder="New Password"
                  style={{height: Mixins.scaleHeight(30)}}></TextInput>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setResendCodeModal(true)}
              style={{top: Mixins.scaleHeight(50)}}>
              <Text
                style={[Typography.small, {textDecorationLine: 'underline'}]}>
                Re-send Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => [
                code == '' || password == ''
                  ? setPasswordCodeModal(true)
                  : setPasswordCodeModal(false),
                code != '' && password != ''
                  ? setResendCodeSuccessModal(true)
                  : setResendCodeSuccessModal(false),
              ]}
              style={{top: Mixins.scaleHeight(70)}}>
              <Text
                style={[Typography.small, {textDecorationLine: 'underline'}]}>
                Change Password
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={passwordCodeModal}
            onBackdropPress={() => setPasswordCodeModal(false)}>
            <PasswordCodeModal setPasswordCodeModal={setPasswordCodeModal} />
          </Modal>
          <Modal
            isVisible={resendCodeModal}
            onBackdropPress={() => setResendCodeModal(false)}>
            <ResendCodeModal setResendCodeModal={setResendCodeModal} />
          </Modal>
          <Modal
            isVisible={resendCodeSuccessModal}
            onBackdropPress={() => setResendCodeSuccessModal(false)}>
            <ResendCodeSuccessModal
              setResendCodeSuccessModal={setResendCodeSuccessModal}
              setForgetPassword={props.setForgetPassword}
            />
          </Modal>
        </DismissKeyboardView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export const PhoneNumberModal = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: Mixins.scaleHeight(220),
          width: Mixins.scaleWidth(300),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text style={[Typography.normal, {top: Mixins.scaleHeight(20)}]}>
          Please Enter Your Phone Number!
        </Text>

        <View style={{top: Mixins.scaleHeight(50), justifyContent: 'center'}}>
          <Icon name="warning" color={'red'} size={Mixins.scaleWidth(120)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const PasswordCodeModal = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: Mixins.scaleHeight(260),
          width: Mixins.scaleWidth(320),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.normal,
            {top: Mixins.scaleHeight(20), textAlign: 'center'},
          ]}>
          Please Enter Both Authentification Code and New Password!
        </Text>
        <View style={{top: Mixins.scaleHeight(50), justifyContent: 'center'}}>
          <Icon name="warning" color={'red'} size={Mixins.scaleWidth(120)} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const ResendCodeSuccessModal = props => {
  return (
    <SafeAreaView>
      <DismissKeyboardView>
        <View
          style={{
            height: Mixins.scaleHeight(270),
            width: Mixins.scaleWidth(320),
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={[
              Typography.header,
              {top: Mixins.scaleHeight(20), textAlign: 'center'},
            ]}>
            Password Successfuly Changed!
          </Text>
          <View style={{top: Mixins.scaleHeight(30), justifyContent: 'center'}}>
            <Icon
              name="checkmark-done"
              color={'green'}
              size={Mixins.scaleWidth(120)}
            />
          </View>
          <TouchableOpacity
            onPress={() => props.setForgetPassword(false)}
            style={{
              top: Mixins.scaleHeight(40),
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(100),
              height: Mixins.scaleHeight(25),
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              borderRadius: 10,
            }}>
            <Text>Login Screen</Text>
          </TouchableOpacity>
        </View>
      </DismissKeyboardView>
    </SafeAreaView>
  );
};

export const ResendCodeModal = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          height: Mixins.scaleHeight(260),
          width: Mixins.scaleWidth(320),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.header,
            {top: Mixins.scaleHeight(20), textAlign: 'center'},
          ]}>
          Code Sent!
        </Text>
        <View style={{top: Mixins.scaleHeight(50), justifyContent: 'center'}}>
          <Icon
            name="checkmark-done"
            color={'green'}
            size={Mixins.scaleWidth(120)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
