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
import {BackButton} from '_components';
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import {createUser} from '../../../graphql/mutations';
import {API, Auth, graphql} from 'aws-amplify';

export const Registration = props => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'General Manager', value: 'generalmanager'},
    {label: 'Owner', value: 'owner'},
    {label: 'Retail Manager', value: 'retailmanager'},
  ]);
  const signUp = async () => {
    try {
      const user = await Auth.signUp({
        username: phone,
        password: password,
        attributes: {
          email: email,
          phone_number: phone,
          'custom:role': value,
          name: name,
        },
      });
      console.log(user.userSub);
      props.navigation.navigate('signin');
      return user.userSub;
    } catch (error) {
      console.log('❌ Error signing up...', error);
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
          width: Mixins.scaleWidth(360),
          height: Mixins.scaleHeight(640),
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
              CREATE
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
              ACCOUNT
            </Text>
          </View>
          <View
            style={{top: Mixins.scaleHeight(10), left: Mixins.scaleWidth(30)}}>
            <Text style={[Typography.large]}>Begin your journey with us!</Text>
          </View>
          <View style={{top: Mixins.scaleHeight(-20)}}>
            <View
              style={{
                top: Mixins.scaleHeight(50),
                left: Mixins.scaleWidth(30),
              }}>
              <Text style={[Typography.placeholder]}>Name</Text>
              <TextInput
                keyboardType="default"
                placeholder="John Doe"
                underlineColorAndroid="transparent"
                onChangeText={item => setName(item)}
                value={name}
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
                top: Mixins.scaleHeight(50),
                left: Mixins.scaleWidth(30),
              }}>
              <Text style={[Typography.placeholder]}>Phone Number</Text>
              <TextInput
                keyboardType="default"
                placeholder="+60109336377"
                underlineColorAndroid="transparent"
                onChangeText={item => setPhone(item)}
                value={phone}
                style={{
                  right: Mixins.scaleWidth(5),
                  width: Mixins.scaleWidth(280),
                  height: Mixins.scaleHeight(40),
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
                top: Mixins.scaleHeight(50),
                left: Mixins.scaleWidth(30),
              }}>
              <Text style={[Typography.placeholder]}>Email Address</Text>
              <TextInput
                keyboardType="default"
                placeholder="example@example.com"
                underlineColorAndroid="transparent"
                onChangeText={item => setEmail(item)}
                value={email}
                style={{
                  right: Mixins.scaleWidth(5),
                  width: Mixins.scaleWidth(280),
                  height: Mixins.scaleHeight(40),
                  color: 'black',
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
            <View
              style={{
                top: Mixins.scaleHeight(50),
                left: Mixins.scaleWidth(30),
              }}>
              <Text style={[Typography.placeholder]}>Password</Text>
              <TextInput
                keyboardType="default"
                placeholder="password"
                underlineColorAndroid="transparent"
                onChangeText={item => setPassword(item)}
                value={password}
                style={{
                  right: Mixins.scaleWidth(5),
                  width: Mixins.scaleWidth(280),
                  height: Mixins.scaleHeight(40),
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
          </View>
          <View
            style={{
              left: Mixins.scaleWidth(20),
              top: Mixins.scaleHeight(30),
              height: Mixins.scaleHeight(100),
              zIndex: 2,
            }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              placeholder={'Role in Company'}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                width: Mixins.scaleWidth(275),
                height: Mixins.scaleHeight(30),
                borderColor: 'white',
                borderRadius: 3,
              }}
              dropDownDirection="BOTTOM"
              listItemContainerStyle={{height: Mixins.scaleHeight(25)}}
              dropDownContainerStyle={{
                borderWidth: 1,
                width: Mixins.scaleWidth(275),
              }}></DropDownPicker>
          </View>
          <View
            style={{
              justifyContent: 'center',
              bottom: Mixins.scaleHeight(20),
              flexDirection: 'row',
            }}>
            <Text style={[Typography.placeholderSmall]}>
              By continuing, you agree to our
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                left: Mixins.scaleWidth(2),
              }}>
              <TouchableOpacity style={{borderBottomWidth: 1}}>
                <Text style={[Typography.placeholderSmall]}>
                  Terms of Service
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  Typography.placeholderSmall,
                  {
                    marginLeft: Mixins.scaleWidth(5),
                    marginRight: Mixins.scaleWidth(5),
                  },
                ]}>
                and
              </Text>
              <TouchableOpacity style={{borderBottomWidth: 1}}>
                <Text style={[Typography.placeholderSmall]}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{alignItems: 'center', bottom: Mixins.scaleHeight(15)}}>
            <TouchableOpacity>
              <Text style={[Typography.placeholderSmall]}>
                Having any trouble?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={async () => {
              if (
                value == null ||
                email == '' ||
                phone == '' ||
                name == '' ||
                password == ''
              ) {
                console.log('error');
              } else {
                try {
                  const userID = await signUp();
                } catch {
                  e => console.log('error ' + e);
                }
              }
            }}
            style={{
              backgroundColor: Colors.LIGHT_BLUE,
              top: Mixins.scaleHeight(10),
              width: Mixins.scaleWidth(100),
              height: Mixins.scaleWidth(30),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              borderRadius: 10,
              flexDirection: 'row',
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: 2,
              shadowRadius: 3,
              shadowColor: 'grey',
            }}>
            <Text
              style={[
                Typography.large,
                {position: 'absolute', left: Mixins.scaleWidth(20)},
              ]}>
              NEXT
            </Text>
            <View
              style={{
                marginLeft: Mixins.scaleWidth(45),
                bottom: Mixins.scaleHeight(1),
              }}>
              <Icon name="arrow-forward-outline" size={Mixins.scaleWidth(20)} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
