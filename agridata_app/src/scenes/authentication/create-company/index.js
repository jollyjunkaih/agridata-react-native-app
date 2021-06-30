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

export const CreateCompany = props => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Wholesaler', value: 'wholesaler'},
    {label: 'Supermarket', value: 'supermarket'},
    {label: 'Farm', value: 'farm'},
  ]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'position' : 'position'}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? Mixins.scaleHeight(200) : -180
      }>
      <SafeAreaView>
        <View>
          <TouchableOpacity
            style={{left: Mixins.scaleWidth(30), top: Mixins.scaleHeight(20)}}>
            <Icon name="arrow-back-outline" size={40} />
          </TouchableOpacity>
          <Image
            source={require('_assets/images/fruits.png')}
            style={{
              position: 'absolute',
              right: 0,
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleHeight(170),
              resizeMode: 'cover',
            }}
          />
        </View>
        <View>
          <Text
            style={[
              Typography.largestSize,
              {
                width: Mixins.scaleWidth(300),
                left: Mixins.scaleWidth(30),
                top: Mixins.scaleHeight(50),
              },
            ]}>
            CREATE
          </Text>
          <Text
            style={[
              Typography.largestSize,
              {
                width: Mixins.scaleWidth(300),
                left: Mixins.scaleWidth(30),
                top: Mixins.scaleHeight(40),
              },
            ]}>
            COMPANY
          </Text>
        </View>
        <View>
          <View
            style={{top: Mixins.scaleHeight(80), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.placeholder, {fontSize: 12}]}>
              Company Name
            </Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(100),
            left: Mixins.scaleWidth(30),
            height: Mixins.scaleHeight(50),
            width: Mixins.scaleWidth(280),
            borderColor: 'grey',
            borderWidth: 1,
          }}>
          <View style={{marginTop: 5}}>
            <Text style={[Typography.placeholder, {fontSize: 12}]}>
              {' '}
              What type of company are you running?
            </Text>
          </View>
          <View
            style={{
              width: Mixins.scaleWidth(200),
              zIndex: 1000,
              height: Mixins.scaleHeight(20),
            }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
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
              }}></DropDownPicker>
          </View>
          <View style={{top: Mixins.scaleHeight(30)}}>
            <Text style={[Typography.placeholder, {fontSize: 12}]}>
              Company License Number
            </Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
          <View style={{top: Mixins.scaleHeight(50)}}>
            <Text style={[Typography.placeholder, {fontSize: 12}]}>
              Office Address
            </Text>
            <TextInput
              keyboardType="default"
              placeholder=""
              style={{
                marginTop: 8,
                borderBottomWidth: 0.5,
                borderBottomColor: 'grey',
                width: Mixins.scaleWidth(280),
                height: Mixins.scaleHeight(20),
              }}></TextInput>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            top: Mixins.scaleHeight(250),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              width: Mixins.scaleWidth(200),
              height: Mixins.scaleWidth(30),
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
            <View style={{flexDirection: 'row', left: Mixins.scaleWidth(10)}}>
              <Text style={[Typography.normal, {fontSize: 17}]}>
                CREATE ACCOUNT
              </Text>

              <View style={{marginLeft: Mixins.scaleWidth(20)}}>
                <Icon name="arrow-forward-outline" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(270)}}>
          <Text style={[Typography.small]}>
            By continuing, you agree to our{' '}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            top: Mixins.scaleHeight(275),
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={{borderBottomWidth: 1}}>
            <Text style={[Typography.small]}>Terms of Service</Text>
          </TouchableOpacity>
          <Text
            style={[
              Typography.small,
              {
                marginLeft: Mixins.scaleWidth(5),
                marginRight: Mixins.scaleWidth(5),
              },
            ]}>
            and
          </Text>
          <TouchableOpacity style={{borderBottomWidth: 1}}>
            <Text style={[Typography.small]}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center', top: Mixins.scaleHeight(295)}}>
          <TouchableOpacity>
            <Text style={[Typography.welcome, {fontSize: 12}]}>
              Having any trouble?
            </Text>
          </TouchableOpacity>
        </View>
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
        height: Mixins.scaleHeight(350),
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
      <View style={{bottom: Mixins.scaleHeight(30)}}>
        <Text
          style={[
            Typography.welcome,
            {
              fontSize: 25,
              width: Mixins.scaleWidth(300),
              left: Mixins.scaleWidth(30),
              top: Mixins.scaleHeight(50),
            },
          ]}>
          YOUR ACCOUNT IS
        </Text>
        <Text
          style={[
            Typography.welcome,
            {
              fontSize: 25,
              width: Mixins.scaleWidth(300),
              left: Mixins.scaleWidth(30),
              top: Mixins.scaleHeight(40),
            },
          ]}>
          BEING VERIFIED
        </Text>
        <View>
          <Text>
            Hang in there! It might take some time to verify your account.
          </Text>
          <Text>
            For the meantime,you can try updating your company information.
          </Text>
        </View>
      </View>
    </View>
  );
};
