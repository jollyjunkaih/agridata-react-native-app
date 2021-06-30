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
import {API, graphqlOperation} from 'aws-amplify';
import {
  createRetailerCompany,
  createSupplierCompany,
  updateUser,
} from '../../../graphql/mutations';

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
        Platform.OS === 'ios'
          ? Mixins.scaleHeight(200)
          : Mixins.scaleHeight(-150)
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
              REGISTER
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
              COMPANY
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              top: Mixins.scaleHeight(50),
              left: Mixins.scaleWidth(30),
            }}>
            <Text style={[Typography.placeholder]}>Company Name</Text>
            <TextInput
              keyboardType="default"
              placeholder="eg: City Grocer"
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyName(item)}
              value={companyName}
              style={{
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(40),
                right: Mixins.scaleWidth(5),
                borderBottomColor: 'transparent',
              }}></TextInput>
            <View
              style={{
                bottom: Mixins.scaleHeight(10),
                width: Mixins.scaleWidth(290),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>
        </View>
        <View>
          <View
            style={{
              top: Mixins.scaleHeight(50),
              left: Mixins.scaleWidth(30),
            }}>
            <Text style={[Typography.placeholder]}>
              Company Registration Number
            </Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyRegistrationNum(item)}
              value={companyRegistrationNum}
              style={{
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(40),
                right: Mixins.scaleWidth(5),
                borderBottomColor: 'transparent',
              }}></TextInput>
            <View
              style={{
                bottom: Mixins.scaleHeight(10),
                width: Mixins.scaleWidth(290),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>
        </View>
        <View>
          <View
            style={{
              top: Mixins.scaleHeight(50),
              left: Mixins.scaleWidth(30),
            }}>
            <Text style={[Typography.placeholder]}>Company Address</Text>
            <TextInput
              keyboardType="default"
              placeholder="eg. Lot3, Jalan Bendera, Penampang"
              underlineColorAndroid="transparent"
              onChangeText={item => setCompanyAddress(item)}
              value={companyAddress}
              style={{
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(40),
                right: Mixins.scaleWidth(5),
                borderBottomColor: 'transparent',
              }}></TextInput>
            <View
              style={{
                bottom: Mixins.scaleHeight(10),
                width: Mixins.scaleWidth(290),
                borderBottomWidth: 1,
                borderColor: Colors.GRAY_DARK,
              }}></View>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(50),
            left: Mixins.scaleWidth(30),
            width: Mixins.scaleWidth(280),
          }}>
          <View style={{marginTop: 5}}>
            <Text style={[Typography.placeholder, {fontSize: 12}]}>
              What type of company are you running?
            </Text>
          </View>
          <View
            style={{
              width: Mixins.scaleWidth(200),
              zIndex: 1000,
              height: Mixins.scaleHeight(120),
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
                width: Mixins.scaleWidth(275),
                height: Mixins.scaleHeight(30),
                borderColor: 'white',
                borderRadius: 3,
              }}
              containerStyle={{}}
              dropDownContainerStyle={{
                borderWidth: 0,
                width: Mixins.scaleWidth(275),
                height: Mixins.scaleHeight(90),
              }}></DropDownPicker>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: Mixins.scaleHeight(80),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(150),
              height: Mixins.scaleWidth(40),
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
    </KeyboardAvoidingView>
  );
};

export const CreateAccountPopUp = props => {
  return (
    <View
      style={{
        backgroundColor: Colors.GRAY_WHITE,
        width: Mixins.scaleWidth(300),
        height: Mixins.scaleHeight(400),
        alignItems: 'center',
        left: Mixins.scaleWidth(15),
        borderRadius: 10,
      }}>
      <View>
        <View style={{top: Mixins.scaleHeight(20)}}>
          <Image
            source={require('_assets/images/verifycard.png')}
            style={{
              resizeMode: 'contain',
              width: Mixins.scaleWidth(170),
              height: Mixins.scaleHeight(120),
            }}
          />
        </View>
      </View>
      <Text
        style={[
          Typography.welcome,
          {
            width: Mixins.scaleWidth(240),
            alignSelf: 'center',
            textAlign: 'center',
            top: Mixins.scaleHeight(40),
          },
        ]}>
        YOUR ACCOUNT IS BEING VERIFIED
      </Text>

      <Text
        style={[
          Typography.normal,
          {
            width: Mixins.scaleWidth(240),
            textAlign: 'center',
            top: Mixins.scaleHeight(60),
          },
        ]}>
        Thank you for registering your company. We will review it shortly and
        approve it once verification is complete
      </Text>
    </View>
  );
};
