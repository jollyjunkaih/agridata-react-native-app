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
import DropDownPicker from 'react-native-dropdown-picker';
import Modal from 'react-native-modal';
import {DismissKeyboardView} from '_components';
import {API, graphqlOperation} from 'aws-amplify';
import Strings from '_utils';
import {
  createRetailerCompany,
  createSupplierCompany,
  updateUser,
} from '../../../graphql/mutations';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const CreateCompany = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Wholesaler', value: 'wholesaler'},
    {label: 'Supermarket', value: 'supermarket'},
    {label: 'Farm', value: 'farm'},
  ]);
  const [createAccountButton, setCreateAccountButton] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyRegistrationNum, setCompanyRegistrationNum] = useState('');
  const registerCompany = async () => {
    console.log('registering');
    console.log(props.user.id);
    if (value == 'supermarket') {
      try {
        const supermarket = await API.graphql({
          query: createRetailerCompany,
          variables: {
            input: {
              name: companyName,
              type: value,
              address: companyAddress,
              registrationNumber: companyRegistrationNum,
            },
          },
        });
        console.log(supermarket);
        const user = await API.graphql({
          query: updateUser,
          variables: {
            input: {
              id: props.user.id,
              retailerCompanyID: supermarket.data.createRetailerCompany.id,
            },
          },
        });
        console.log(user);
        console.log('add retailer success');
        setCreateAccountButton(true);
      } catch {
        e => console.log(e);
      }
    } else {
      try {
        const supplier = await API.graphql({
          query: createSupplierCompany,
          variables: {
            input: {
              name: companyName,
              type: value,
              address: companyAddress,
              registrationNumber: companyRegistrationNum,
            },
          },
        });
        console.log(supplier);
        const user = await API.graphql({
          query: updateUser,
          variables: {
            input: {
              id: props.user.id,
              supplierCompanyID: supplier.data.createSupplierCompany.id,
            },
          },
        });
        console.log(user);
        console.log('add supplier success');
        setCreateAccountButton(true);
      } catch {
        e => console.log(e);
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? hp('-30%') : Mixins.scaleHeight(-150)
      }>
      <DismissKeyboardView>
        <SafeAreaView
          style={{
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
              left: wp('50%'),
              width: wp('50%'),
              height: hp('30%'),
              resizeMode: 'cover',
            }}
          />
          <View style={{top: hp('6%')}}>
            <View>
              <Text
                style={[
                  Typography.largestSize,
                  {
                    width: wp('80%'),
                    left: wp('8%'),
                  },
                ]}>
                REGISTER
              </Text>
              <Text
                style={[
                  Typography.largestSize,
                  {
                    width: wp('80%'),
                    left: wp('8%'),
                    top: hp('-1%'),
                  },
                ]}>
                COMPANY
              </Text>
            </View>
          </View>

          <View
            style={{
              top: hp('7%'),
              left: wp('8%'),
            }}>
            <Text style={[Typography.placeholder]}>{Strings.companyName}</Text>
            <TextInput
              keyboardType="default"
              placeholder="eg: City Grocer"
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyName(item)}
              value={companyName}
              style={{
                width: wp('50%'),
                height: hp('7%'),
              }}></TextInput>
            <View
              style={{
                width: wp('80%'),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>

          <View
            style={{
              top: hp('8%'),
              left: wp('8%'),
            }}>
            <Text style={[Typography.placeholder]}>
              {Strings.companyRegistrationNum}
            </Text>
            <TextInput
              keyboardType="default"
              placeholder="######"
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyRegistrationNum(item)}
              value={companyRegistrationNum}
              style={{
                width: wp('50%'),
                height: hp('7%'),
              }}></TextInput>
            <View
              style={{
                width: wp('80%'),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>

          <View
            style={{
              top: hp('9%'),
              left: wp('8%'),
            }}>
            <Text style={[Typography.placeholder]}>Company Address</Text>
            <TextInput
              keyboardType="default"
              placeholder="eg. Lot3, Jalan Bendera, Penampang"
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyAddress(item)}
              value={companyAddress}
              style={{
                width: wp('50%'),
                height: hp('7%'),
              }}></TextInput>
            <View
              style={{
                width: wp('80%'),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>

          <View
            style={{
              top: hp('10%'),
              left: wp('8%'),
            }}>
            <View>
              <Text style={[Typography.placeholder, {fontSize: 12}]}>
                What type of company are you running?
              </Text>
            </View>
            <View
              style={{
                zIndex: 1000,
                top: hp('1%'),
                left: wp('-1%'),
              }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownDirection="BOTTOM"
                listItemContainerStyle={{height: Mixins.scaleHeight(30)}}
                style={{
                  width: wp('80%'),
                  height: hp('5%'),
                  borderColor: 'white',
                  borderRadius: 3,
                  backgroundColor: Colors.GRAY_LIGHT,
                }}
                containerStyle={{}}
                dropDownContainerStyle={{
                  borderWidth: 0,
                  width: wp('80%'),
                  height: hp('15%'),
                  backgroundColor: Colors.GRAY_LIGHT,
                }}></DropDownPicker>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              top: hp('25%'),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.LIGHT_BLUE,
                width: wp('45%'),
                height: hp('7%'),
                justifyContent: 'center',
                borderRadius: 20,
                shadowOffset: {
                  width: 1,
                  height: 2,
                },
                shadowOpacity: 2,
                shadowRadius: 3,
                shadowColor: 'grey',
              }}
              onPress={() => {
                if (
                  value == null ||
                  companyName == '' ||
                  companyRegistrationNum == '' ||
                  companyAddress == ''
                ) {
                  console.log('oops');
                } else {
                  registerCompany();
                }
              }}>
              <View style={{alignSelf: 'center'}}>
                <Text style={[Typography.large]}>REGISTER</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Modal
            isVisible={createAccountButton}
            onBackdropPress={() => {
              setCreateAccountButton(false);
              props.navigation.navigate('verification');
            }}>
            <CreateAccountPopUp
              setCreateAccountButton={
                setCreateAccountButton
              }></CreateAccountPopUp>
          </Modal>
        </SafeAreaView>
      </DismissKeyboardView>
    </KeyboardAvoidingView>
  );
};

export const CreateAccountPopUp = props => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: Colors.GRAY_WHITE,
          width: wp('80%'),
          height: hp('60%'),
          top: hp('15%'),
          borderRadius: 10,
          alignItems: 'center',
        }}>
        <View>
          <View style={{top: hp('3%'), alignItems: 'center'}}>
            <Image
              source={require('_assets/images/verifycard.png')}
              style={{
                resizeMode: 'contain',
                width: wp('50%'),
                height: hp('20%'),
              }}
            />
          </View>
        </View>
        <Text
          style={[
            Typography.welcome,
            {
              width: wp('70%'),
              alignSelf: 'center',
              textAlign: 'center',
              top: hp('5%'),
            },
          ]}>
          YOUR ACCOUNT IS BEING VERIFIED
        </Text>

        <Text
          style={[
            Typography.normal,
            {
              width: wp('70%'),
              textAlign: 'center',
              top: hp('7%'),
            },
          ]}>
          Thank you for registering your company. We will review it shortly and
          approve it once verification is complete
        </Text>
      </View>
    </View>
  );
};
