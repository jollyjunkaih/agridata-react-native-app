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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DismissKeyboardView} from '_components';

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
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp('-20%') : -180}>
      <SafeAreaView
        style={{
          backgroundColor: 'white',
          height: hp('100%'),
          width: wp('100%'),
        }}>
        <DismissKeyboardView>
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
              width: wp('50%'),
              height: hp('30%'),
              resizeMode: 'cover',
              top: hp('-8%'),
            }}
          />
          <View style={{top: hp('3%')}}>
            <View>
              <Text
                style={[
                  Typography.largestSize,
                  {width: wp('80%'), left: wp('8%'), top: hp('3%')},
                ]}>
                CREATE
              </Text>
              <Text
                style={[
                  Typography.largestSize,
                  {
                    width: wp('80%'),
                    left: wp('8%'),
                    top: hp('2%'),
                  },
                ]}>
                ACCOUNT
              </Text>
            </View>
            <View style={{top: hp('2%'), left: wp('8%')}}>
              <Text style={[Typography.large]}>
                Begin your journey with us!
              </Text>
            </View>
            <View>
              <View
                style={{
                  top: hp('4%'),
                  left: wp('8%'),
                }}>
                <Text style={[Typography.placeholder]}>Name</Text>
                <TextInput
                  keyboardType="default"
                  placeholder="John Doe"
                  underlineColorAndroid="transparent"
                  onChangeText={item => setName(item)}
                  value={name}
                  style={{
                    width: wp('80%'),
                    height: hp('6%'),
                  }}></TextInput>
                <View
                  style={{
                    width: wp('85%'),
                    borderBottomWidth: 1,
                    borderColor: Colors.GRAY_DARK,
                  }}></View>
              </View>
              <View
                style={{
                  top: hp('5%'),
                  left: wp('8%'),
                }}>
                <Text style={[Typography.placeholder]}>Phone Number</Text>
                <TextInput
                  keyboardType="default"
                  placeholder="+60109336377"
                  underlineColorAndroid="transparent"
                  onChangeText={item => setPhone(item)}
                  value={phone}
                  style={{
                    width: wp('50%'),
                    height: hp('6%'),
                  }}></TextInput>
                <View
                  style={{
                    width: wp('85%'),
                    borderBottomWidth: 1,
                    borderColor: Colors.GRAY_DARK,
                  }}></View>
              </View>
              <View
                style={{
                  top: hp('6%'),
                  left: wp('8%'),
                }}>
                <Text style={[Typography.placeholder]}>Email Address</Text>
                <TextInput
                  keyboardType="default"
                  placeholder="example@example.com"
                  underlineColorAndroid="transparent"
                  onChangeText={item => setEmail(item)}
                  value={email}
                  style={{
                    width: wp('50%'),
                    height: hp('6%'),
                  }}></TextInput>
                <View
                  style={{
                    width: wp('85%'),
                    borderBottomWidth: 1,
                    borderColor: Colors.GRAY_DARK,
                  }}></View>
              </View>
              <View
                style={{
                  top: hp('6%'),
                  left: wp('8%'),
                }}>
                <Text style={[Typography.placeholder]}>Password</Text>
                <TextInput
                  keyboardType="default"
                  placeholder="password"
                  underlineColorAndroid="transparent"
                  onChangeText={item => setPassword(item)}
                  value={password}
                  style={{
                    width: wp('50%'),
                    height: hp('6%'),
                  }}></TextInput>
                <View
                  style={{
                    width: wp('85%'),
                    borderBottomWidth: 1,
                    borderColor: Colors.GRAY_DARK,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                left: wp('8%'),
                top: hp('8%'),
                height: hp('20%'),
                zIndex: 2,

                height: hp('7%'),
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
                  width: wp('85%'),
                  height: hp('6%'),
                  borderColor: 'white',
                  borderRadius: 3,
                  backgroundColor: Colors.GRAY_LIGHT,
                }}
                dropDownDirection="BOTTOM"
                listItemContainerStyle={{height: Mixins.scaleHeight(25)}}
                dropDownContainerStyle={{
                  borderWidth: 1,
                  width: wp('85%'),
                  backgroundColor: Colors.GRAY_LIGHT,
                }}></DropDownPicker>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                bottom: hp('4%'),
                width: wp('85%'),
                left: wp('8%'),
                top: hp('10%'),
              }}>
              <Text style={[Typography.placeholderSmall]}>
                By continuing, you are agreeing to our {'\n'}
              </Text>
              <View
                style={{
                  bottom: hp('1%'),
                  flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Text
                    style={[
                      Typography.placeholderSmall,
                      {textDecorationLine: 'underline'},
                    ]}>
                    Terms of Service
                  </Text>
                </TouchableOpacity>
                <Text
                  style={[
                    Typography.placeholderSmall,
                    {marginLeft: wp('1%'), marginRight: wp('1%')},
                  ]}>
                  and
                </Text>
                <TouchableOpacity>
                  <Text
                    style={[
                      Typography.placeholderSmall,
                      {textDecorationLine: 'underline'},
                    ]}>
                    Privacy Policy
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'center', top: hp('12%')}}>
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
                top: hp('15%'),
                width: wp('30%'),
                height: hp('4%'),
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
                elevation: 3,
              }}>
              <Text
                style={[
                  Typography.large,
                  {position: 'absolute', left: wp('3%')},
                ]}>
                NEXT
              </Text>

              <Icon
                name="arrow-forward-outline"
                size={wp('6%')}
                style={{left: wp('10%')}}
              />
            </TouchableOpacity>
          </View>
        </DismissKeyboardView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
