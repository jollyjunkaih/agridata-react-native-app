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
import {
  CloseButton,
  AddButton,
  SuccessfulModal,
  UnsuccessfulModal,
} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Modal from 'react-native-modal';
import {Rating} from 'react-native-ratings';
import {ChatButton} from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {SuccesfulChangesModal} from '_components/modals';
import {DismissKeyboardView} from '_components';
import Strings from '_utils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//modal issues
export const AddEmployeeButton = props => {
  const [addEmployeeButtonModal, setAddEmployeeButtonModal] = useState(false);
  const [succesfulChangesModal, setSuccesfulChangesModal] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setAddEmployeeButtonModal(true)}
      style={{
        alignItems: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: wp('75%'),
        left: wp('5%'),
        bottom: hp('2%'),
      }}>
      <Icon name="add-circle-outline" size={wp('5.5%')} />
      <Text
        style={[Typography.normal, {left: wp('4%'), color: Colors.LIME_GREEN}]}>
        {Strings.addNewTeamMember}
      </Text>

      <Modal
        animationIn="fadeInLeft"
        animationOut="fadeOutLeft"
        isVisible={addEmployeeButtonModal}>
        <AddEmployeeButtonModal
          setAddEmployeeButtonModal={setAddEmployeeButtonModal}
          navigation={props.navigation}
          setSuccesfulChangesModal={setSuccesfulChangesModal}
        />
      </Modal>
      <Modal
        isVisible={succesfulChangesModal}
        onBackdropPress={() => setSuccesfulChangesModal(false)}>
        <SuccesfulChangesModal
          setSuccesfulChangesModal={setSuccesfulChangesModal}
          navigation={props.navigation}
        />
      </Modal>
    </TouchableOpacity>
  );
};

export const AddEmployeeButtonModal = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? hp('-10%') : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
    >
      <DismissKeyboardView>
        <View
          style={{
            height: hp('65%'),
            width: wp('85%'),
            backgroundColor: 'white',
            top: hp('1%'),
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              left: wp('38%'),
            }}>
            <CloseButton setModal={props.setAddEmployeeButtonModal} />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[Typography.header]}>{Strings.addNewMember}</Text>
          </View>
          <View
            style={{
              top: hp('3%'),
              width: wp('80%'),
              height: hp('40%'),
              borderRadius: 10,
            }}>
            <View
              style={{
                top: hp('2%'),
                left: wp('6%'),
                width: wp('70%'),
              }}>
              <Text style={[Typography.placeholderSmall]}>
                {Strings.fullName}
              </Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  borderBottomColor: 'transparent',
                  width: wp('70%'),
                  height: hp('5%'),
                  color: 'black',
                }}></TextInput>
              <View
                style={{borderColor: Colors.GRAY_DARK, borderBottomWidth: 1}}
              />
            </View>
            <View
              style={{
                top: hp('5%'),
                left: wp('6%'),
                width: wp('70%'),
              }}>
              <Text style={[Typography.placeholderSmall]}>
                {Strings.companyRole}
              </Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  borderBottomColor: 'transparent',
                  width: wp('70%'),
                  height: hp('5%'),
                  color: 'black',
                }}></TextInput>
              <View
                style={{borderColor: Colors.GRAY_DARK, borderBottomWidth: 1}}
              />
            </View>
            <View
              style={{
                top: hp('8%'),
                left: wp('6%'),
                width: wp('70%'),
              }}>
              <Text style={[Typography.placeholderSmall]}>{Strings.email}</Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  borderBottomColor: 'transparent',
                  width: wp('70%'),
                  height: hp('5%'),
                  color: 'black',
                }}></TextInput>
              <View
                style={{borderColor: Colors.GRAY_DARK, borderBottomWidth: 1}}
              />
            </View>
            <View
              style={{
                top: hp('11%'),
                left: wp('6%'),
                width: wp('70%'),
              }}>
              <Text style={[Typography.placeholderSmall]}>
                {Strings.contactNumber}
              </Text>
              <TextInput
                underlineColorAndroid="transparent"
                style={{
                  borderBottomColor: 'transparent',
                  width: wp('70%'),
                  height: hp('5%'),
                  color: 'black',
                }}></TextInput>
              <View
                style={{borderColor: Colors.GRAY_DARK, borderBottomWidth: 1}}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => [
              props.setSuccesfulChangesModal(true),
              setTimeout(() => {
                props.setAddEmployeeButtonModal(false);
              }, 400),
            ]}
            style={{
              top: hp('6%'),
              width: wp('30%'),
              height: hp('5%'),
              backgroundColor: Colors.LIGHT_BLUE,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              alignSelf: 'center',
              borderRadius: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.23,
              shadowRadius: 2.62,

              elevation: 4,
            }}>
            <Text>{Strings.add}</Text>
            <Icon
              name="checkmark-circle-outline"
              size={wp('5.5%')}
              style={{left: wp('3%')}}
            />
          </TouchableOpacity>
        </View>
      </DismissKeyboardView>
    </KeyboardAvoidingView>
  );
};
