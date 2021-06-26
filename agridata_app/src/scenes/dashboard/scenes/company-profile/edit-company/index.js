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
import {Typography, Spacing, Colors, Mixins} from '_styles';
import {BackButton} from '_components/buttons';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';

export const EditProfile = props => {
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
        console.log(response.uri);
        setImageSource(response.uri);
      }
    });
  }
  return (
    <KeyboardAvoidingView>
      <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            top: Mixins.scaleHeight(20),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{right: Mixins.scaleWidth(120)}}>
            <BackButton navigation={props.navigation} />
          </View>
          <View style={{right: Mixins.scaleWidth(13)}}>
            <Text style={[Typography.header]}>Edit</Text>
          </View>
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(20),
            alignItems: 'center',
            justifyContent: 'center',

            width: Mixins.scaleWidth(200),
            height: Mixins.scaleHeight(150),
          }}>
          {imageSource === null ? (
            <View>
              <Image source={require('_assets/images/company-logo.png')} />
              <TouchableOpacity
                onPress={() => {
                  selectImage();
                }}>
                <Text
                  style={{textAlign: 'center', top: Mixins.scaleHeight(10)}}>
                  Change Image
                </Text>
              </TouchableOpacity>
            </View>
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
            </View>
          )}
        </View>
        <View
          style={{
            top: Mixins.scaleHeight(60),
            backgroundColor: Colors.GRAY_MEDIUM,
            width: Mixins.scaleWidth(300),
            height: Mixins.scaleHeight(250),
            borderRadius: 10,
          }}>
          <View
            style={{
              top: Mixins.scaleHeight(20),
              left: Mixins.scaleWidth(20),
              width: Mixins.scaleWidth(300),
            }}>
            <Text style={[Typography.placeholderSmall]}>Company Name</Text>
            <TextInput
              style={{
                borderColor: Colors.GRAY_DARK,
                borderBottomWidth: Mixins.scaleWidth(1),
                width: Mixins.scaleWidth(260),
              }}></TextInput>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(35),
              left: Mixins.scaleWidth(20),
              width: Mixins.scaleWidth(300),
            }}>
            <Text style={[Typography.placeholderSmall]}>
              Company Registration No.
            </Text>
            <TextInput
              style={{
                borderColor: Colors.GRAY_DARK,
                borderBottomWidth: Mixins.scaleWidth(1),
                width: Mixins.scaleWidth(260),
              }}></TextInput>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(50),
              left: Mixins.scaleWidth(20),
              width: Mixins.scaleWidth(300),
            }}>
            <Text style={[Typography.placeholderSmall]}>Company Address </Text>
            <TextInput
              style={{
                borderColor: Colors.GRAY_DARK,
                borderBottomWidth: Mixins.scaleWidth(1),
                width: Mixins.scaleWidth(260),
              }}></TextInput>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(65),
              left: Mixins.scaleWidth(20),
              width: Mixins.scaleWidth(300),
            }}>
            <Text style={[Typography.placeholderSmall]}>Contact Number </Text>
            <TextInput
              style={{
                borderColor: Colors.GRAY_DARK,
                borderBottomWidth: Mixins.scaleWidth(1),
                width: Mixins.scaleWidth(260),
              }}></TextInput>
          </View>
          <View
            style={{
              top: Mixins.scaleHeight(80),
              left: Mixins.scaleWidth(20),
              width: Mixins.scaleWidth(300),
            }}>
            <Text style={[Typography.placeholderSmall]}>Email Address </Text>
            <TextInput
              style={{
                borderColor: Colors.GRAY_DARK,
                borderBottomWidth: Mixins.scaleWidth(1),
                width: Mixins.scaleWidth(260),
              }}></TextInput>
          </View>
        </View>

        <TouchableOpacity
          style={{
            top: Mixins.scaleHeight(100),
            width: Mixins.scaleWidth(140),
            height: Mixins.scaleHeight(30),
            backgroundColor: Colors.LIGHT_BLUE,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
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
          <Text>Save Changes</Text>
          <Icon
            name="checkmark-circle-outline"
            size={Mixins.scaleWidth(20)}
            style={{left: Mixins.scaleWidth(10)}}
          />
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
