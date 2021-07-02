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
        width: Mixins.scaleWidth(250),
        left: Mixins.scaleWidth(20),
        bottom: Mixins.scaleHeight(20),
      }}>
      <Icon name="add-circle-outline" size={Mixins.scaleWidth(20)} />
      <Text
        style={[
          Typography.normal,
          {left: Mixins.scaleWidth(10), color: Colors.LIME_GREEN},
        ]}>
        Add New Team Member
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
  const [imageSource, setImageSource] = useState(null);

  function selectImage() {
    let options = {
      mediaType: 'photo',
      maxWidth: 256,
      maxHeight: 256,
    };

    launchImageLibrary(options, response => {
      console.log({response});

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let photo = {uri: response.uri};
        console.log({photo});
        console.log(response.assets[0].uri);
        setImageSource(response.assets[0].uri);
      }
    });
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(-35) : -180
      } /* Keyboard Offset needs to be tested against multiple phones */
    >
      <DismissKeyboardView>
        <View
          style={{
            height: Mixins.scaleHeight(480),
            width: Mixins.scaleWidth(290),
            backgroundColor: 'white',
            top: Mixins.scaleHeight(8),
            borderRadius: 10,
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              left: Mixins.scaleWidth(140),
              top: Mixins.scaleHeight(-10),
            }}>
            <CloseButton setModal={props.setAddEmployeeButtonModal} />
          </View>
          <View style={{top: Mixins.scaleHeight(-10), alignItems: 'center'}}>
            <Text style={[Typography.header]}>Add New Member</Text>
            <View
              style={{
                alignItems: 'center',
                width: Mixins.scaleWidth(80),
                height: Mixins.scaleWidth(80),
                borderRadius: 100,
                borderColor: 'black',
                borderStyle: 'dashed',
                borderWidth: Mixins.scaleWidth(1),
                backgroundColor: Colors.GRAY_LIGHT,
                top: Mixins.scaleHeight(10),
              }}>
              {imageSource === null ? (
                <TouchableOpacity
                  onPress={() => {
                    selectImage();
                  }}>
                  <Icon
                    name="add-outline"
                    size={Mixins.scaleWidth(80)}
                    style={{
                      bottom: Mixins.scaleHeight(3),
                      left: Mixins.scaleWidth(2),
                    }}
                    source={require('_assets/images/agridata.png')}
                  />
                </TouchableOpacity>
              ) : (
                <View>
                  <Image
                    source={{uri: imageSource}}
                    style={{
                      resizeMode: 'cover',
                      width: Mixins.scaleWidth(100),
                      height: Mixins.scaleWidth(100),
                      borderRadius: 100,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      selectImage();
                    }}
                    style={{
                      borderRadius: 100,
                      height: Mixins.scaleWidth(40),
                      width: Mixins.scaleWidth(40),
                      backgroundColor: Colors.LIGHT_BLUE,
                      bottom: Mixins.scaleWidth(30),
                      left: Mixins.scaleWidth(75),
                      justifyContent: 'center',
                      alignItems: 'center',
                      shadowOffset: {
                        width: 1,
                        height: 1,
                      },
                      shadowOpacity: 2,
                      shadowRadius: 3,
                      shadowColor: 'grey',
                    }}>
                    <Icon type="ionicon" name="pencil" size={25} />
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <Text style={{top: Mixins.scaleHeight(20)}}>Add Photo</Text>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(10),
              width: Mixins.scaleWidth(290),
              height: Mixins.scaleHeight(250),
              borderRadius: 10,
            }}>
            <View
              style={{
                top: Mixins.scaleHeight(20),
                left: Mixins.scaleWidth(20),
                width: Mixins.scaleWidth(250),
              }}>
              <Text style={[Typography.placeholderSmall]}>Full Name</Text>
              <TextInput
                style={{
                  borderColor: Colors.GRAY_DARK,
                  borderBottomWidth: Mixins.scaleWidth(0.5),
                  width: Mixins.scaleWidth(250),
                  height: Mixins.scaleHeight(30),
                }}></TextInput>
            </View>
            <View
              style={{
                top: Mixins.scaleHeight(40),
                left: Mixins.scaleWidth(20),
                width: Mixins.scaleWidth(250),
              }}>
              <Text style={[Typography.placeholderSmall]}>Company Role </Text>
              <TextInput
                style={{
                  borderColor: Colors.GRAY_DARK,
                  borderBottomWidth: Mixins.scaleWidth(0.5),
                  width: Mixins.scaleWidth(250),
                  height: Mixins.scaleHeight(30),
                }}></TextInput>
            </View>
            <View
              style={{
                top: Mixins.scaleHeight(60),
                left: Mixins.scaleWidth(20),
                width: Mixins.scaleWidth(250),
              }}>
              <Text style={[Typography.placeholderSmall]}>Email Address </Text>
              <TextInput
                style={{
                  borderColor: Colors.GRAY_DARK,
                  borderBottomWidth: Mixins.scaleWidth(0.5),
                  width: Mixins.scaleWidth(250),
                  height: Mixins.scaleHeight(30),
                }}></TextInput>
            </View>
            <View
              style={{
                top: Mixins.scaleHeight(80),
                left: Mixins.scaleWidth(20),
                width: Mixins.scaleWidth(250),
              }}>
              <Text style={[Typography.placeholderSmall]}>Contact Number </Text>
              <TextInput
                style={{
                  borderColor: Colors.GRAY_DARK,
                  borderBottomWidth: Mixins.scaleWidth(0.5),
                  width: Mixins.scaleWidth(250),
                  height: Mixins.scaleHeight(30),
                }}></TextInput>
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
              top: Mixins.scaleHeight(25),
              width: Mixins.scaleWidth(100),
              height: Mixins.scaleHeight(30),
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
            <Text>ADD</Text>
            <Icon
              name="checkmark-circle-outline"
              size={Mixins.scaleWidth(20)}
              style={{left: Mixins.scaleWidth(10)}}
            />
          </TouchableOpacity>
        </View>
      </DismissKeyboardView>
    </KeyboardAvoidingView>
  );
};
