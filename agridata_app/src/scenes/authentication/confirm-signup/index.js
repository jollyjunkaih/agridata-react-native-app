import React, {useState} from 'react';
import {
  TextInput,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography, Spacing, Colors} from '_styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const ConfirmSignUp = ({navigation}) => {
  const [username, setPhone] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); //success modal
  const [modalVisible2, setModalVisible2] = useState(false); //error modal

  async function confirmSignUp() {
    try {
      const user = await Auth.confirmSignUp(username, authCode);
      console.log('✅ Code confirmed' + user);

      navigation.navigate('signin');
    } catch (error) {
      setError(true);
      setModalVisible2(true);
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
      setModalVisible(true);
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
          Send a code to your phone and verify it
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
              setModalVisible2(true);
            } else {
              resendConfirmationCode();
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
              setModalVisible2(true);
            } else {
              confirmSignUp();
            }
          }}>
          <Text style={[Typography.normal]}>VERIFY</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const SuccessModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <Image
          style={{
            width: wp(122),
            height: wp(120),
            left: wp(0),
            top: hp(40),
          }}
          source={require('_assets/images/Bad-Vege.png')}></Image>
        <Text style={styles.modalText}>Code was sent successfully,</Text>
        <TouchableOpacity
          style={[
            {
              borderRadius: 20,
              height: hp(30),
              width: wp(120),
              elevation: 2,
              top: hp(60),
              justifyContent: 'center',
              alignItems: 'center',
            },
            styles.buttonClose,
          ]}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Text style={[styles.textStyle, {bottom: hp(2)}]}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const UnsuccesfulModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible2}
      onRequestClose={() => {
        setModalVisible(!{modalVisible2});
      }}>
      <View
        style={{
          height: hp(640),
          width: wp(360),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: wp(300),
            height: hp(270),
            backgroundColor: 'lightyellow',
            borderRadius: 37,
            alignItems: 'center',
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          {username === '' ? (
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-SemiBold',
                //fontSize: rfv(14),
                width: wp(230),
                top: hp(30),
                textAlign: 'center',
              }}>
              Please enter your phone number
            </Text>
          ) : authCode == '' ? (
            <Text
              style={[
                {
                  width: wp(230),
                  top: hp(30),
                  textAlign: 'center',
                },
              ]}>
              Please enter your code
            </Text>
          ) : (
            <Text
              style={{
                color: 'black',
                fontFamily: 'Poppins-SemiBold',
                //fontSize: rfv(14),
                width: wp(230),
                top: hp(30),
                textAlign: 'center',
              }}>
              The code you typed in is incorrect. Please try again
            </Text>
          )}

          <View style={{top: hp(35)}}>
            <Icon name="warning" size={120} color="red" />
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 20,
              height: hp(30),
              width: wp(100),
              elevation: 2,
              bottom: hp(40),
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#2196F3',
            }}
            onPress={() => {
              setModalVisible2(false);
              setError(false);
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Bold',
                //fontSize: rfv(14),
              }}>
              AMEND
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
