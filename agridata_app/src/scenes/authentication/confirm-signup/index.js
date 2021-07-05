import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography, Spacing, Colors} from '_styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Strings from '_utils';

export const ConfirmSignUp = props => {
  const [username, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [error, setError] = useState(false);
  const [successfulModal, setSuccessfulModal] = useState(false); //success modal
  const [unsuccessfulModal, setUnsuccessfulModal] = useState(false); //error modal
  const [resendCode, setResendCode] = useState(false);
  const [unsuccessfulModal2, setUnsuccessfulModal2] = useState(false);
  const [wrongCode, setWrongCode] = useState(false);

  async function confirmSignUp() {
    try {
      const user = await Auth.confirmSignUp(username, authCode);
      console.log('✅ Code confirmed' + user);
      setTimeout(() => {
        setSuccessfulModal(true);
      }, 3000);
      navigation.navigate('signin');
    } catch (error) {
      setError(true);
      setWrongCode(true);
      console.log(
        '❌ Verification code does not match. Please enter a valid verification code.',
        error.code,
      );
    }
  }

  async function resendConfirmationCode() {
    try {
      await Auth.resendSignUp(username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }

  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          position: 'absolute',
          right: wp('10%'),
          top: hp('5%'),
        }}>
        <Image
          style={{
            resizeMode: 'contain',
            height: hp('10%'),
            width: wp('20%'),
          }}
          source={require('_assets/images/agridata.png')}
        />
      </View>
      <View
        style={{
          width: wp('100%'),
          height: hp('80%'),
          top: hp('15%'),
          borderRadius: 40,
          backgroundColor: '#CDDCF3',
          alignItems: 'center',
        }}>
        <Text
          style={[
            Typography.header,
            {
              top: hp('3%'),
              color: '#444443',
            },
          ]}>
          VERIFICATION
        </Text>
        <Text
          style={[
            Typography.normal,
            {
              top: hp('5%'),
              color: '#444443',
            },
          ]}>
          Send a code to your phone to verify it.
        </Text>
        <View style={{top: hp('10%')}}>
          <Text style={[Typography.small]}>Phone Number</Text>
          <TextInput
            style={{
              width: wp('80%'),
              height: hp('3%'),
            }}
            onChangeText={text => setPhone(text)}
            placeholder="##########"
          />
          <View
            style={{
              width: wp('80%'),
              borderBottomWidth: 1,
              borderColor: Colors.GRAY_DARK,
            }}></View>
        </View>
        <View style={{top: hp('12%')}}>
          <Text style={[Typography.small]}>Authentication Code</Text>
          <TextInput
            style={{
              width: wp('80%'),
              height: hp('3%'),
            }}
            onChangeText={text => setAuthCode(text)}
            placeholder="######"
          />
          <View
            style={{
              width: wp('80%'),
              borderBottomWidth: 1,
              borderColor: Colors.GRAY_DARK,
            }}></View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              top: hp('20%'),
              width: wp('40%'),
              height: hp('6%'),
              backgroundColor: 'white',
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              if (username == '') {
                setUnsuccessfulModal2(true);
              } else {
                resendConfirmationCode();
                setResendCode(true);
              }
            }}>
            <Text style={[Typography.normal]}>RESEND CODE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              top: hp('25%'),
              width: wp('40%'),
              height: hp('6%'),
              backgroundColor: 'white',
              borderRadius: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => {
              if (authCode == '' || username == '') {
                setUnsuccessfulModal(true);
              } else {
                confirmSignUp();
              }
            }}>
            <Text style={[Typography.normal]}>VERIFY</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        isVisible={unsuccessfulModal}
        onBackdropPress={() => setUnsuccessfulModal(false)}>
        <UnsuccessfulModal setUnsuccessfulModal={setUnsuccessfulModal} />
      </Modal>
      <Modal
        isVisible={unsuccessfulModal2}
        onBackdropPress={() => setUnsuccessfulModal2(false)}>
        <UnsuccessfulModal2 setUnsuccessfulModal2={setUnsuccessfulModal2} />
      </Modal>
      <Modal
        isVisible={successfulModal}
        onBackdropPress={() => setSuccessfulModal(false)}>
        <SuccessfulModal setSuccessfulModal={setSuccessfulModal} />
      </Modal>
      <Modal
        isVisible={resendCode}
        onBackdropPress={() => setResendCode(false)}>
        <ResendCodeModal setResendCode={setResendCode} />
      </Modal>
      <Modal isVisible={wrongCode} onBackdropPress={() => setWrongCode(false)}>
        <WrongCode setWrongCode={setWrongCode} />
      </Modal>
    </SafeAreaView>
  );
};

export const SuccessfulModal = props => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp('40%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.large,
            {top: hp('4%'), width: wp('70%'), textAlign: 'center'},
          ]}>
          Phone Successfully Verified
        </Text>

        <View style={{top: hp('10%'), justifyContent: 'center'}}>
          <Icon name="checkmark-done" color={'green'} size={wp('40%')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const UnsuccessfulModal2 = props => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp('40%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.large,
            {top: hp('4%'), width: wp('70%'), textAlign: 'center'},
          ]}>
          Please Enter Phone Number!
        </Text>

        <View style={{top: hp('5%'), justifyContent: 'center'}}>
          <Icon name="warning" color={'red'} size={wp('40%')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const UnsuccessfulModal = props => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp('40%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.large,
            {top: hp('4%'), width: wp('70%'), textAlign: 'center'},
          ]}>
          Please Enter Both Phone Number and Authentication Code!
        </Text>

        <View style={{top: hp('5%'), justifyContent: 'center'}}>
          <Icon name="warning" color={'red'} size={wp('40%')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const ResendCodeModal = props => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp('45%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.header,
            {top: hp('4%'), width: wp('70%'), textAlign: 'center'},
          ]}>
          Code Sent!
        </Text>
        <View style={{top: hp('10%'), justifyContent: 'center'}}>
          <Icon name="checkmark-done" color={'green'} size={wp('40%')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export const WrongCode = props => {
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          height: hp('40%'),
          width: wp('90%'),
          backgroundColor: 'white',
          borderRadius: 20,
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Text
          style={[
            Typography.large,
            {top: hp('4%'), width: wp('70%'), textAlign: 'center'},
          ]}>
          Wrong Authentication Code! Please Re-enter Code!
        </Text>

        <View style={{top: hp('5%'), justifyContent: 'center'}}>
          <Icon name="warning" color={'red'} size={wp('40%')} />
        </View>
      </View>
    </SafeAreaView>
  );
};
