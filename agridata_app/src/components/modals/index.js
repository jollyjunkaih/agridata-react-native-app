import React from 'react';
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
import {CloseButton, AddButton} from '_components';
import {Typography, Spacing, Colors, Mixins} from '_styles';
import Icon from 'react-native-vector-icons/Ionicons';

export const SuccessfulModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(330),
        width: Mixins.scaleWidth(290),
        backgroundColor: Colors.PALE_GREEN,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View style={{top: Mixins.scaleWidth(30)}}>
        <Image
          source={require('_assets/images/Good-Vege.png')}
          style={{
            resizeMode: 'contain',
            width: Mixins.scaleWidth(200),
            height: Mixins.scaleHeight(150),
          }}
        />
      </View>
      <View style={{top: Mixins.scaleHeight(15)}}>
        <Text style={[Typography.header]}>SUCCESS!</Text>
      </View>
      <View
        style={{width: Mixins.scaleWidth(260), top: Mixins.scaleHeight(25)}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: Mixins.scaleHeight(15)},
            Typography.small,
          ]}>
          You have successfully added your crops! We'll send you a notification
          as soon as retailers buy your produce!
        </Text>
      </View>
      <View
        style={{width: Mixins.scaleWidth(260), top: Mixins.scaleHeight(50)}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: Mixins.scaleHeight(15)},
            Typography.small,
          ]}>
          Keep adding for more!
        </Text>
      </View>
    </View>
  );
};

export const UnsuccessfulModal = props => {
  return (
    <View
      style={{
        height: Mixins.scaleHeight(330),
        width: Mixins.scaleWidth(290),
        backgroundColor: Colors.LIGHT_RED,
        borderRadius: 20,
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <View style={{top: Mixins.scaleWidth(20)}}>
        <Image
          source={require('_assets/images/Bad-Vege.png')}
          style={{
            resizeMode: 'contain',
            width: Mixins.scaleWidth(200),
            height: Mixins.scaleHeight(150),
          }}
        />
      </View>
      <View style={{top: Mixins.scaleHeight(20)}}>
        <Text style={[Typography.header]}>OOPS!</Text>
      </View>
      <View
        style={{width: Mixins.scaleWidth(260), top: Mixins.scaleHeight(25)}}>
        <Text
          style={[
            {textAlign: 'center', lineHeight: Mixins.scaleHeight(15)},
            Typography.small,
          ]}>
          Something went wrong while you're
        </Text>
      </View>
    </View>
  );
};
